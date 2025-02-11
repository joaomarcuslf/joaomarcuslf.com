---
layout: mentorship
title: Golang 02 - Refatorando nossos serviços
subtitle: Convertendo nosso App em Web App
type: lesson
---

## Expectativas

Nessa aula vamos aprender como declarar, e importar um pacote dentro do seu projeto, alguns padrões de projetos como o Wrapper, e um padrão de instanciação do Go que se assemelha muito ao que usamos na [Programação Orientada a Objeto](https://en.wikipedia.org/wiki/Object-oriented_programming).

----

Ponto de partida desse post:

<div>
  {%
    include components/project-card.html
      main="go"
      name="go-mentorship"
      user="joaomarcuslf"
      repo="go-mentorship"
      extra="/tree/lesson-02"
  %}
</div>

## Recapitulando

Na aula anterior, nós criamos um código que recebia do usuário uma string, e criava um QR Code, porém nós deixamos nossa `main()` muito poluída, na nossa aula de hoje nós vamos criar refatorar nosso código seguindo a filosofia de manter o código mais limpo, e seguindo princípio de responsabilidade única.

Vamos começar criando nossas pastas:

```bash
mkdir services

mkdir services/generators
touch services/generators/qrcode.go

mkdir services/io
touch services/io/cli.go
```

## Lidando com IO

Vamos trabalhar no arquivo `services/io/cli.go`. A responsabilidade desse serviço será cuidar do `IO` da aplicação, apesar de óbvio, isso pode significar que ele será um logger em arquivo, um logger em CLI, ou qualquer outro tipo de log. Nessa aplicação por ser simples, ele irá ser um log em CLI, vamos começar a escrever nosso código.

> IO é um termo que referencia entrada e saída de dados, ou seja, dados que são lidos ou escritos. O I vem de Input, e O vem de Output.

Vamos começar o arquivo declarando o pacote, e adicionando os imports.

```go
package services

import "fmt"
```

Agora, talvez você não conheça esse tipo de declaração, mas se você está habituado com [Programação Orientada a Objeto](https://en.wikipedia.org/wiki/Object-oriented_programming), você irá pegar rápido, mas basicamente nós iremos definir uma [Struct](https://gobyexample.com/structs), e dizer algumas funções que ela terá.

```go
type CLI struct{}

func NewCLI() *CLI {
  return &CLI{}
}
```

Começamos declarando, o `Read`, ele seguirá a mesma ideia que existia antes. Utilizaremos o `fmt` para capturar o valor do usuário, e retornar o valor. E logo em seguida declaramos o `Write`, que irá escrever o valor no console.

```go
func (io *CLI) Read() string {
  var input string
  fmt.Scanln(&input)

  return input
}

func (io *CLI) Write(output string) {
  fmt.Println(output)
}
```

## Criando um QR Code

Vamos trabalhar no arquivo `services/generators/qrcode.go`.

Vamos seguir mais ou menos a mesma ideia do IO.

```go
package services

import (
  "fmt"
  "image/png"
  "io"

  "github.com/boombuler/barcode"
  "github.com/boombuler/barcode/qr"
)

type QRCode struct {
  barcode *barcode.Barcode
  width   int
  height  int
}

func NewQRCode() *QRCode {
  return &QRCode{
    width:  200,
    height: 200,
  }
}
```

Agora vamos declarar dois métodos, `SetBarcode`, e `ToPNG`.

A ideia, do `SetBarcode`, é utilizando nossa struct armazenar o Barcode, e facilitar a escrita desse barcode eventualmente num PNG, ou em qualquer outro formato.

```go
func (generator *QRCode) SetBarcode(input string) *QRCode {
  qrCode, err := qr.Encode(input, qr.M, qr.Auto)

  if err != nil {
    return generator
  }

  qrCode, err = barcode.Scale(qrCode, generator.width, generator.height)

  if err != nil {
    return generator
  }

  generator.barcode = &qrCode

  return generator
}
```

Já o `ToPNG`, ele irá escrever o PNG dado um IO Writer.

```go
func (generator *QRCode) ToPNG(w io.Writer) error {
  if generator.barcode == nil {
    return fmt.Errorf("barcode is nil")
  }

  err := png.Encode(w, *generator.barcode)

  return err
}
```

> Você entende por quê é melhor envolver o Barcode na nossa struct? Isso é um Wrapper, é um padrão de software, que utilizamos para envolver valores que vêm de libs externas, pois caso precisemos mudar a lib, nós só mudamos o Wrapper, e não o código que consome ele. Não é necessário sempre, porém no nosso caso, eventualmente nós vamos mudar a assinatura do `ToPNG`, então vai ser importante fazer isso agora.

Vamos atualizar nosso `main.go` para utilizar nosso código:

> Perceba que estamos utilizando um padrão de importação que é nomeado, nós estamos atribuindo um nome ao pacote que importamos, já que nós não estamos importando diretamente de `services`, e sim `services/io`, faz sentido nomearmos a importação. Consulte o conteúdo adicional para mais detalhes.

```go
package main

import (
  "os"

  generator "github.com/joaomarcuslf/qr-generator/services/generators"
  io "github.com/joaomarcuslf/qr-generator/services/io"
)

func main() {
  file, err := os.Create("qrcode.png")
  defer file.Close()

  if err != nil {
    panic(err)
  }

  cli := io.NewCLI()
  qr := generator.NewQRCode()

  cli.Write("Enter your string: ")

  qr.SetBarcode(cli.Read()).ToPNG(file)
}
```

## Concluindo

Nessa aula nós só refatoramos o código, na próxima nós vamos adicionar um servidor HTTP, e vamos mudar os inputs, e outputs para algo mais interessante.

## Adicionais

- [StackOverflow Golang Imports](https://stackoverflow.com/questions/10408646/how-to-import-and-use-different-packages-of-the-same-name)
- [Import declarations in Go](https://medium.com/golangspec/import-declarations-in-go-8de0fd3ae8ff)

{% include components/golang-mentorship-footer.md %}
