---
layout: mentorship
title: HTML 01 - Encaixando na tela
subtitle: Utilizando Flexbox, a obra-prima do CSS
type: lesson
---

## O que é posicionamento?

Os elementos na tela eles possuem regras para como eles se "aconchegam" na tela. Normalmente essa regras são definidas pelo próprio navegador, podendo ser tanto elementos do tipo **blocos**, quanto os do tipo **linhas**.

**Blocos**: Elementos de bloco tentam ocupar o máximo de espaço possível. Normalmente são utilizados para **div**idir elementos na tela. Sendo o próprio div um dos mais utilizados.

**Linha**: Elementos de linha tentam ocupar apenas o espaço suficiente para eles. Normalmente são utilizados para mostrar textos, parágrafos, links e imagens.

<div class="is-flex-container to-center">
  <img src="/assets/mentorship/grid-elements.png" />
</div>

<br />

Apesar de não ser necessário, vou colocar aqui uma lista de elementos do blocos e linhas apenas para referência.

### Blocos:

<pre>
address, article, aside, blockquote, canvas, dd,
div, dl, dt, fieldset, figcaption, figure, footer,
form, h1-h6, header, hr, li, main, nav, noscript,
ol, p, pre, section, table, tfoot, ul
</pre>

### Linhas:

<pre>
a, abbr, acronym, b, bdo, big, br, button, cite, code,
dfn, em, i, img, input, kbd, label, map, object, output,
q, samp, script, select, small, span, strong, sub, sup,
textarea, time, tt, var
</pre>

### Gerações web

Por conta do caos que muitas vezes são gerados por conta de você misturar tags, ou mesmo a necessidade de você ter layouts mais avançados nós passamos por muitas gerações de estilização de telas:

#### Table

Uma época onde os layouts eram escritos utilizando a tag table, esse tipo de layout funcionava pois você trabalhava com proporções, porém com o avanço de dispositivos mobile, desenvolver com table era muito caótico, o que motivou a próxima geração.

#### Multiplas páginas / Pré-tableless

Nessa geração, ela foi marcada pelos sistemas entregarem páginas diferentes com base na resolução de tela que você estava acessando, normalmente funcionava assim: *www.meusite.com*, *www.mobile.meusite.com*. Essa época foi marcada pelos primeiros aparelhos celular que tinham acesso a internet, porém ainda muito limitado. O que ocasionou a próxima geração foi a dificuldade de manter várias páginas diferentes.

#### Responsive layout / Tableless

Quando os dispositivos começaram a suportar renderizações mais sofisticadas, e a internet móvel ficou mais rápida, chegamos onde estamos atualmente, nós utilizamos o mesmo CSS, e HTML, porém com o uso de media-queries, nós podemos flexibilizar a tela para que ela vá se adaptando à resolução que estamos utilizando no dispositivo.

Essa geração também é marcada pelo nome Layout Adaptativa.

## Conheça Flex

Começando pelo nosso primeiro <code>display: flex;</code>, o Flex é uma forma de tornar elementos de bloco, e linha em um tipo de elemento mais flexível, hoje em dia é o padrão para criar telas que sigam uma ideia de responsividade.

Utilizando elementos flexíveis, você pode contruir páginas complexas sem muita dor de cabeça.

Você pode ver mais sobre o FLex aqui:

<a href="https://developer.mozilla.org/pt-BR/docs/Web/CSS/flex">https://developer.mozilla.org/pt-BR/docs/Web/CSS/flex</a>

Okay, mas o que é responsividade?

### Reponsividade

Como vimos anteriormente, na geração passada, quando queríamos que um site fosse usável no celular, nós precisávamos criar sites diferentes e encaminhar com base no tamanho da tela.

Mas isso fazia com que você tinha que reescrever seu site, e com o passar do tempo, celulares com telas maiores, tablets, notebooks com telas menores surgiram. E com isso nasceu ideias de responsividade.

Veja mais aqui:

<a href="https://developer.mozilla.org/pt-BR/docs/Learn/CSS/CSS_layout/Responsive_Design">https://developer.mozilla.org/pt-BR/docs/Learn/CSS/CSS_layout/Responsive_Design</a>

### Começando com o Flex

Com Flex, podemos definir que elementos vão tentar ocupar o máximo possível de largura e ir gradualmente quebrando linha com poucas linhas de css:

<pre class="is-hljs">
  <code class="css">
  .container {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
  }

  .elements {
    display: flex;
    flex: 1;
    min-width: 50px;
  }
  </code>
</pre>

<div class="is-flex-container to-center">
  <img src="/assets/mentorship/grid-flex.png" />
</div>

## Indo além

O Flex ele possui muitas funcionalidades, ao invés de eu mostrar todas aqui, eu proponho um desafio a você, existe um jogo chamado Flexfroggy, nele voce  deve ajudar sapos a não afundarem usando recursos do flex.

<a href="https://flexboxfroggy.com/#pt-br">https://flexboxfroggy.com/#pt-br</a>

Você também pode usar como referência pro futuro, esses dois posts que são verdadeira coletâneas sobre Flex.

- **PT:** <a href="https://origamid.com/projetos/flexbox-guia-completo/">https://origamid.com/projetos/flexbox-guia-completo/</a>
- **EN:** <a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/">https://css-tricks.com/snippets/css/a-guide-to-flexbox/</a>

## Próximos passos

Nós vamos ao longo desses posts sobr HTML, CSS, e JavaScript criar um site seu. Vamos dividir em pedaços, o primeiro será o de criar o menu lateral. Utilize o template que está abaixo.

Vamos escolher uma palheta de cores para seu site, você pode conferir nesse site algumas ideias:
- <a href="https://www.canva.com/colors/color-palettes/">https://www.canva.com/colors/color-palettes/</a>

Caso tenha alguma dúvida, use essas cores temporariamente:
- <a href="https://www.canva.com/colors/color-palettes/birthday-cake/">https://www.canva.com/colors/color-palettes/birthday-cake/</a>

<div class="is-flex-container to-center">
  <img class="border-1-dark is-fullwidth" src="/assets/mentorship/template-example.png" />
</div>
