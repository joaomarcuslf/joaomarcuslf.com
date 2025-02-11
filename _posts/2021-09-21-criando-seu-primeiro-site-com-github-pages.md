---
layout: post
title: Criando seu primeiro site com github pages
subtitle: Criando sites de forma simples com Github pages
img: /images/posts/criando-seu-primeiro-site-com-github-pages.webp
alt: Image with Git and Github, this is a image showcase to the post.
link: /posts/2021-09-21-criando-seu-primeiro-site-com-github-pages
internal: true
draft: false
---

Uma das minhas experiências favoritas foi a de trabalhar no meu próprio site, como alguém particularmente crítico eu nunca consegui encontrar um template que me agradasse, então resolvi fazer um eu mesmo, seguindo exemplos que eu via na internet e desenhando no papel e tudo mais. Bom, nesse post nós não vamos entrar profundamente nesse processo, eu irei abrir as portas para onde sua imaginação possa te levar

## O que você precisa?

- Ter uma conta no <a href="https://github.com/">Github</a>
- Ter um editor de texto, de preferência o <a href="https://code.visualstudio.com/">VSCode</a>

## Dicas:

Para uma primeira versão, eu irei utilizar uma versão simplificada <a href="https://bulmatemplates.github.io/bulma-templates/templates/personal.html">deste template</a>, você pode usar qualquer outro template, pois na verdade nós só precisaremos de pouca coisa.

## Criando o repositório

### 1. Vá na sua página inicial do Github e procure por esse botão de "Criar repositório"

<img
  src="/images/posts/assets/2021-09-21-criando-seu-primeiro-site-com-github-pages-00.webp"
/>

### 2. Em seguida coloque o nome do repositório seguindo o seguinte padrão: <seu-nome-de-usuário>.github.io

<img
  src="/images/posts/assets/2021-09-21-criando-seu-primeiro-site-com-github-pages-01.webp"
/>

Também marque a opção de criar um arquivo README.

Quando você cria um repositório com esse nome você está criando um repositório especial no Github que irá ser seu site com Github Pages.

### 3. Agora com o repositório criado pegue a url dele

<img
  src="/images/posts/assets/2021-09-21-criando-seu-primeiro-site-com-github-pages-02.webp"
/>

Não se esqueça de clicar na aba SSH, caso esse aviso em amarelo apareça, você precisará criar uma chave, clique no link que o Github te indicará e siga o tutorial.

### 4. No VSCode digite <code>ctrl+shift+p</code> para abrir a palheta de comandos e digite <code>Git: Clone</code>

<img
  src="/images/posts/assets/2021-09-21-criando-seu-primeiro-site-com-github-pages-03.webp"
/>

Dê <code>enter</code> e cole a URL que você copiou no passo anterior.

<img
  src="/images/posts/assets/2021-09-21-criando-seu-primeiro-site-com-github-pages-04.webp"
/>

Quando o VSCode terminar de clonar seu repositório, abra-o em uma nova janela, e você deve ver algo desse gênero.

<img
  src="/images/posts/assets/2021-09-21-criando-seu-primeiro-site-com-github-pages-05.webp"
/>

## Preenchendo seu site

### 1. Crie um arquivo <code>index.html</code>, depois crie uma pasta chamada <code>assets</code> contendo esses outras pastas

<img
  src="/images/posts/assets/2021-09-21-criando-seu-primeiro-site-com-github-pages-06.webp"
/>

Essas pastas não são obrigatórias, porém são uma boa prática.

Caso você não tenha nada ainda nessas pastas, crie um arquivo chamado <code>.gitkeep</code> dentro de cada uma delas, isso indicará pro Git que você quer adicionar essas pastas mesmo vazias.

### 2. Coloque no seu <code>index.html</code> o conteúdo que você quiser, no meu caso será o template que eu escolhi

### 3. Adicione suas modificações no git (eu particularmente uso o próprio vscode para isso)

<img
  src="/images/posts/assets/2021-09-21-criando-seu-primeiro-site-com-github-pages-07.webp"
/>

### 4. Chame a palheta de comandos novamente com ctrl+shift+p e digite Git: Push

<img
  src="/images/posts/assets/2021-09-21-criando-seu-primeiro-site-com-github-pages-08.webp"
/>

Dê enter e todas suas modificações devem agora estar no Github

### 5. Pronto!

<img
  src="/images/posts/assets/2021-09-21-criando-seu-primeiro-site-com-github-pages-09.webp"
/>

Agora é só acessar no seu navegador a url que você nomeou o repositório, no meu caso: <a href="https://teste-joaomarcuslf.github.io/">https://teste-joaomarcuslf.github.io/</a>.

## Concluindo

É só isso, e seu site já está no ar, sempre que você fizer uma modificação, só dê push e o Github irá automaticamente atualizar esse url. Caso você precise de algo a mais, talvez valha a pena você pesquisar sobre <a href="https://jekyllrb.com/">Jekyll</a>, mas isso fica para um próximo post.

Vejo você no próximo!! Byeeee~

<div class="has-text-centered">
  <img
    width="390"
    src="/images/posts/assets/2021-09-21-criando-seu-primeiro-site-com-github-pages-10.gif"
  />
</div>
