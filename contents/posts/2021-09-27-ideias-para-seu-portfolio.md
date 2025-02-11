---
layout: post
title: Ideias para você começar um Portfolio Dev
subtitle: Como preencher tanto seu currículo quanto seu portfolio com ideias legais de projeto
img: /images/posts/ideias-para-seu-portfolio.webp
alt: Image with a Laptop and a Notebook
link: /posts/2021-09-27-ideias-para-seu-portfolio
internal: true
draft: false
lang: pt
tags:
  - Beginner
  - Internal
  - Front-end
  - Back-end
  - Full-stack
  - Career
  - Portuguese
---

É muito comum quando vocês está no início de carreira ficar perdido nesse nosso mundo de sopa de letrinhas, stacks, e tecnologias. Como eu acho que uma das melhores formas de aprendizado é com a prática, resolvi selecionar algumas ideias de projetos tanto de Front-end, quanto Back-end, vou tentar também dar algumas ideias de onde buscar o conhecimento necessário para cada projeto.

Por padrão, estou contando que você tenha algum conhecimento de Git, quero falar um pouco mais no futuro sobre Git, mas nesse post vou só subir ideias, e você pode subir essas ideias no seu Github.

### Dica inicial

É muito comum no meio dev você trabalhar em equipes, e com equipes existe o processo de code review, se você tiver algum mentor, seria muito legal você pedir para esse mentor fazer o seu code review. Caso não tenha, a bolha dev do Twitter é super engajada e você chegando com jeitinho tenho certeza que encontrará pessoas dispostas a ajudar.

<aside class="menu is-light">
  <p class="menu-label">
    Vá direto para o conteúdo que você deseje
  </p>
  <ul class="menu-list">
    <li>
      <a href="#front-end">Front-end</a>
      <ul>
        <li><a href="#landing-page">Landing page</a></li>
        <li><a href="#componente-de-cadastro-para-newsletter">Componente de cadastro para newsletter</a></li>
        <li><a href="#buscador-do-github">Buscador do Github</a></li>
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

No "front", nós normalmente precisamos lidar com a disposição dos elementos na tela, e com como o usuário interage com esses elemento. É crucial um frontender se preocupar de onde o usuário estará acessando nosso site, e se preocupar com garantir que ele tenha uma experiência agradável independente de onde ele acesse.

A tríade do desenvolvimento front é o HTML, CSS, e JavaScript. Por mais que tenhamos o SCSS para turbinar o CSS, e ferramentas como TypeScript para fazer o mesmo com o JS, nós vamos tentar manter o básico aqui.

#### Landing page

<img
  src="/includes/2021-09-27-ideias-para-seu-portfolio-01.png"
  alt="Codecademy Landing Page"
/>

Você tem alguma marca, ou produto que goste? Provavelmente sim. Então que tal colocar em prática sua criatividade.

Faça uma landing page que contenha algumas animações simples, como piscar, aumentar ou diminuir conforme o mouse passe por cima, e também que seja responsiva.

Você pode se basear em páginas do próprio produto para isso. Esse tipo de conteúdo é muito bom pois caso você trabalhe em agência é muito comum precisar fazer esse tipo de página. Então você já pega a prática desses tipos de desafios.

Não se esqueça de incluir uma sessão para o catálogo, e talvez depoimentos sobre o produto.

###### Tecnologias recomentadas:

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
  <small>**</small> Com Vue, ou React você poderá optar pelo <a href="https://nuxtjs.org/" target="blank">Nuxt</a> ou <a href="https://nextjs.org/" target="blank">Next</a> para gerar um site estático depois
</blockquote>

#### Componente de cadastro para newsletter

<img
  src="/includes/2021-09-27-ideias-para-seu-portfolio-02.png"
  alt="Filipedeschamps Newsletter"
/>

Agora que tal você expor novas ideias que você viu, repositórios ou notícias da nossa área?

Tem alguns anos que as Newsletter voltaram a fazer sucesso, e é um ótimo lugar para você começar a testar validação de formulário, e posicionamento enquanto pratica HTML, CSS e JavaScript.

No exemplo acima é a Newsletter do <a href="https://filipedeschamps.com.br/newsletter">Filipe Deschamps</a>, você pode ver que ela é simples, sucinta, porém atrativa. Esse é um bom desafio para você fazer.

###### Tecnologias recomentadas:

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

Não se esqueça de validar o e-mail do usuário, pode ser uma validação simples como se ele está no formato <span class="code">nome@dominio.sufixo</span>, você pode tanto tentar fazer com javascript quanto usando regex, teste os dois, veja qual a solução mais bonita.

</blockquote>

#### Buscador do Github

<img
  src="/includes/2021-09-27-ideias-para-seu-portfolio-03.png"
  alt="Github searcher"
/>

Você conhece o Github, certo? Você sabia que ele te permite acessar a API dele? Você pode checar toda a documentação dela aqui: <span class="code"><a target="blank" href="https://docs.github.com/en/rest">https://docs.github.com/en/rest</a></span>.

Que tal você agora que conhece essa API, criar você mesmo um navegador de Github? Você pode adicionar um campo de busca que permita você buscar por usuário, e quando você selecionar esse usuário você mostre os repositórios, mostrando os commits, as estrelas.

Esse tipo de projeto é ótimo pois você estará trabalhando consumindo uma API, e mostrando na tela, como esse tipo de projeto é mais elaborado, eu sugiro que você use um framework.

###### Tecnologias recomentadas:

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

Que tal além de criar o projeto você tentar também criar testes para o projeto? Pesquise sobre TDD, é uma forma de você escrever testes antes do código, o que faz com que seu código tenha uma segurança de como ele deve rodar.

</blockquote>

### Back-end

No "back", é onde nós precisamos lidar com armazenamento dos dados, validação de dados, e outros pedaços do software que normalment não é visto pelo usuário. Pessoas backenders costumam se preocupar com onde o software vai estar rodando, quanto de memória é necessário, segurança do banco de dados e como acessar os dados sem fazer o usuário esperar muito.

Por conta do Back-end ser muito vasto em linguagens, eu irei indicar as que eu mais utilizo, porém isso é um viés meu, então caso você já mexa com alguma linguagem, continue com ela, você vai conseguir executar todos os exemplos aqui em qualquer linguagem.

#### API que responda por navegador

<img
  class="image is-fullwidth"
  src="/includes/2021-09-27-ideias-para-seu-portfolio-04.png"
  alt="Header example"
/>

Também é muito comum você precisar receber algum dado vindo do header do usuário, é o tipo de coisa que a gente precisa aprender para poder saber a linguagem do usuário, qual navegador, se ele tá autenticado, e até mesmo que tipo de valor ele está esperando receber.

Com isso em mente, você pode construir uma API que dado o navegador da requisição você mostre algum dado diferente.

###### Tecnologias recomentadas:

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

APIs RESTful, são APIs que não guardam o estado do usuário(stateless), e que respeitem um <a href="https://wikipedia.org/wiki/REST">padrão de uso dos métodos HTTP</a>.

E elas são extremamente importantes para os softwares modernos, o desafio que eu deixo aqui, é você contruir uma API RESTful, que tenha dois recursos <span class="code">books</span>, e <span class="code">authors</span>. Cada book, possui o seu author, e um author pode ter múltiplos books. Você consegue fazer esse desafio em qualquer banco de dados, e é um desafio muito bom para você desenvolver na sua cabeça a ideia de modelagem de dados.

###### Tecnologias recomentadas:

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

1. Talvez te ajude na modelagem dos dados, você desenhar como os models em um papel mesmo, e pensar como eles se comunicam. <br />
2. Caso você não entenda muito de DB, você pode usar um ORM para facilitar lidar com os bancos.
</blockquote>

#### API de Autenticação

<img
  class="image is-fullwidth"
  src="/includes/2021-09-27-ideias-para-seu-portfolio-06.png"
  alt="JWT logo"
/>

Outra coisa muito comum para uma API é saber quando o usuário está autenticado ou não. Como estamos trabalhando apenas com APIs RESTful, nós não guardamos estado do usuário, mas uma forma de saber que o usuário está autenticado ou não, é usando <a href="https://jwt.io/">JSON Web Token(ou JWT para os intimos)</a>. Esse é um recurso muito importante, pois ele passa para o usuário a responsabilidade de informar se está autenticado, como se fosse um crachá provisório, e a API sabe apenas validar se esse crachá está correto ou não.

Você pode usar os conhecimentos que teve nos tópicos anteriores e aplicar JWT para bloquear requisições de POST, UPDATE, e DELETE, permitindo apenas caso o usuário possua um JWT válido.

###### Tecnologias recomentadas:

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

1. Pesquise posts no Medium sobre: <span class="code">REST api JWT</span>, vai te ajudar bastante. <br />
2. Talvez possa ser um desafio bom você implementar um prazo de validado para as JWT.
</blockquote>

### Concluindo

Espero que você tenha gostado das ideias. Nossa área ela possui muitos desafios diversos, porém se você sober a base, seu progresso será muito menos doloroso.

Vejo você no próximo!! Byeeee~

<div class="has-text-centered">
  <img
    width="200"
    src="/includes/octo-dancing.gif"
    alt="Image from the post"
  />
</div>
