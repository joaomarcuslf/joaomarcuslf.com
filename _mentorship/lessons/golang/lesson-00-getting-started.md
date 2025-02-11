---
layout: mentorship
title: Golang 00 - Primeiros passos
subtitle: Como começar, como buscar.
type: lesson
---

Essa sequência de aulas irá te ensinar o básico sobre como desenvolver com Golang. Para isso, nós vamos utilizar um repositório no github onde eu vou colocar todos os arquivos que serão utilizados para desenvolver o projeto, assim como as explicações.

Abra a aula Zero para entender como vai funcionar a navegação do arquivo:

<div>
  {%
    include components/project-card.html
      main="go"
      name="go-mentorship"
      user="joaomarcuslf"
      repo="go-mentorship"
      extra="/tree/lesson-00"
  %}
</div>

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

Para começar, basta você criar uma pasta, eu sugiro você nomear essa pasta de `qr-generator`, em seguida inicie um novo pacote, não se esqueça de substituir o `joaomarcuslf` pelo seu username, e o `github.com` pelo repositório em Git que você estiver utilizando.

```bash
mkdir qr-generator
go mod init github.com/joaomarcuslf/qr-generator
```

> Se você não está utilizando, seria muito bom você começar a usar Git, é uma ferramenta que já se tornou padrão na área, e pode te ajudar muito no futuro.

A título de curiosidade, muitos projetos em Go estão no Github, então você vai se beneficiar muito de aprender a navegar nele.

No mais, basta clicar em alguma aula que tenha interesse em começar, espero te ver logo.

{% include components/golang-mentorship-footer.md %}
