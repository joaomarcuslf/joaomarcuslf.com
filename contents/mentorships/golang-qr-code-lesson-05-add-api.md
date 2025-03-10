---
layout: mentorship
title: Golang 05 - Adicionando nossa API
subtitle: Adicionando DB, e nossa API.
img: https://raw.githubusercontent.com/devicons/devicon/master/icons/go/go-original.svg
alt: "go logo"
link: /mentorships/golang-qr-code-lesson-05-add-api
internal: true
draft: false
lang: pt
tags:
  - Go
---

## Adicionando Gin

A lib Gin é uma lib muito produtiva para escrever aplicações Web, e como ela tem uma escrita muito próxima ao Express do Node, me agrada muito, então será ela que iremos utilizar.

Primeiro rode:

```bash
go get github.com/gin-gonic/gin
```

Isso deve atualizar ambos seus `go.mod` e `go.sum` para incluir a lib `gin`. Em seguida vamos fazer as adaptações necessárias para nossa aplicação.

Vamos para o `render/page.go`, nesse arquivo nós vamos mudar principalmente a função Write, pois agora ao invés de usarmos o `ResponseWriter`, vamos usar o render do `Gin`, e também vamos remover o prefixo `templates/` do nosso `AsHome`, também porque o `Gin` já lida com isso.

```go
package render

import (
  "net/http"

  "github.com/gin-gonic/gin"
)

/* ... */

func (page *Page) AsHome() *Page {
  return page.SetMeta(
    "QR Code Generator",
    "A page to generate QR",
    "index.html",
    http.StatusOK,
  )
}

/* ... */

func (page *Page) Write(c *gin.Context) *Page {
  c.HTML(
    page.Status,
    page.Template,
    gin.H{
      "Title":       page.Title,
      "Description": page.Description,
      "Error":       page.Error,
    },
  )

  return page
}
```

No `handlers/html.go`, nós vamos basicamente trocar o `w http.ResponseWriter, r *http.Request` pelo `c *gin.Context`, e perceba que mudamos um pouco a forma que pegamos o dado do form, e a forma que escrevemos enviamos o Writer:

```go
package handlers

import (
  "net/http"

  "github.com/gin-gonic/gin"
  render "github.com/joaomarcuslf/qr-generator/render"
  generator "github.com/joaomarcuslf/qr-generator/services/generators"
)

func Home(c *gin.Context) {
  render.NewPage().AsHome().Write(c)
}

func GenerateQr(c *gin.Context) {
  qr := generator.NewQRCode()

  err := qr.SetBarcode(c.PostForm("dataString")).ToPNG(c.Writer)

  if err != nil {
    render.NewPage().AsHome().SetError(err, http.StatusBadRequest).Write(c)
  }
}
```

Já no `server/http.go`, é onde teremos uma mudança maior, mas vamos por partes:

```go
package server

import (
  "github.com/gin-gonic/gin"
  web "github.com/joaomarcuslf/qr-generator/handlers/web"
)

/* ... */

func (a *Server) Run() {
  router := gin.Default()

  router.LoadHTMLGlob("templates/*")
  router.Static("/static", "./static")

  router.GET("/", web.Home)
  router.POST("/generator", web.GenerateQr)

  router.Run(":" + s.Port)
}
```

Nós tiramos o IO, já que não é mais necessário.

- `router.LoadHTMLGlob("templates/*")`: Aqui nós estamos declarando qual nossa pasta de templates.
- `router.Static("/static", "./static")`: Aqui nós estamos declarando qual nossa pasta de arquivos estáticos.
- `router.GET("/", web.Home)`: Aqui nós estamos declarando o endpoint `/`, que é o endpoint que vai ser chamado quando o usuário acessar a página inicial.
- `router.POST("/generator", web.GenerateQr)`: Aqui nós estamos declarando o endpoint `/generator`, que é o endpoint que vai ser chamado quando o usuário acessar a página de geração de QR.

> E perceba que agora nós diferenciamos quando é um GET de um POST.

Com isso nós refatoramos nosso servidor para algo mais próximo de um servidor do mundo real.

A partir daqui, nós iremos criar um Banco de Dados dummy, para escrevermos uma API, então se torna 100% opicional seguir.

## Dummy DB

Nós vamos implementar um Dummy DB em JSON, e vamos utilizar a [Design Pattern Singleton](https://refactoring.guru/pt-br/design-patterns/singleton), assim ao invés de abrirmos várias instâncias para ler o arquivo JSON, nós vamos reaproveitar a instância anterior.

```bash
mkdir services/readers
touch services/readers/json.go
```

Vamos preencher nosso `services/readers/json.go` com os seguintes métodos:

```go
package services

import (
  "encoding/json"
  "io/ioutil"
  "os"
)

func Read(path string) ([]byte, error) {
  jsonFile, err := os.Open(path)
  if err != nil {
    return nil, err
  }
  defer jsonFile.Close()

  byteValue, err := ioutil.ReadAll(jsonFile)

  return byteValue, err
}

func Save(path string, data interface{}) {
  file, err := json.MarshalIndent(data, "", " ")

  if err != nil {
    panic(err)
  }
  err = ioutil.WriteFile(path, file, 0644)

  if err != nil {
    panic(err)
  }
}
```

Agora vamos ver como vamos utilizar esses métodos no nosso Dummy DB, rode os seguintes comandos no seu terminal:

```bash
mkdir database
touch database/db.go

touch ./db.json
echo '{"Sites": []}' >> ./db.json
```

Vamos preencher nosso `database/db.go` como se fosse um banco de dados local:

```go
package database

import (
  "encoding/json"
  "fmt"
  "math/rand"

  json_reader "github.com/joaomarcuslf/qr-generator/services/readers"
)

type Site struct {
  URL string
  Id  string
}

type DB struct {
  Sites []Site
}

var instance *DB
var file string = "./db.json"

func NewDB() *DB {
  if instance == nil {
    byteValue, err := json_reader.Read(file)

    if err != nil {
      panic(err)
    }

    var db DB

    json.Unmarshal(byteValue, &db)

    instance = &db
  }

  return instance
}

func Close() {
  fmt.Println("closing database")
  if instance != nil {
    fmt.Println("Creating database file")
    json_reader.Save(file, instance)
  }
}

func (db *DB) Save() {
  if instance != nil {
    json_reader.Save(file, instance)
  }
}

func (db *DB) Add(url string) {
  min := 10
  max := 9999

  id := fmt.Sprintf("%d", rand.Intn(max-min)+min)

  db.Sites = append(db.Sites, Site{
    URL: url,
    Id:  id,
  })

  db.Save()
}

func (db *DB) Get(id string) (Site, error) {
  for _, site := range db.Sites {
    if site.Id == id {
      return site, nil
    }
  }

  return Site{}, fmt.Errorf("no site found, with id: %s", id)
}

func (db *DB) GetAll() []Site {
  return db.Sites
}

func (db *DB) Update(id, url string) {
  for i, site := range db.Sites {
    if site.Id == id {
      db.Sites[i].URL = url
    }
  }

  db.Save()
}

func (db *DB) Remove(id string) {
  for i, site := range db.Sites {
    if site.Id == id {
      db.Sites = append(db.Sites[:i], db.Sites[i+1:]...)
      return
    }
  }

  db.Save()
}
```


Espero que compreenda, o objetivo desses posts não é aprofundar em certas implementações, por isso não irei abordar como funciona DB locais, DB gerais, e etc. Caso surja curiosidade tente analisar o código acima, e em caso de dúvidas você pode <a href="#" onclick="mailMe('{{site.email}}')">entrar em contato comigo</a>.

Agora abra `server/http.go`:

```go
package server

import (
  "github.com/gin-gonic/gin"
  database "github.com/joaomarcuslf/qr-generator/database"
  web "github.com/joaomarcuslf/qr-generator/handlers/web"
)

/* ... */

func (a *Server) Run() {
  database.NewDB()
  defer database.Close()

  /* ... */
}
```

Agora que temos nosso DB rodando, vamos abrir o `handlers/web/html.go` e vamos salvar executar um `.Add` para salvar o site que foi enviado.

```go
package handlers

import (
  "net/http"

  "github.com/gin-gonic/gin"
  database "github.com/joaomarcuslf/qr-generator/database"
  render "github.com/joaomarcuslf/qr-generator/render"
  generator "github.com/joaomarcuslf/qr-generator/services/generators"
)

var db *database.DB = database.NewDB()

func Home(c *gin.Context) {
  render.NewPage().AsHome().Write(c)
}

func GenerateQr(c *gin.Context) {
  qr := generator.NewQRCode()

  input := c.PostForm("dataString")

  db.Add(input)

  err := qr.SetBarcode(input).ToPNG(c.Writer)

  if err != nil {
    render.NewPage().AsHome().SetError(err, http.StatusBadRequest).Write(c)
  }
}
```

Se você abrir sua aplicação agora, e gerar um QR code, você vai ver que o `db.json` foi atualizado com novos valores. Com isso vamos criar uma mini-api que possa retornar todos os Sites, e permita edição e deletar.

## Preenchendo nossa API

Vamos escrever uma API:

```bash
mkdir handlers/api
touch handlers/api/sites.go
```

Abra o `handlers/api/sites.go` e vamos preencher com nossos métodos CRUD:

```go
package handlers

import (
  "github.com/gin-gonic/gin"
  database "github.com/joaomarcuslf/qr-generator/database"
)

type SiteController struct {
  db *database.DB
}

func NewSiteController() *SiteController {
  return &SiteController{
    db: database.NewDB(),
  }
}
```

Primeiro método seria o `GET /sites`, que é o método de retornar todos.

```go
func (sc *SiteController) List(c *gin.Context) {
  c.JSON(200, gin.H{
    "sites": sc.db.GetAll(),
  })
}
```

Segundo método seria o `POST /sites`, que é o método de criar um novo site.

```go
func (sc *SiteController) Create(c *gin.Context) {
  site := &database.Site{}
  c.BindJSON(site)

  sc.db.Add(site.URL)

  c.JSON(204, gin.H{})
}
```

Terceiro método seria o `GET /sites/:id`, que é o método de retornar um site específico.

```go
func (sc *SiteController) Show(c *gin.Context) {
  id := c.Param("id")

  site, err := sc.db.Get(id)

  if err != nil {
    c.JSON(404, gin.H{
      "error": err.Error(),
    })
    return
  }

  c.JSON(200, gin.H{
    "site": site,
  })
}
```

Quarto método seria o `PUT /sites/:id`, que é o método de atualizar um site específico.

```go
func (sc *SiteController) Update(c *gin.Context) {
  id := c.Param("id")

  var site database.Site

  c.BindJSON(&site)

  sc.db.Update(id, site.URL)

  c.JSON(204, gin.H{})
}
```

Quinto método seria o `DELETE /sites/:id`, que é o método de deletar um site específico.

```go
func (sc *SiteController) Delete(c *gin.Context) {
  id := c.Param("id")

  sc.db.Remove(id)

  c.JSON(200, gin.H{
    "message": "Site deleted",
  })
}
```

Você que já conhece CRUD talvez estranhe a nomenclatura dos métodos que estou utilizando, eu estou me baseando na nomenclatura utilizada pelo Ruby on Rails na hora de definir os nomes do métodos, ela não é obrigatória, nem necessária, é mais uma questão de preferência. E vamos atualizar nosso `server/http.go` para chamar nosso `SiteController`:

```go
func (a *Server) Run() {
  /* ... */

  sc := api.NewSiteController()

  router.GET("/api/sites", sc.List)
  router.POST("/api/sites", sc.Create)
  router.GET("/api/sites/:id", sc.Show)
  router.PUT("/api/sites/:id", sc.Update)
  router.DELETE("/api/sites/:id", sc.Delete)

  router.Run(":" + a.Port)
}
```

> Caso você não esteja entendendo esses nomes, isso é um padrão REST de APIs, você pode ver um pouco mais sobre [aqui](https://en.wikipedia.org/wiki/Representational_state_transfer)

Com isso você tem ambos um WEB App, e uma API, na próxima aula nós vamos introduzir o React para consumir a API. Espero você na próxima aula.

## Adicionais

- [Verbos HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)
- [CRUD](https://developer.mozilla.org/en-US/docs/Glossary/CRUD)

## Lista de aulas

- [Golang 00 - Primeiros passos](/mentorships/golang-qr-code-lesson-00-getting-started)
- [Golang 01 - Criando nosso App](/mentorships/golang-qr-code-lesson-01-creating-app)
- [Golang 02 - Refatorando nossos serviços](/mentorships/golang-qr-code-lesson-02-refactoring)
- [Golang 03 - Adicionando nosso servidor](/mentorships/golang-qr-code-lesson-03-web-server)
- [Golang 04 - Adicionando rota geradora](/mentorships/golang-qr-code-lesson-04-generate-qr)
- [Golang 05 - Adicionando nossa API](/mentorships/golang-qr-code-lesson-05-add-api)
- [Golang 06 - Consumindo API](/mentorships/golang-qr-code-lesson-06-consuming-api)
- [Golang 07 - Expandindo o Front-end](/mentorships/golang-qr-code-lesson-07-expanding-the-front-end)
