---
layout: post
title: Ideias para você começar um Portfólio Dev
subtitle: Como preencher tanto seu currículo quanto seu portfólio com ideias legais de projetos
img: /images/posts/ideias-para-seu-portfolio.webp
alt: This is a zoomed image of a laptop with some code written.
link: /posts/2021-09-27-ideias-para-seu-portfolio
internal: true
draft: false
lang: pt
tags:
  - Beginner
  - Front-end
  - Career
  - Portuguese
---

É muito comum, quando você está no início de carreira, ficar perdido nesse nosso mundo de sopa de letrinhas, stacks e tecnologias. Como eu acho que uma das melhores formas de aprendizado é com a prática, resolvi selecionar algumas ideias de projetos tanto de Front-end quanto de Back-end. Vou tentar também dar algumas ideias de onde buscar o conhecimento necessário para cada projeto.

Por padrão, estou contando que você tenha algum conhecimento de Git. Quero falar um pouco mais no futuro sobre Git, mas neste post vou apenas sugerir ideias, e você pode subir essas ideias no seu GitHub.

### Dica inicial

É muito comum no meio dev você trabalhar em equipes, e com equipes existe o processo de code review. Se você tiver algum mentor, seria muito legal pedir para esse mentor fazer o seu code review. Caso não tenha, a bolha dev do Twitter é super engajada, e você, chegando com jeitinho, tenho certeza que encontrará pessoas dispostas a ajudar.

<aside class="menu is-light">
  <p class="menu-label">
    Vá direto para o conteúdo que você deseja
  </p>
  <ul class="menu-list">
    <li>
      <a href="#front-end">Front-end</a>
      <ul>
        <li><a href="#landing-page">Landing page</a></li>
        <li><a href="#componente-de-cadastro-para-newsletter">Componente de cadastro para newsletter</a></li>
        <li><a href="#buscador-do-github">Buscador do GitHub</a></li>
      </ul>
    </li>

    <li>
      <a href="#back-end">Back-end</a>
      <ul>
        <li><a href="#api-que-responda-por-navegador">API que responda por navegador</a></li>
        <li><a href="#api-restful-que-responda-json-e-xml">API Restful que responda JSON e XML</a></li>
        <li><a href="#api-de-autenticação">API de Autenticação</a></li>
      </ul>
    </li>

  </ul>
</aside>

### Front-end

No "front", nós normalmente precisamos lidar com a disposição dos elementos na tela e com como o usuário interage com esses elementos. É crucial que um frontender se preocupe com de onde o usuário estará acessando nosso site e garanta que ele tenha uma experiência agradável, independentemente de onde acesse.

A tríade do desenvolvimento front é o HTML, CSS e JavaScript. Por mais que tenhamos o SCSS para turbinar o CSS e ferramentas como TypeScript para fazer o mesmo com o JS, vamos tentar manter o básico aqui.

#### Landing page

<img
  src="/includes/2021-09-27-ideias-para-seu-portfolio-01.png"
  alt="Codecademy Landing Page"
/>

Você tem alguma marca ou produto que goste? Provavelmente sim. Então, que tal colocar em prática sua criatividade?

Faça uma landing page que contenha algumas animações simples, como piscar, aumentar ou diminuir conforme o mouse passe por cima, e também que seja responsiva.

Você pode se basear em páginas do próprio produto para isso. Esse tipo de conteúdo é muito bom, pois, caso você trabalhe em agência, é muito comum precisar fazer esse tipo de página. Então, você já pega a prática desses tipos de desafios.

Não se esqueça de incluir uma sessão para o catálogo e talvez depoimentos sobre o produto.

###### Tecnologias recomendadas:

<nav class="level is-mobile">
  <div class="level-left">
    <div class="tags">
      <a class="tag is-dark" href="https://getbootstrap.com/" target="blank">Bootstrap *</a>
      <a class="tag is-dark" href="https://jekyllrb.com/" target="blank">Jekyll</a>
      <a class="tag is-dark" href="https://sass-lang.com/" target="blank">SCSS</a>
      <a class="tag is-dark" href="https://vuejs.org/" target="blank">Vue **</a>
      <a class="tag is-dark" href="https://reactjs.org/" target="blank">React **</a>
    </div>
  </div>
</nav>

<blockquote class="is-family-monospace">
  <strong>Extra tip:</strong> <br />
  <small>*&nbsp;</small> Um desafio muito bom seria fazer o CSS na mão.<br />
  <small>**</small> Com Vue ou React, você poderá optar pelo <a href="https://nuxtjs.org/" target="blank">Nuxt</a> ou <a href="https://nextjs.org/" target="blank">Next</a> para gerar um site estático depois.
</blockquote>

#### Componente de cadastro para newsletter

<img
  src="/includes/2021-09-27-ideias-para-seu-portfolio-02.png"
  alt="Filipe Deschamps Newsletter"
/>

Agora, que tal você expor novas ideias que você viu, repositórios ou notícias da nossa área?

Há alguns anos, as newsletters voltaram a fazer sucesso, e é um ótimo lugar para você começar a testar validação de formulário e posicionamento enquanto pratica HTML, CSS e JavaScript.

No exemplo acima, é a newsletter do <a href="https://filipedeschamps.com.br/newsletter">Filipe Deschamps</a>. Você pode ver que ela é simples, sucinta, porém atrativa. Esse é um bom desafio para você fazer.

###### Tecnologias recomendadas:

<nav class="level is-mobile">
  <div class="level-left">
    <div class="tags">
      <a class="tag is-dark" href="#" target="blank">JavaScript</a>
      <a class="tag is-dark" href="#" target="blank">CSS3</a>
      <a class="tag is-dark" href="#" target="blank">HTML5</a>
    </div>
  </div>
</nav>

<blockquote class="is-family-monospace">
  <strong>Extra tip:</strong> <br />

Não se esqueça de validar o e-mail do usuário. Pode ser uma validação simples, como verificar se ele está no formato <span class="code">nome@dominio.sufixo</span>. Você pode tanto tentar fazer com JavaScript quanto usando regex. Teste os dois e veja qual a solução mais bonita.

</blockquote>

#### Buscador do GitHub

<img
  src="/includes/2021-09-27-ideias-para-seu-portfolio-03.png"
  alt="GitHub searcher"
/>

Você conhece o GitHub, certo? Sabia que ele te permite acessar a API dele? Você pode checar toda a documentação dela aqui: <span class="code"><a target="blank" href="https://docs.github.com/en/rest">https://docs.github.com/en/rest</a></span>.

Que tal, agora que conhece essa API, criar você mesmo um navegador do GitHub? Você pode adicionar um campo de busca que permita buscar por usuário e, quando você selecionar esse usuário, mostrar os repositórios, commits e estrelas.

Esse tipo de projeto é ótimo, pois você estará trabalhando consumindo uma API e mostrando os dados na tela. Como esse tipo de projeto é mais elaborado, sugiro que você use um framework.

###### Tecnologias recomendadas:

<nav class="level is-mobile">
  <div class="level-left">
    <div class="tags">
      <a class="tag is-dark" href="https://vuejs.org/" target="blank">Vue</a>
      <a class="tag is-dark" href="https://reactjs.org/" target="blank">React</a>
      <a class="tag is-dark" href="https://angular.io/" target="blank">Angular</a>
    </div>
  </div>
</nav>

<blockquote class="is-family-monospace">
  <strong>Extra tip:</strong> <br />

Que tal, além de criar o projeto, você tentar também criar testes para ele? Pesquise sobre TDD. É uma forma de você escrever testes antes do código, o que faz com que seu código tenha uma segurança de como ele deve rodar.

</blockquote>

### Back-end

No "back", é onde precisamos lidar com o armazenamento dos dados, validação de dados e outros pedaços do software que normalmente não são vistos pelo usuário. Pessoas backenders costumam se preocupar com onde o software vai rodar, quanto de memória é necessário, segurança do banco de dados e como acessar os dados sem fazer o usuário esperar muito.

Por conta do Back-end ser muito vasto em linguagens, irei indicar as que eu mais utilizo. Porém, isso é um viés meu. Então, caso você já mexa com alguma linguagem, continue com ela. Você vai conseguir executar todos os exemplos aqui em qualquer linguagem.

#### API que responda por navegador

<img
  class="image is-fullwidth"
  src="/includes/2021-09-27-ideias-para-seu-portfolio-04.png"
  alt="Header example"
/>

Também é muito comum você precisar receber algum dado vindo do header do usuário. É o tipo de coisa que a gente precisa aprender para poder saber a linguagem do usuário, qual navegador ele está usando, se está autenticado e até mesmo que tipo de valor ele está esperando receber.

Com isso em mente, você pode construir uma API que, dado o navegador da requisição, mostre algum dado diferente.

###### Tecnologias recomendadas:

<nav class="level is-mobile">
  <div class="level-left">
    <div class="tags">
      <a class="tag is-dark" href="https://rubyonrails.org/" target="blank">Rails</a>
      <a class="tag is-dark" href="https://expressjs.com/" target="blank">ExpressJS</a>
      <a class="tag is-dark" href="https://flask.palletsprojects.com/en/2.0.x/" target="blank">Flask</a>
      <a class="tag is-dark" href="https://golang.org/" target="blank">Go</a>
    </div>
  </div>
</nav>

#### API Restful que responda JSON e XML

<img
  src="/includes/2021-09-27-ideias-para-seu-portfolio-05.png"
  alt="Rest example"
/>

APIs RESTful são APIs que não guardam o estado do usuário (stateless) e que respeitam um <a href="https://wikipedia.org/wiki/REST">padrão de uso dos métodos HTTP</a>.

Elas são extremamente importantes para os softwares modernos. O desafio que eu deixo aqui é você construir uma API RESTful que tenha dois recursos: <span class="code">books</span> e <span class="code">authors</span>. Cada book possui o seu author, e um author pode ter múltiplos books. Você consegue fazer esse desafio em qualquer banco de dados, e é um desafio muito bom para você desenvolver na sua cabeça a ideia de modelagem de dados.

###### Tecnologias recomendadas:

<nav class="level is-mobile">
  <div class="level-left">
    <div class="tags">
      <a class="tag is-dark" href="https://rubyonrails.org/" target="blank">Rails</a>
      <a class="tag is-dark" href="https://expressjs.com/" target="blank">ExpressJS</a>
      <a class="tag is-dark" href="https://flask.palletsprojects.com/en/2.0.x/" target="blank">Flask</a>
      <a class="tag is-dark" href="https://golang.org/" target="blank">Go</a>
    </div>
  </div>
</nav>

<blockquote class="is-family-monospace">
  <strong>Extra tip:</strong> <br />

1. Talvez te ajude na modelagem dos dados desenhar como os models em um papel mesmo e pensar como eles se comunicam. <br />
2. Caso você não entenda muito de DB, você pode usar um ORM para facilitar lidar com os bancos.
</blockquote>

#### API de Autenticação

<img
  class="image is-fullwidth"
  src="/includes/2021-09-27-ideias-para-seu-portfolio-06.png"
  alt="JWT logo"
/>

Outra coisa muito comum para uma API é saber quando o usuário está autenticado ou não. Como estamos trabalhando apenas com APIs RESTful, nós não guardamos o estado do usuário. Mas uma forma de saber que o usuário está autenticado é usando <a href="https://jwt.io/">JSON Web Token (ou JWT para os íntimos)</a>. Esse é um recurso muito importante, pois ele passa para o usuário a responsabilidade de informar se está autenticado, como se fosse um crachá provisório, e a API sabe apenas validar se esse crachá está correto ou não.

Você pode usar os conhecimentos que teve nos tópicos anteriores e aplicar JWT para bloquear requisições de POST, UPDATE e DELETE, permitindo apenas caso o usuário possua um JWT válido.

###### Tecnologias recomendadas:

<nav class="level is-mobile">
  <div class="level-left">
    <div class="tags">
      <a class="tag is-dark" href="https://rubyonrails.org/" target="blank">Rails</a>
      <a class="tag is-dark" href="https://expressjs.com/" target="blank">ExpressJS</a>
      <a class="tag is-dark" href="https://flask.palletsprojects.com/en/2.0.x/" target="blank">Flask</a>
      <a class="tag is-dark" href="https://golang.org/" target="blank">Go</a>
    </div>
  </div>
</nav>

<blockquote class="is-family-monospace">
  <strong>Extra tip:</strong> <br />

1. Pesquise posts no Medium sobre: <span class="code">REST api JWT</span>. Vai te ajudar bastante. <br />
2. Talvez possa ser um bom desafio implementar um prazo de validade para as JWTs.
</blockquote>

### Concluindo

Espero que você tenha gostado das ideias. Nossa área possui muitos desafios diversos, porém, se você souber a base, seu progresso será muito menos doloroso.

Vejo você no próximo!! Byeeee~

<div class="has-text-centered">
  <img
    width="200"
    src="/includes/octo-dancing.gif"
    alt="Image from the post"
  />
</div>
