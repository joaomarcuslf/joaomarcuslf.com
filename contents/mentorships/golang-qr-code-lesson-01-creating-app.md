---

layout: mentorship
title: Golang 01 - Criando nosso App
subtitle: Um App simples gerador de QR code
img: https://raw.githubusercontent.com/devicons/devicon/master/icons/go/go-original.svg
alt: "go logo"
link: /mentorships/golang-qr-code-lesson-01-creating-app
internal: true
draft: false
lang: pt
tags:
  - Go
---

Essa sequência de aulas irá te ensinar o básico sobre como desenvolver com Golang. Para isso, nós vamos utilizar um repositório no github onde eu vou colocar todos os arquivos que serão utilizados para desenvolver o projeto, assim como as explicações.

## Expectativas

Nessa aula vamos aprender como baixar um pacote em Go, como receber valores do usuário e devolver valores na tela via CLI, além de como importar tanto pacotes internos quanto externos.

> O termo CLI vem de Command Line Interface, você pode conhecer mais esse termo [aqui](https://en.wikipedia.org/wiki/Command-line_interface).

## Ponto de partida

<article class="project-card" data-gh-project="joaomarcuslf/go-mentorship">
  <figure class="project-card-image">
    <p class="image">
      <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/go/go-original.svg" alt="go logo" width="128" height="128" />
    </p>
  </figure>
  <div class="project-card-content">
    <header class="project-card-header">
      <p class="project-card-subtitle">
        On <a target="blank" href="https://github.com/joaomarcuslf/go-mentorship/tree/lesson-01" title="View on GitHub">GitHub</a>
        <small>#/tree/lesson-01</small>
      </p>
      <a target="blank" href="https://github.com/joaomarcuslf/go-mentorship/tree/lesson-01" title="View on GitHub">
        <h6 class="project-card-title">go-mentorship</h6>
      </a>
    </header>
  </div>
</article>

## Primeiros passos

Vamos começar criando o nosso arquivo principal:

```bash
touch main.go
```

Abra o `main.go` e adicione o seguinte código:

```go
package main

import (
  "fmt"
)

func main() {
  fmt.Println("Hello, world!")
}
```

Para rodar o código:

```bash
go run main.go
```

## Adicionando Barcode

Vamos utilizar a biblioteca [boombuler/barcode](https://github.com/boombuler/barcode) para gerar QR codes.

Instale a biblioteca com:

```bash
go get github.com/boombuler/barcode
```

Atualize os imports do `main.go`:

```go
import (
  "image/png"
  "os"
  "github.com/boombuler/barcode"
  "github.com/boombuler/barcode/qr"
)
```

Agora, vamos gerar um QR code:

```go
input := "Hello, world!"
qrCode, err := qr.Encode(input, qr.M, qr.Auto)
if err != nil {
  panic(err)
}
```

Escalamos o QR code para um tamanho adequado:

```go
qrCode, err = barcode.Scale(qrCode, 200, 200)
if err != nil {
  panic(err)
}
```

Criamos e salvamos o arquivo de saída:

```go
file, err := os.Create("qrcode.png")
defer file.Close()
if err != nil {
  panic(err)
}

png.Encode(file, qrCode)
```

Para rodar o código e gerar o QR code:

```bash
go run main.go
```

## Recebendo input do usuário

Modifique o código para receber uma string do usuário:

```go
import "fmt"

var input string
fmt.Println("Enter your string: ")
fmt.Scanln(&input)
```

## Conclusão

Agora seu código consegue gerar QR codes dinâmicos. Nas próximas aulas, vamos refatorar o código para melhorar sua organização.

## Link do Projeto

## Lista de aulas

- [Golang 00 - Primeiros passos](/mentorships/golang-qr-code-lesson-00-getting-started)
- [Golang 01 - Criando nosso App](/mentorships/golang-qr-code-lesson-01-creating-app)
- [Golang 02 - Refatorando nossos serviços](/mentorships/golang-qr-code-lesson-02-refactoring)
- [Golang 03 - Adicionando nosso servidor](/mentorships/golang-qr-code-lesson-03-web-server)
- [Golang 04 - Adicionando rota geradora](/mentorships/golang-qr-code-lesson-04-generate-qr)
- [Golang 05 - Adicionando nossa API](/mentorships/golang-qr-code-lesson-05-add-api)
- [Golang 06 - Consumindo API](/mentorships/golang-qr-code-lesson-06-consuming-api)
- [Golang 07 - Expandindo o Front-end](/mentorships/golang-qr-code-lesson-07-expanding-the-front-end)

