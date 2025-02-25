---
layout: mentorship
title: Golang 04 - Adicionando rota geradora
subtitle: Gerando QR code via web.
img: https://raw.githubusercontent.com/devicons/devicon/master/icons/go/go-original.svg
alt: "go logo"
link: /mentorships/golang-qr-code-lesson-04-generate-qr
internal: true
draft: false
lang: pt
tags:
  - Go
---

Essa sequência de aulas irá te ensinar o básico sobre como desenvolver com Golang. Para isso, nós vamos utilizar um repositório no GitHub onde eu vou colocar todos os arquivos que serão utilizados para desenvolver o projeto, assim como as explicações.

## Expectativas

Nessa aula, vamos aprender a receber um valor enviado pelo formulário do HTML e como retornar nosso PNG usando a interface de resposta HTTP.

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
        On <a target="blank" href="https://github.com/joaomarcuslf/go-mentorship/tree/lesson-04" title="View on GitHub">GitHub</a>
        <small>#/tree/lesson-04</small>
      </p>
      <a target="blank" href="https://github.com/joaomarcuslf/go-mentorship/tree/lesson-04" title="View on GitHub">
        <h6 class="project-card-title">go-mentorship</h6>
      </a>
    </header>
  </div>
</article>

## Adicionando o gerador

Vamos começar adicionando nossa rota responsável por gerar os QR codes. Crie um novo arquivo dentro de `handlers/web`:

```bash
touch handlers/web/generator.go
```

Abra o `web/generator.go` e adicione o seguinte código:

```go
package handlers

import (
  "net/http"
  generator "github.com/joaomarcuslf/qr-generator/services/generators"
)

func GenerateQr(w http.ResponseWriter, r *http.Request) {
  qr := generator.NewQRCode()
  err := qr.SetBarcode(r.FormValue("dataString")).ToPNG(w)

  if err != nil {
    w.WriteHeader(http.StatusBadRequest)
    w.Write([]byte("Erro ao gerar QR Code: " + err.Error()))
  }
}
```

Agora, vá para `server/http.go` e adicione nossa nova rota:

```go
http.HandleFunc("/generator", web.GenerateQr)
```

Agora, ao submeter um valor no formulário, o QR Code será gerado e retornado via HTTP.

## Tratando erros

Para melhorar a experiência do usuário, devemos tratar erros corretamente. Atualize `GenerateQr` para exibir mensagens amigáveis em HTML:

```go
func GenerateQr(w http.ResponseWriter, r *http.Request) {
  qr := generator.NewQRCode()
  err := qr.SetBarcode(r.FormValue("dataString")).ToPNG(w)

  if err != nil {
    http.Error(w, "Erro ao gerar QR Code: "+err.Error(), http.StatusBadRequest)
    return
  }
}
```

Agora, o usuário verá uma resposta HTTP adequada caso ocorra um erro.

## Conclusão

Agora temos uma rota funcional para gerar QR Codes via HTTP. No próximo passo, vamos adicionar a biblioteca [gin-gonic](https://github.com/gin-gonic/gin) para transformar essa aplicação em uma API.

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
