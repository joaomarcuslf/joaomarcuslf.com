---
layout: mentorship
title: Golang 02 - Refatorando nossos serviços
subtitle: Convertendo nosso App em Web App
img: https://raw.githubusercontent.com/devicons/devicon/master/icons/go/go-original.svg
alt: "go logo"
link: /mentorships/golang-qr-code-lesson-02-refactoring
internal: true
draft: false
lang: pt
tags:
  - Go
---

Essa sequência de aulas irá te ensinar o básico sobre como desenvolver com Golang. Para isso, nós vamos utilizar um repositório no github onde eu vou colocar todos os arquivos que serão utilizados para desenvolver o projeto, assim como as explicações.

## Expectativas

Nessa aula vamos aprender como declarar e importar um pacote dentro do seu projeto, além de padrões de projeto como Wrapper e um padrão de instanciação no Go semelhante ao que usamos na [Programação Orientada a Objetos](https://en.wikipedia.org/wiki/Object-oriented_programming).

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
        On <a target="blank" href="https://github.com/joaomarcuslf/go-mentorship/tree/lesson-02" title="View on GitHub">GitHub</a>
        <small>#/tree/lesson-02</small>
      </p>
      <a target="blank" href="https://github.com/joaomarcuslf/go-mentorship/tree/lesson-02" title="View on GitHub">
        <h6 class="project-card-title">go-mentorship</h6>
      </a>
    </header>
  </div>
</article>

## Recapitulando

Na aula anterior, criamos um código que recebia do usuário uma string e gerava um QR Code. No entanto, deixamos nossa `main()` muito poluída. Hoje, vamos refatorar nosso código seguindo boas práticas de organização e o princípio da responsabilidade única.

## Estruturando o projeto

Crie as seguintes pastas e arquivos:

```bash
mkdir services
mkdir services/generators
mkdir services/io

# Arquivos para organização do código
 touch services/generators/qrcode.go
 touch services/io/cli.go
```

## Lidando com IO

No arquivo `services/io/cli.go`, vamos criar um serviço para manipular a entrada e saída de dados no terminal.

```go
package services

import "fmt"

type CLI struct{}

func NewCLI() *CLI {
  return &CLI{}
}

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

No arquivo `services/generators/qrcode.go`, vamos encapsular a geração de QR codes em uma struct.

```go
package services

import (
  "image/png"
  "os"
  "github.com/boombuler/barcode"
  "github.com/boombuler/barcode/qr"
)

type QRCode struct {
  barcode barcode.Barcode
  width   int
  height  int
}

func NewQRCode() *QRCode {
  return &QRCode{width: 200, height: 200}
}

func (generator *QRCode) SetBarcode(input string) *QRCode {
  qrCode, err := qr.Encode(input, qr.M, qr.Auto)
  if err != nil {
    return generator
  }

  qrCode, err = barcode.Scale(qrCode, generator.width, generator.height)
  if err != nil {
    return generator
  }

  generator.barcode = qrCode
  return generator
}

func (generator *QRCode) ToPNG(file *os.File) error {
  if generator.barcode == nil {
    return fmt.Errorf("barcode is nil")
  }
  return png.Encode(file, generator.barcode)
}
```

## Atualizando o `main.go`

Atualize o `main.go` para utilizar os serviços recém-criados:

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

## Conclusão

Refatoramos nosso código para melhorar sua organização e modularidade. Na próxima aula, vamos adicionar um servidor HTTP para tornar nosso QR Code acessível via API.

## Link do Projeto

<article class="project-card" data-gh-project="joaomarcuslf/go-mentorship">
  <figure class="project-card-image">
    <p class="image">
      <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/go/go-original.svg" alt="go logo" width="128" height="128" />
    </p>
  </figure>
  <div class="project-card-content">
    <header class="project-card-header">
      <p class="project-card-subtitle">
        On <a target="blank" href="https://github.com/joaomarcuslf/go-mentorship" title="View on GitHub">GitHub</a>
      </p>
      <a target="blank" href="https://github.com/joaomarcuslf/go-mentorship" title="View on GitHub">
        <h6 class="project-card-title">go-mentorship</h6>
      </a>
    </header>
  </div>
</article>

## Lista de aulas

- [Golang 00 - Primeiros passos](/mentorships/golang-qr-code-lesson-00-getting-started)
- [Golang 01 - Criando nosso App](/mentorships/golang-qr-code-lesson-01-creating-app)
- [Golang 02 - Refatorando nossos serviços](/mentorships/golang-qr-code-lesson-02-refactoring)
- [Golang 03 - Adicionando nosso servidor](/mentorships/golang-qr-code-lesson-03-web-server)
- [Golang 04 - Adicionando rota geradora](/mentorships/golang-qr-code-lesson-04-generate-qr)
- [Golang 05 - Adicionando nossa API](/mentorships/golang-qr-code-lesson-05-add-api)
- [Golang 06 - Consumindo API](/mentorships/golang-qr-code-lesson-06-consuming-api)
- [Golang 07 - Expandindo o Front-end](/mentorships/golang-qr-code-lesson-07-expanding-the-front-end)

