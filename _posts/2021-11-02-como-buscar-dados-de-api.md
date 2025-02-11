---
layout: post
title: Aprendendo a utilizar HTTP
subtitle: Integrando seu Front-end com APIs de Back-end.
img: /assets/images/posts/como-buscar-dados-de-api.webp
alt: prendendo a utilizar HTTP
link: /posts/2021-11-02-como-buscar-dados-de-api
internal: true
draft: false
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

Uma grande vantagem do HTTP é que ele trafega texto, então é muito fácil parsear e ler uma chamada HTTP. Talvez você ache que isso torna ele inseguro, e isso seria verdade se não existisse o HTTPS, HTTPS é uma extensão do protocolo HTTP padrão, porém ele criptografa o documento em formato texto, tornando mais seguro a navegação na internet.


Viu como é fácil? HTTP faz parte do nosso dia-a-dia na internet, então não precisa ter medo de usá-lo, ele permite que a internet funcione do jeito que ela funciona hoje.

## Como podemos usar?

### Preparativos:

Para podermos fazer os códigos desse post, nós vamos utilizar o <a href="https://www.npmjs.com/package/json-server" target="blank">json-server</a>, você pode fazer o download dele com o npm. O json-server ele cria um servidor REST com base em um arquivo JSON que você tenha localmente, não é algo que você deva subir para produção, mas ajuda muito em testar seu front-end.

Você pode baixar o json que usaremos nesses exemplos <a href="{{ "/assets/json/db.json" | prepend: site.baseurl_root }}" download>nesse link</a>.

Em seguida você pode rodar assim:

<img
  src="/assets/images/posts/assets/2021-11-02-como-buscar-dados-de-api-01.png"
  alt="Como rodar"
/>

Eu criei um projeto contendo os exemplos de como consumir uma api, você pode ver o repositório no final desse post.

### Conheça Fetch

<a href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API" target="blank">Fetch API</a>, é a interface padrão do navegador de montar chamadas HTTP dos navegadores mais modernos, eu vou utilizar em todos os exemplos, porém tudo que você vir nesse artigo você pode aplicar no <a href="https://www.npmjs.com/package/axios" target="blank">axios</a>, ou <a href="https://angular.io/guide/http" target="blank">angular.http</a>, ou qualquer outro módulo de HTTP disponível no mercado.

O Fetch possui uma estrutura muito padrãozinha, o que para mim é uma grande vantagem, veja abaixo como ele funciona.

<pre class="is-hljs">
  <code class="javascript">
    fetch(
      'http://localhost:3000/users',
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
      .then(response => {
        if (response.status >= 300)
          throw new Error(response.statusText);

        return response.json();
      })
      .then(data => console.log(data))
      .catch(error => console.error(error));
  </code>
</pre>

Se você já se desesperou, tenha calma. Vamos analisar por partes, o Fetch abstrai muito do padrão HTTP, você se lembra que discutimos anteriormente sobre como montamos uma requisição? Nós precisamos do **Destino**, **Verbo**, e os **Headers**. Se você observar as primeiras linhas do nosso código, nós podemos destrinchar nossa requisição dessa forma:

#### Requisição:
<span class="code">Verbo:</span> **GET** <br />
<span class="code">URL:</span> http://localhost:3000/users <br />
<span class="code">Cabeçalhos:</span> <br />

- **Content-Type:** application/json

E como estamos utilizando promisses, que é uma forma de lidar com código assíncrono com JavaScript, no primeiro <code>.then</code> nós estamos checando se o status é um status de error, normalmente status acima do 300 são status de erro, caso tenhamos algum erro, nós iremos direto para o <code>.catch</code> e ai podemos tratar o erro da forma que desejarmos. Se não temos status de erro nós seguimos para o próximo <code>.then</code> transformando o corpo na nossa requisição em json com a chamada <code>response.json()</code>.

Nós também podemos reescrever esse código seguindo a syntax-sugar de async/await. Lembre-se que só podemos usar await dentro de funções declaradas como async.

<pre class="is-hljs">
  <code class="javascript">
  try {
    const response = await fetch('http://localhost:3000/users',
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );

    if (response.status >= 300)
      throw new Error(response.statusText);

    const data = await response.json();

    console.log(data);
  } catch (ex) {
    console.error(ex);
  }
  </code>
</pre>

O fetch também tem outra facilidade, caso você queira fazer apenas umas chamada do tipo GET, você pode encurtar ainda mais o seu código.

<pre class="is-hljs">
  <code class="javascript">
  try {
    const response = await fetch('http://localhost:3000/users');

    if (response.status >= 300)
      throw new Error(response.statusText);

    const data = await response.json();

    console.log(data);
  } catch (ex) {
    console.error(ex)
  }
  </code>
</pre>

Mas lembre-se que funciona apenas para chamadas do tipo **GET**.

Agora, vamos fazer chamadas do tipo **POST**. Ele é muito parecido com o **GET**, a diferença é que mudamos o <code>method</code>, e devemos passar um <code>body</code>. Uma coisa que fazemos com o Fetch é transformar o body em string utilizando o <code>JSON.stringify</code> para podermos montar a nossa requisição.

<pre class="is-hljs">
  <code class="javascript">
  const body = {
    name: "João Marcus Fernandes",
    username: "joaomarcuslf",
    role_id: 1
  };

  try {
    const response = await fetch('http://localhost:3000/users',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      }
    );

    if (response.status >= 300)
      throw new Error(response.statusText);

    const data = await response.json();

    console.log(data);
  } catch (ex) {
    console.error(ex)
  }
  </code>
</pre>

Já que vimos o **POST**, vamos ver o **PUT** que é muitíssimo parecido.

<pre class="is-hljs">
  <code class="javascript">
  const body = {
    name: "João Marcus de Lemos",
    username: "joaomarcuslf",
    role_id: 2
  };

  try {
    const response = await fetch('http://localhost:3000/users/3',
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      }
    );

    if (response.status >= 300)
      throw new Error(response.statusText);

    const data = await response.json();

    console.log(data);
  } catch (ex) {
    console.error(ex)
  }
  </code>
</pre>

O **PUT** ele é uma requisição de atualização serve para mudarmos dados que já existiam na nossa base.

Agora, só ficou faltando o **DELETE**, e ele é muito parecido com o **GET** pois não tem um body, só precisamos mudar o method. Veja abaixo.

<pre class="is-hljs">
  <code class="javascript">
  try {
    const response = await fetch('http://localhost:3000/users/4',
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );

    if (response.status >= 300)
      throw new Error(response.statusText);

    const data = await response.json();

    console.log(data);
  } catch (ex) {
    console.error(ex);
  }
  </code>
</pre>

Bom, essas são as formas de implementar chamadas HTTP no Front, com o Fetch a gente tem uma visibilidade muito boa de como funciona o HTTP, e eu gosto disso, ele é bem explícito, porém com o axios também seria bem fácil, vou mostrar abaixo uma versão resumida das requisições.

<pre class="is-hljs">
  <code class="javascript">
  const data = await axios.get('http://localhost:3000/users')

  const data = await axios.post('http://localhost:3000/users', body)

  const data = await axios.put('http://localhost:3000/users/4', body)

  const data = await axios.delete('http://localhost:3000/users/4', body)
  </code>
</pre>

Eu costumo nos projetos em que trabalho montar um helper de HTTP que siga uma assinatura parecida porém utilizando o Fetch, você pode ver como eu faço <a href="https://github.com/joaomarcuslf/http-examples/blob/main/public/js/http.js" target="blank">nesse link</a>.

<div>
  {%
    include components/project-card.html
      main="html5"
      name="http-examples"
      user="joaomarcuslf"
      repo="http-examples"
  %}
</div>

### Concluindo

Espero de coração que esse post tenha te ajudado a entender como o HTTP funciona e como fazer chamadas de seu Front-end para pegar os dados de uma api.

Caso ainda esteja com dúvidas, dê uma olhada no repositório desse post, ele tem exemplos por página. E se ainda assim ficar com dúvida, minhas redes sociais estão no final da página, entre em contato comigo, sua dúvida pode me ajudar a expandir esse post.

Outro post que eu tenho planejado, é de falar sobre como usar autenticação em chamada HTTP, vejo que muitas pessoas ainda tem dúvida desse tópico.

Vejo você no próximo!! Byeeee~

<div class="has-text-centered">
  <img
    width="390"
    src="/assets/images/posts/assets/octo-dancing.gif"
    alt="Image from the post"
  />
</div>
