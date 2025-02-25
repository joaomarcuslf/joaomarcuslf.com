---
layout: mentorship
title: Golang 00 - Primeiros passo
subtitle: Como começar, como buscar.
img: https://raw.githubusercontent.com/devicons/devicon/master/icons/go/go-original.svg
alt: "go logo"
link: /mentorships/golang-qr-code-lesson-00-getting-started
internal: true
draft: false
lang: pt
tags:
  - Go
---

Essa sequência de aulas irá te ensinar o básico sobre como desenvolver com Golang. Para isso, nós vamos utilizar um repositório no github onde eu vou colocar todos os arquivos que serão utilizados para desenvolver o projeto, assim como as explicações.

Abra a aula Zero para entender como vai funcionar a navegação do arquivo:

<article
  class="project-card"
  data-gh-project="joaomarcuslf/go-mentorship"
>
  <figure class="project-card-image">
    <p class="image">
      <img
        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/go/go-original.svg"
        alt="go logo"
        width="128"
        height="128"
      />
    </p>
  </figure>
  <div class="project-card-content">
    <header class="project-card-header">
      <p class="project-card-subtitle">
        On
        <a
          target="blank"
          href="https://github.com/joaomarcuslf/go-mentorship/tree/lesson-00"
          title="View on GitHub"
          >GitHub</a
        >
        <small>#/tree/lesson-00</small>
      </p>
      <a
        target="blank"
        href="https://github.com/joaomarcuslf/go-mentorship/tree/lesson-00"
        title="View on GitHub"
      >
        <h6 class="project-card-title">go-mentorship</h6>
      </a>
  </header>
  </div>
</article>

## O que é o Golang?

Primeiramente, você já deve ter visto algumas pessoas falando Go, outras falando Golang, mas você sabe a diferença?

Go é uma linguagem de programação, que foi criada para ser usada em aplicações web, com foco em concorrência e simplicidade. Quando vamos pesquisar no Google essa linguagem, por conta de ser um termo muito genérico, é muito comum usarmos Golang ao invés de Go.

## O que você deve esperar desse tutorial?

Esse projeto tem a premissa de ser algo simples, porém explorando vários padrões da linguagem, e como aplicá-los em um projeto. Assim como utilizaremos algumas bibliotecas bem conhecidas da linguagem, e também tenho por objetivo atiçar sua vontade de aprender a linguagem mais para frente.

## O que é esperado de VOCÊ?

Bom, primeiro eu espero que você tenha interesse em acompanhar esse tutorial. Segundo eu parto do princípio que você sabe pelo menos o básico de programação, lógica de programação, e está familiarizado com alguns termos. Muitas vezes eu irei linkar outros posts, ou artigos para você se ambientar com os termos que utilizo, então é esperado que você tenha interesse em acompanhar outros tutoriais, para tirar proveito máximo da aula.

Esse guia também parte do princípio que você já fez o [download e instalou o Golang](https://go.dev/) em sua máquina, e que você fez o [tutorial da página do Go](https://go.dev/tour/welcome/1). Sendo assim, você deve estar minimamente ambientado com a sintaxe, e com os princípios da linguagem.

## Como começar?

No início de cada aula, no topo da página você vai ter acesso a como ficou o repositório depois da aula anterior, então você começar de qualquer aula, caso tenha interesse somente em um tópico. Também no início das aulas terá as expectativas da aula, com isso podemos ficar alinhado o que você deve esperar de cada aula.

Para começar, basta você criar uma pasta, eu sugiro você nomear essa pasta de <code class="language-plaintext highlighter-rouge">qr-generator</code>, em seguida inicie um novo pacote, não se esqueça de substituir o <code class="language-plaintext highlighter-rouge">joaomarcuslf</code> pelo seu username, e o <code class="language-plaintext highlighter-rouge">github.com</code> pelo repositório em Git que você estiver utilizando.

<pre class="is-hljs">
  <code class="bash">
  mkdir qr-generator
  go mod init github.com/joaomarcuslf/qr-generator
  </code>
</pre>

<blockquote>
  Se você não está utilizando, seria muito bom você começar a
  usar Git, é uma ferramenta que já se tornou padrão na área, e
  pode te ajudar muito no futuro.
</blockquote>

A título de curiosidade, muitos projetos em Go estão no Github, então você vai se beneficiar muito de aprender a navegar nele.

No mais, basta clicar em alguma aula que tenha interesse em começar, espero te ver logo.

## Link do projeto:

<article
  class="project-card"
  data-gh-project="joaomarcuslf/go-mentorship"
>
  <figure class="project-card-image">
    <p class="image">
      <img
        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/go/go-original.svg"
        alt="go logo"
        width="128"
        height="128"
      />
    </p>
  </figure>
  <div class="project-card-content">
    <header class="project-card-header">
      <p class="project-card-subtitle">
        On
        <a
          target="blank"
          href="https://github.com/joaomarcuslf/go-mentorship"
          title="View on GitHub"
          >GitHub</a
        >
      </p>
      <a
        target="blank"
        href="https://github.com/joaomarcuslf/go-mentorship"
        title="View on GitHub"
      >
        <h6 class="project-card-title">go-mentorship</h6>
      </a>
    </header>
  </div>
</article>

## Lista de aulas:

- [Golang 00 - Primeiros passos](/mentorships/golang-qr-code-lesson-00-getting-started)
- [Golang 01 - Criando nosso App](/mentorships/golang-qr-code-lesson-01-creating-app)
- [Golang 02 - Refatorando nossos serviços](/mentorships/golang-qr-code-lesson-02-refactoring)
- [Golang 03 - Adicionando nosso servidor](/mentorships/golang-qr-code-lesson-03-web-server)
- [Golang 04 - Adicionando rota geradora](/mentorships/golang-qr-code-lesson-04-generate-qr)
- [Golang 05 - Adicionando nossa API](/mentorships/golang-qr-code-lesson-05-add-api)
- [Golang 06 - Consumindo API](/mentorships/golang-qr-code-lesson-06-consuming-api)
- [Golang 07 - Expandindo o Front-end](/mentorships/golang-qr-code-lesson-07-expanding-the-front-end)
