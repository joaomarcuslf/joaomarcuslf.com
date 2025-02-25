---
layout: mentorship
title: Golang 03 - Adicionando nosso servidor
subtitle: Criando templates e variáveis de templates.
img: https://raw.githubusercontent.com/devicons/devicon/master/icons/go/go-original.svg
alt: "go logo"
link: /mentorships/golang-qr-code-lesson-03-web-server
internal: true
draft: false
lang: pt
tags:
  - Go
---

Essa sequência de aulas irá te ensinar o básico sobre como desenvolver com Golang. Para isso, nós vamos utilizar um repositório no github onde eu vou colocar todos os arquivos que serão utilizados para desenvolver o projeto, assim como as explicações.

## Expectativas

Nessa aula vamos criar nosso servidor HTTP, aprender a renderizar HTML utilizando valores providos pelo nosso servidor e, como conteúdo adicional, veremos como atualizar o servidor automaticamente sempre que salvarmos o código.

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
        On <a target="blank" href="https://github.com/joaomarcuslf/go-mentorship/tree/lesson-03" title="View on GitHub">GitHub</a>
        <small>#/tree/lesson-03</small>
      </p>
      <a target="blank" href="https://github.com/joaomarcuslf/go-mentorship/tree/lesson-03" title="View on GitHub">
        <h6 class="project-card-title">go-mentorship</h6>
      </a>
    </header>
  </div>
</article>

## Criando o servidor

Vamos criar nosso servidor utilizando a biblioteca padrão `net/http` do Go. Primeiro, crie uma pasta chamada `server` e um arquivo chamado `http.go`.

```bash
mkdir server
cd server
touch http.go
```

Agora, abra o `http.go` e adicione o seguinte código:

```go
package server

import (
  "fmt"
  "net/http"
)

type Server struct {
  Port string
}

func NewServer(port string) *Server {
  return &Server{Port: port}
}

func (s *Server) Run() {
  http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
    fmt.Fprintln(w, "Servidor rodando!")
  })
  fmt.Println("Servidor rodando na porta:", s.Port)
  http.ListenAndServe(":"+s.Port, nil)
}
```

Agora, altere o `main.go` para rodar o servidor:

```go
package main

import "github.com/joaomarcuslf/qr-generator/server"

func main() {
  srv := server.NewServer("8000")
  srv.Run()
}
```

Execute o código:

```bash
go run main.go
```

Agora acesse `http://localhost:8000/` no navegador.

## Criando templates

Vamos agora adicionar suporte a templates HTML. Crie um diretório `templates` e um arquivo `index.html`:

```bash
mkdir templates
touch templates/index.html
```

No `index.html`, adicione o seguinte:

```html
<html>
<head>
  <title>{{.Title}}</title>
</head>
<body>
  <h1>{{.Message}}</h1>
</body>
</html>
```

Agora, modifique o `http.go` para utilizar esse template:

```go
package server

import (
  "html/template"
  "net/http"
)

type Page struct {
  Title   string
  Message string
}

func (s *Server) Run() {
  http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
    tmpl, _ := template.ParseFiles("templates/index.html")
    page := Page{Title: "Meu Servidor Go", Message: "Servidor rodando!"}
    tmpl.Execute(w, page)
  })
  http.ListenAndServe(":"+s.Port, nil)
}
```

Agora, reinicie seu servidor e recarregue a página para ver o HTML sendo renderizado pelo Go.

## Atualizando automaticamente o servidor

Podemos usar a ferramenta [air](https://github.com/cosmtrek/air) para reiniciar o servidor sempre que houver mudanças.

Instale o `air`:

```bash
go install github.com/cosmtrek/air@latest
```

Crie um arquivo de configuração para o `air`:

```bash
air init
```

Agora, basta rodar:

```bash
air
```

Isso irá monitorar os arquivos e reiniciar o servidor automaticamente.

## Conclusão

Agora temos um servidor HTTP funcional com suporte a templates. Na próxima aula, vamos adicionar rotas dinâmicas para gerar QR Codes diretamente via HTTP.

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
