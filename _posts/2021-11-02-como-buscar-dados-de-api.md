---
layout: post
title: Aprendendo a utilizar HTTP
subtitle: Integrando seu Front-end com APIs de Back-end.
img: /assets/images/posts/como-buscar-dados-de-api.webp
alt: prendendo a utilizar HTTP
link: /posts/2021-11-02-como-buscar-dados-de-api
internal: true
draft: true
lang: pt
tags:
  - Beginner
  - Internal
  - Hard-skills
  - HTTP
  - Career
  - Portuguese
---

Você já precisou chamar uma API enquanto você tava trabalhando no seu Front? Talvez você tenha achado um código na internet, mas não teve certeza de como ele funciona, ou não entendeu todas as partes deles, hoje eu quero te ajudar a entender como funciona para fazer esse tipo de chamadas, ou como nós vamos chamar a partir de agora <span class="code">requisições HTTP</span>.

Você sabe o que é HTTP? Não, então vem comigo.

## O que é HTTP?

HTTP é um tipo de protocolo de comunicação, existem muitos na web e fora dela, esses protocolos servem para definir um padrão de comunicação, esse padrão define como deve ser formatado uma requisição, e como você deve esperar uma resposta.

Pensa assim, eu estou chamando minha cachorra e pedindo para ele me dar a patinha, se nós precisássemos definir um protocolo para esse tipo  de requisição funcionaria assim:

<span class="code">Requisição:</span>
**Destino:** Nissa *|*
**Corpo da chamada:** Me dá a patinha!

<span class="code">Resposta:</span>
**Destino:** Remetente *|*
**Corpo da resposta:** Requisição bem sucedida.

E dai, ela me daria a patinha dela. Esse tipo de analogia, a Nissa, minha cachorra, seria um servidor, esse servidor processou minha requisição com base no corpo da chamada, e daria uma resposta se foi bem sucedida ou não, caso ela não me obedecesse, e por exemplo, ao invés de me dar a pata saísse correndo, eu teria essa resposta:

<span class="code">Resposta:</span>
**Destino:** Remetente *|*
**Corpo da resposta:** Requisição não pôde ser processada corretamente.

E com esse tipo de resposta, eu, o Front-end/Cliente teria que ter um comportamento para tratar esse tipo de erro. Ficou mais claro agora porquê precisamos definir esses tipos de padrões de comunicação?

Com isso em mente, vamos entender como o HTTP estrutura seus padrões:

#### Requisição:
<span class="code">Verbo:</span> Definindo qual o tipo da requisição, podendo ser **GET**, **POST**, **PUT**, **DELETE**, ou **OPTIONS**. Todos esses verbos são tratados pelo servidor para cada um ter seu comportamento definido. <br />
<span class="code">URL:</span> Aqui contém a URL que o servidor que você quer está hospedado. <br />
<span class="code">Cabeçalhos:</span> Aqui é onde podemos passar o que chamamos de metadata, podendo conter a origem da requisição, se possuímos algum tipo de autenticação, ou até mesmo quais valores esperamos receber. Vamos explorar tudo isso mais para frente. <br />
<span class="code">Corpo:</span> Aqui é onde vamos passar dados que devem ser utilizados pelo servidor para poder processar nossa requisição de fato. <br />

#### Resposta:
<span class="code">Status:</span> Nessa parte, o servidor irá informar se foi bem sucedido, se falhou, ou qual tipo de resposta o cliente receberá, você pode ver quais <a href="https://http.cat/" target="blank">status mais usados nesse link</a>. <br />
<span class="code">Cabeçalhos:</span> Semelhante aos cabeçalhos da requisição, porém aqui os metadata vêm do servidor, então contém qual o tipo de dado que a resposta contém, de onde o servidor responde, informações para cache, e por ai vai. <br />
<span class="code">Corpo:</span> Aqui o servidor está te entregando o dado requisitado, ou alguma formatação informando o erro. <br />

Veja esse exemplo:

#### Requisição:
<span class="code">Verbo:</span> **GET** <br />
<span class="code">URL:</span> https://www.google.com/ <br />
<span class="code">Cabeçalhos:</span> <br />

- **Accept:** text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp;

<span class="code">Corpo:</span> <br />


#### Resposta:
<span class="code">Status:</span> 200 **OK** <br />
<span class="code">Cabeçalhos:</span> <br />

- **content-encoding:** br
- **content-length:** 36675
- **content-type:** text/html; charset=UTF-8

<span class="code">Corpo:</span> HTML do site do Google <br />

Essa requisição acontece toda vez que você acessa a página do Google, sem que você precise escreve uma linha sequer de código, na requisição nós estamos pedindo o conteúdo que estiver no / do Google, informando que é um GET, e estamos dizendo que esperamos receber imagens, HTML, ou algum tipo de XML. E o Google nos respondeu com a conteúdo do tipo HTML, contendo 36675 caracteres, e com o enconding BR pois estou com meu navegador em português. Você pôde perceber que o Corpo da requisição está vazio? Bom, por convenção o corpo da requisição é opcional em requisições do tipo GET e DELETE.

Viu como é fácil? HTTP faz parte do nosso dia-a-dia na internet, então não precisa ter medo de usá-lo, ele permite que a internet funcione do jeito que ela funciona hoje.
