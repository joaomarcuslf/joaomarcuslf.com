---
layout: post
title: Aprendendo a utilizar HTTP
subtitle: Integrando seu Front-end com APIs de Back-end.
img: /images/posts/como-buscar-dados-de-api.webp
alt: This image contains a closed notebook, a pen, and a laptop in a table.
link: /posts/2021-11-02-como-buscar-dados-de-api
internal: true
draft: false
lang: pt
tags:
  - Beginner
  - Career
  - Portuguese
  - Hard-skills
  - JavaScript
---

Você já precisou chamar uma API enquanto trabalhava no seu Front? Talvez você tenha encontrado um código na internet, mas não teve certeza de como ele funciona ou não entendeu todas as partes dele. Hoje, eu quero te ajudar a entender como fazer esse tipo de chamada, ou, como vamos chamar a partir de agora, <span class="code">requisições HTTP</span>.

Você sabe o que é HTTP? Não? Então vem comigo.

## O que é HTTP?

HTTP é um tipo de protocolo de comunicação. Existem muitos protocolos na web e fora dela, e eles servem para definir um padrão de comunicação. Esse padrão define como uma requisição deve ser formatada e como você deve esperar uma resposta.

Pense assim: eu estou chamando minha cachorra e pedindo para ela me dar a patinha. Se precisássemos definir um protocolo para esse tipo de requisição, funcionaria assim:

<span class="code">Requisição:</span>
- **Destino:** Nissa
- **Corpo da chamada:** Me dá a patinha!

<span class="code">Resposta:</span>
- **Destino:** Remetente
- **Corpo da resposta:** Requisição bem-sucedida.

E então, ela me daria a patinha. Nessa analogia, a Nissa, minha cachorra, seria um servidor. Esse servidor processou minha requisição com base no corpo da chamada e deu uma resposta indicando se foi bem-sucedida ou não. Caso ela não me obedecesse e, por exemplo, ao invés de me dar a pata, saísse correndo, eu teria essa resposta:

<span class="code">Resposta:</span>
- **Destino:** Remetente
- **Corpo da resposta:** Requisição não pôde ser processada corretamente.

Com esse tipo de resposta, eu, o Front-end/Cliente, teria que ter um comportamento para tratar esse tipo de erro. Ficou mais claro agora por que precisamos definir esses padrões de comunicação?

Com isso em mente, vamos entender como o HTTP estrutura seus padrões:

#### Requisição:

<span class="code">Verbo:</span> Define o tipo da requisição, podendo ser **GET**, **POST**, **PUT**, **DELETE** ou **OPTIONS**. Todos esses verbos são tratados pelo servidor, cada um com seu comportamento definido. <br />
<span class="code">URL:</span> Contém a URL onde o servidor que você quer acessar está hospedado. <br />
<span class="code">Cabeçalhos:</span> Aqui podemos passar o que chamamos de metadados, como a origem da requisição, se possuímos algum tipo de autenticação ou até mesmo quais valores esperamos receber. Vamos explorar tudo isso mais para frente. <br />
<span class="code">Corpo:</span> Aqui passamos os dados que devem ser utilizados pelo servidor para processar nossa requisição. <br />

#### Resposta:

<span class="code">Status:</span> Aqui, o servidor informa se a requisição foi bem-sucedida, se falhou ou qual tipo de resposta o cliente receberá. Você pode ver os <a href="https://http.cat/" target="blank">status mais usados nesse link</a>. <br />
<span class="code">Cabeçalhos:</span> Semelhante aos cabeçalhos da requisição, porém aqui os metadados vêm do servidor, contendo o tipo de dado que a resposta contém, de onde o servidor responde, informações para cache, e assim por diante. <br />
<span class="code">Corpo:</span> Aqui, o servidor entrega o dado requisitado ou alguma formatação informando o erro. <br />

Veja esse exemplo:

#### Requisição:

<span class="code">Verbo:</span> **GET** <br />
<span class="code">URL:</span> https://www.google.com/ <br />
<span class="code">Cabeçalhos:</span> **Accept:** text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp; <br />
<span class="code">Corpo:</span> <br />

#### Resposta:

<span class="code">Status:</span> 200 **OK** <br />
<span class="code">Cabeçalhos:</span> <br />

- **content-encoding:** br
- **content-length:** 36675
- **content-type:** text/html; charset=UTF-8

<span class="code">Corpo:</span> HTML do site do Google <br />

Essa requisição acontece toda vez que você acessa a página do Google, sem que você precise escrever uma linha sequer de código. Na requisição, estamos pedindo o conteúdo que estiver no `/` do Google, informando que é um **GET**, e dizendo que esperamos receber imagens, HTML ou algum tipo de XML. O Google nos respondeu com o conteúdo do tipo HTML, contendo 36.675 caracteres, e com o encoding **br**, pois estou com meu navegador em português. Você percebeu que o corpo da requisição está vazio? Por convenção, o corpo da requisição é opcional em requisições do tipo **GET** e **DELETE**.

Uma grande vantagem do HTTP é que ele trafega texto, o que torna muito fácil parsear e ler uma chamada HTTP. Talvez você ache que isso o torna inseguro, e isso seria verdade se não existisse o **HTTPS**. HTTPS é uma extensão do protocolo HTTP padrão, porém ele criptografa o documento em formato texto, tornando a navegação na internet mais segura.

Viu como é fácil? HTTP faz parte do nosso dia a dia na internet, então não precisa ter medo de usá-lo. Ele permite que a internet funcione do jeito que ela funciona hoje.

## Como podemos usar?

### Preparativos:

Para podermos fazer os códigos deste post, vamos utilizar o <a href="https://www.npmjs.com/package/json-server" target="blank">json-server</a>. Você pode fazer o download dele com o npm. O json-server cria um servidor REST com base em um arquivo JSON que você tenha localmente. Não é algo que você deva subir para produção, mas ajuda muito a testar seu front-end.

Você pode baixar o JSON que usaremos nesses exemplos <a href="/json/db.json" download>nesse link</a>.

Em seguida, você pode rodar assim:

<img
  src="/includes/2021-11-02-como-buscar-dados-de-api-01.png"
  alt="Como rodar"
/>

Eu criei um projeto contendo os exemplos de como consumir uma API. Você pode ver o repositório no final deste post.

### Conheça Fetch

A <a href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API" target="blank">Fetch API</a> é a interface padrão dos navegadores modernos para montar chamadas HTTP. Vou utilizá-la em todos os exemplos, mas tudo o que você ver aqui pode ser aplicado no <a href="https://www.npmjs.com/package/axios" target="blank">axios</a>, no <a href="https://angular.io/guide/http" target="blank">angular.http</a> ou em qualquer outro módulo de HTTP disponível no mercado.

O Fetch possui uma estrutura muito padrão, o que, para mim, é uma grande vantagem. Veja abaixo como ele funciona.

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

Se você já se desesperou, tenha calma. Vamos analisar por partes. O Fetch abstrai muito do padrão HTTP. Você se lembra que discutimos anteriormente sobre como montamos uma requisição? Precisamos do **Destino**, **Verbo** e **Headers**. Se você observar as primeiras linhas do nosso código, podemos destrinchar nossa requisição dessa forma:

#### Requisição:

<span class="code">Verbo:</span> **GET** <br />
<span class="code">URL:</span> http://localhost:3000/users <br />
<span class="code">Cabeçalhos:</span> <br />

- **Content-Type:** application/json

E como estamos utilizando Promises, que são uma forma de lidar com código assíncrono em JavaScript, no primeiro <code>.then</code> estamos verificando se o status é um status de erro. Normalmente, status acima de 300 são considerados erros. Caso haja algum erro, iremos direto para o <code>.catch</code>, onde podemos tratar o erro da forma que desejarmos. Se não houver erro, seguimos para o próximo <code>.then</code>, transformando o corpo da requisição em JSON com a chamada <code>response.json()</code>.

Também podemos reescrever esse código usando a syntax sugar de async/await. Lembre-se de que só podemos usar <code>await</code> dentro de funções declaradas como <code>async</code>.

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

O Fetch também tem outra facilidade: caso você queira fazer apenas uma chamada do tipo **GET**, você pode encurtar ainda mais o seu código.

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

Mas lembre-se de que isso funciona apenas para chamadas do tipo **GET**.

Agora, vamos fazer chamadas do tipo **POST**. Ele é muito parecido com o **GET**, a diferença é que mudamos o <code>method</code> e devemos passar um <code>body</code>. Uma coisa que fazemos com o Fetch é transformar o body em string utilizando o <code>JSON.stringify</code> para montar a nossa requisição.

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

Já que vimos o **POST**, vamos ver o **PUT**, que é muitíssimo parecido.

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

O **PUT** é uma requisição de atualização e serve para mudarmos dados que já existiam na nossa base.

Agora, só falta o **DELETE**, que é muito parecido com o **GET**, pois não tem um body. Só precisamos mudar o method. Veja abaixo.

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

Bom, essas são as formas de implementar chamadas HTTP no Front. Com o Fetch, temos uma visibilidade muito boa de como o HTTP funciona, e eu gosto disso. Ele é bem explícito. Porém, com o axios também seria bem fácil. Vou mostrar abaixo uma versão resumida das requisições.

<pre class="is-hljs">
  <code class="javascript">
  const data = await axios.get('http://localhost:3000/users')
  const data = await axios.post('http://localhost:3000/users', body)
  const data = await axios.put('http://localhost:3000/users/4', body)
  const data = await axios.delete('http://localhost:3000/users/4', body)
  </code>
</pre>

Eu costumo, nos projetos em que trabalho, montar um helper de HTTP que siga uma assinatura parecida, porém utilizando o Fetch. Você pode ver como eu faço <a href="https://github.com/joaomarcuslf/http-examples/blob/main/public/js/http.js" target="blank">nesse link</a>.

### Concluindo

Espero de coração que este post tenha te ajudado a entender como o HTTP funciona e como fazer chamadas do seu Front-end para pegar os dados de uma API.

Caso ainda esteja com dúvidas, dê uma olhada no repositório deste post. Ele tem exemplos por página. E se ainda assim ficar com dúvida, minhas redes sociais estão no final da página. Entre em contato comigo; sua dúvida pode me ajudar a expandir este post.

Outro post que tenho planejado é falar sobre como usar autenticação em chamadas HTTP. Vejo que muitas pessoas ainda têm dúvidas sobre esse tópico.

Vejo você no próximo! Byeeee~

<div class="has-text-centered">
  <img
    width="200"
    src="/includes/octo-dancing.gif"
    alt="Image from the post"
  />
</div>
