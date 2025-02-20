---
layout: post
title: Criando seu primeiro site com GitHub Pages
subtitle: Criando sites de forma simples com GitHub Pages
img: /images/posts/criando-seu-primeiro-site-com-github-pages.webp
alt: This image contains a closed notebook, a bottle of water, and a laptop in a table.
link: /posts/2021-09-21-criando-seu-primeiro-site-com-github-pages
internal: true
draft: false
lang: pt
tags:
  - Beginner
  - Front-end
  - Career
  - Portuguese
---

> Esse post ele foi parte de uma mentoria de Front-end focado em pessoas que ainda não estava na área. O conteúdo apesar de básico tem um foco em pessoas que estão começando a aprender sobre desenvolvimento web.

Uma das minhas experiências favoritas foi trabalhar no meu próprio site. Como alguém particularmente crítico, nunca consegui encontrar um template que me agradasse, então resolvi fazer um eu mesmo, seguindo exemplos que via na internet e desenhando no papel. Bom, neste post, não vamos entrar profundamente nesse processo, mas vou abrir as portas para onde sua imaginação possa te levar.

## O que você precisa?

- Ter uma conta no <a href="https://github.com/">GitHub</a>
- Ter um editor de texto, de preferência o <a href="https://code.visualstudio.com/">VSCode</a>

## Dicas:

Para uma primeira versão, vou utilizar uma versão simplificada <a href="https://bulmatemplates.github.io/bulma-templates/templates/personal.html">deste template</a>. Você pode usar qualquer outro template, pois, na verdade, nós só precisaremos de pouca coisa.

## Criando o repositório

### 1. Vá na sua página inicial do GitHub e procure por esse botão de "Criar repositório"

<img
  src="/includes/2021-09-21-criando-seu-primeiro-site-com-github-pages-00.png"
  alt="Image from the post"
/>

### 2. Em seguida, coloque o nome do repositório seguindo o seguinte padrão: <code>seu-nome-de-usuário</code>.github.io

<img
  src="/includes/2021-09-21-criando-seu-primeiro-site-com-github-pages-01.png"
  alt="Image from the post"
/>

Também marque a opção de criar um arquivo README.

Quando você cria um repositório com esse nome, está criando um repositório especial no GitHub que será seu site com GitHub Pages.

### 3. Agora, com o repositório criado, pegue a URL dele

<img
  src="/includes/2021-09-21-criando-seu-primeiro-site-com-github-pages-02.png"
  alt="Image from the post"
/>

Não se esqueça de clicar na aba SSH. Caso esse aviso em amarelo apareça, você precisará criar uma chave. Clique no link que o GitHub te indicará e siga o tutorial.

### 4. No VSCode, digite <code>ctrl+shift+p</code> para abrir a palheta de comandos e digite <code>Git: Clone</code>

<img
  src="/includes/2021-09-21-criando-seu-primeiro-site-com-github-pages-03.png"
  alt="Image from the post"
/>

Dê <code>enter</code> e cole a URL que você copiou no passo anterior.

<img
  src="/includes/2021-09-21-criando-seu-primeiro-site-com-github-pages-04.png"
  alt="Image from the post"
/>

Quando o VSCode terminar de clonar seu repositório, abra-o em uma nova janela, e você deve ver algo desse gênero.

<img
  src="/includes/2021-09-21-criando-seu-primeiro-site-com-github-pages-05.png"
  alt="Image from the post"
/>

## Preenchendo seu site

### 1. Crie um arquivo <code>index.html</code>, depois crie uma pasta chamada <code>assets</code> contendo essas outras pastas

<img
  src="/includes/2021-09-21-criando-seu-primeiro-site-com-github-pages-06.png"
  alt="Image from the post"
/>

Essas pastas não são obrigatórias, porém são uma boa prática.

Caso você não tenha nada ainda nessas pastas, crie um arquivo chamado <code>.gitkeep</code> dentro de cada uma delas. Isso indicará para o Git que você quer adicionar essas pastas mesmo vazias.

### 2. Coloque no seu <code>index.html</code> o conteúdo que você quiser. No meu caso, será o template que eu escolhi.

### 3. Adicione suas modificações no Git (eu particularmente uso o próprio VSCode para isso)

<img
  src="/includes/2021-09-21-criando-seu-primeiro-site-com-github-pages-07.png"
  alt="Image from the post"
/>

### 4. Chame a palheta de comandos novamente com <code>ctrl+shift+p</code> e digite <code>Git: Push</code>

<img
  src="/includes/2021-09-21-criando-seu-primeiro-site-com-github-pages-08.png"
  alt="Image from the post"
/>

Dê <code>enter</code>, e todas as suas modificações devem agora estar no GitHub.

### 5. Pronto!

<img
  src="/includes/2021-09-21-criando-seu-primeiro-site-com-github-pages-09.png"
  alt="Image from the post"
/>

Agora é só acessar no seu navegador a URL que você nomeou o repositório. No meu caso: <a href="https://teste-joaomarcuslf.github.io/">https://teste-joaomarcuslf.github.io/</a>.

## Concluindo

É só isso, e seu site já está no ar. Sempre que você fizer uma modificação, só dê push, e o GitHub irá automaticamente atualizar essa URL. Caso você precise de algo a mais, talvez valha a pena pesquisar sobre <a href="https://jekyllrb.com/">Jekyll</a>, mas isso fica para um próximo post.

Vejo você no próximo!! Byeeee~

<div class="has-text-centered">
  <img
    width="200"
    src="/includes/octo-dancing.gif"
    alt="Image from the post"
  />
</div>
