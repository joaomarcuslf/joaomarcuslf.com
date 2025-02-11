---
layout: mentorship
title: HTML 02 - Utilizando media-query
subtitle: Se adaptando ao ambiente
type: lesson
---

<div class="is-flex-container to-center">
  <img class="is-fullwidth" src="/assets/mentorship/retrospective.png" />
</div>

## Retrospectiva

- Entendemos o que é posicionamento.
- Vimos a diferença entre elementos de blocos e linhas.
- Começamos a entender o que é flex.
  - Seus usos.
  - Porque ele é perfeito sem defeitos.
- Vimos sobre responsividade.
- Brincamos de froggy.
- E por fim começamos a fazer seu site.

<div class="is-flex-container to-center">
  <img class="is-fullwidth" src="/assets/mentorship/froggy.png" />
</div>


## Qual o objetivo final dessa aula?

<div class="is-flex-container to-center">
  <img class="is-fullwidth" src="/assets/mentorship/menu-mobile-desktop.png" />
</div>

## Vamos falar sobre nomenclatura?

<div class="is-flex-container to-center">
  <img src="/assets/mentorship/measuring-screen.png" />
</div>

Vamos combinar alguns termos que eu vou utilizar nessa e em próximas aulas, esses termos se referem aos tamanhos das telas.

- **Mobile:** Telas de celulares. Em termos de px vai até 600px;
- **Tablet Portrait:** Telas de tablet em pé. Em termos de px vai até 960px;
- **Tablet Landscape:** Telas de tablet deitado. Em termos de px vai até 1200px;
- **Desktop:** Telas de computador/notebook. Em termos de px vai até 1800px;
- **Big Desktop:** Telas de ultra wide, com largura variada. Em termos de px vai de 1801px até o infinito;

Você pode guardar essa imagem como referência:

<div class="is-flex-container to-center">
  <img src="/assets/mentorship/display-reference.png" />
</div>

## Okay, mas para quê eu preciso disso tudo?

Bom, precisa porque vamos usar Media-queries.

Media-queries são um tipo especial de regra do CSS, nele você pode dizer que alguns estilos só serão aplicados em tamanhos de tela específicos, eles seguem esse formato:

<pre class="is-hljs">
  <code class="css">
  // Estilo normal
  .container {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
  }

  // Estilo apenas para celular
  @media screen and (min-width: 600px) {
    .container {
      display: flex;
      flex-wrap: nowrap;
      flex-direction: column;
    }
  }
  </code>
</pre>

**Tipos de tela:** all, print, screen, speech.

Tamanhos de tela são aqueles que vimos na tabela anterior.

Você pode colocar quantas condições quiser depois do @media e antes do primeiro **{**. Mas tente manter até no máximo 3.

<pre class="is-hljs">
  <code class="css">
  @media [TIPO DE TELA] and ([TAMANHO DA TELA]) {
    [ESTILO QUE SÓ SERÁ APLICADO EM DISPOSITIVOS QUE SEGUIREM ESSA REGRA]
  }
  </code>
</pre>

### Quais regras de tamanho de tela mais usadas?

- **width:** Largura fixa da tela em px;
- **height:** Altura fixa da tela em px;
- **orientation:** Se o dispositivo está deitado ou em pé. (portrait / landscape);
- **max-width:** Dispositivo tem que ter até essa largura;
- **min-width:** Dispositivo tem que ter no mínimo essa largura;
- **max-height:** Dispositivo tem que ter no máximo essa altura;
- **min-height:** Dispositivo tem que ter no mínimo essa altura;

### Okay, chega de papo furado, vamos praticar!

Siga esses passos para você conseguir simular dispositivos no seu navegador:

1. Abra o inspetor de elementos no chrome ou firefox.
2. Procure esse símbolo:


<div class="is-flex-container to-center">
  <img src="/assets/mentorship/responsive-guide-01.png" />
</div>

<br />

Seu inspetor deve ter ficado mais ou meno assim. Esse primeiro retângulo a esquerda é a largura, o da direita é altura, se você reparar nessas marcações em cinza abaixo desses retângulos, são tamanhos já comuns no mercado. Você pode ou customizar ou seguir as marcações.

Com Medias-queries você pode escrver seu CSS direcionando a uma resolução específica e depois ir adicionando as customizações para outras resoluções, os tipos mais comuns de abordagem são:

- **Desktop-first:** Modelo de estilização onde primeiro é feito o desktop, e depois vai fazendo modificações para outros dispositivos. Mais fácil no início do aprendizado.
- **Mobile-first:** Modelo de estilização onde primeiro é feito o mobile, e depois vai fazendo modificações para os outros dispositivos. Esse é o melhor jeito de se trabalhar, porém é difícil se acostumar no início.

Utilizando media-query, você deve fazer com que seu menu suma no mobile, e fique com um botão que vá mostrar ou não ele.

Em próximas aulas nós vamos utilizar Javascript em conjunto com animações no CSS para que possamos controlar esse menu.

## Desafio para próxima aula:

<div class="is-flex-container to-center">
  <img class="is-fullwidth" src="/assets/mentorship/section-site-01.png" />
</div>

Vamos começar a preparar a primeira sessão do seu site.

- Coloque uma cor de background, pode ser branco mesmo.
- Estilize seu nome seguindo essa ideia de duas cores.
- Coloque abaixo do seu nome seu e-mail, e profissão estudante de Front-end.
- Coloque um textinho sobre você.

Por hora ignore os ícones de rede sociais, em breve vamos adicioná-los.
