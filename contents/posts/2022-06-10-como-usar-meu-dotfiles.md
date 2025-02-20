---
layout: post
title: Como usar meu Dotfiles
subtitle: Configurações práticas para agilizar seu setup.
img: /images/posts/como-usar-meu-dotfiles.webp
alt: This is a image with a Colorized terminal.
link: /posts/2022-06-10-como-usar-meu-dotfiles
internal: true
draft: false
lang: pt
tags:
  - Beginner
  - Portuguese
  - Personal
---

Antigamente, era muito comum que as pessoas compartilhassem seus Setups, e eu particularmente adorava ler esses tipos de posts, até que eu decidi configurar o meu próprio Setup, e eu decidi fazer em cima do `oh-my-zsh` junto com alguns plugins, e uma adaptação de um tema muito famoso dele. E como eu sou muito bom em seguir modas que já morreram, resolvi fazer um post explicando o passo a passo de como eu inicio meu ambiente de desenvolvimento.

<blockquote class="is-family-monospace">
<strong>Disclaimer:</strong> <br />
Eu fiz o possível para que o Setup funcione em todos os Unix-like, em todos que eu mexi (Manjaro, Fedora, Ubuntu, Linux Mint, Mac, Raspberry Pi), eu consegui sem grandes dificuldades, no máximo tive que adaptar alguma etapa ao ambiente que uso.
</blockquote>

### Pré-etapas

Alguns passos não puderam ser adicionadas ao Setup, pois elas são específicas de ambientem vamos vê-las individualmente.

#### Homebrew (Mac)

Link do projeto: [Site](https://brew.sh/)

Essa seção é específica para Mac, se você estiver no Linux pode pular.

<pre class="is-hljs">
  <code class="bash">
  /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
  </code>
</pre>

#### Fira Code

Link do projeto: [Github](https://github.com/tonsky/FiraCode/wiki/Installing)

Essa é uma das minhas fonts favoritas, e eu costumo utilizar ela tanto no terminal, quanto no editor de texto.

No Mac, você precisa ter o Brew:

<pre class="is-hljs">
  <code class="bash">
  brew tap homebrew/cask-fonts
  brew install --cask font-fira-code
  </code>
</pre>

Nos Linux que usei:

<pre class="is-hljs">
  <code class="bash">
  // Ubuntu / Linux Mint
  sudo apt install fonts-firacode

  // Manjaro
  sudo pacman -S fira-code-fonts

  // Fedora
  sudo dnf install fira-code-fonts
  </code>
</pre>

Para outros casos, consulte o repositório no topo dessa seção.

#### Hyper

Link do projeto: [Site](https://hyper.is/)

Hyper é um temrinal que funciona tanto no Linux, quanto no Mac, então eu opto por usá-lo já que posso manter minhas configs do terminal de forma facilmente compartilhada. É só clicar no link que já mostra a opção de download.

#### Git-extras

Link do projeto: [Github](https://github.com/tj/git-extras/blob/master/Installation.md)

Pequena dependência para o Git, ela é importante para alguns plugins do `zsh`.

Alguns comandos para agilizar, se seu OS não estiver aqui, consulte o repositório no topo dessa seção.

<pre class="is-hljs">
  <code class="bash">
  // Mac
  brew install git-extras

  // Ubuntu / Linux Mint
  sudo apt install git-extras

  // Manjaro
  sudo pacman -S git-extras

  // Fedora
  sudo dnf install git-extras
  </code>
</pre>

Para outros casos, consulte o repositório no topo dessa seção.

#### ZSH

Link do projeto: [Github](https://github.com/ohmyzsh/ohmyzsh/wiki/Installing-ZSH#how-to-install-zsh-on-many-platforms)

Zsh é um substituto ao `bash` que é muito utilizado em ambientes de desenvolvimento, eu escolhi usá-lo já que posso manter minhas configs do terminal de forma facilmente compartilhada. É só clicar no link que já mostra a opção de download.

<pre class="is-hljs">
  <code class="bash">
  // Mac
  brew install zsh

  // Ubuntu / Linux Mint
  sudo apt install zsh

  // Manjaro
  sudo pacman -S zsh

  // Fedora
  sudo dnf install zsh
  </code>
</pre>

Para outros casos, consulte o repositório no topo dessa seção.

Verifique se deu tudo certo com o comando: `zsh --version`. Se tudo der certo, você deve tornar o ZSH como o shell default, e depois de fazer isso, você deve reiniciar o terminal.

<pre class="is-hljs">
  <code class="bash">
  chsh -s $(which zsh)
  </code>
</pre>

Se ainda assim não funcionar, tente reiniciar seu ambiente, e depois siga algumas respostas [dessa thread](https://askubuntu.com/questions/131823/how-to-make-zsh-the-default-shell).

### Dotfiles

Link do projeto: [Github](https://github.com/joaomarcuslf/dotfiles/)

#### Comandos iniciais

<pre class="is-hljs">
  <code class="bash">
  cd ~
  git clone https://github.com/joaomarcuslf/dotfiles/

  // Espere terminar o Git clone

  cd dotfiles

  // Habilite o script.sh como executável
  sudo chmod +x start.sh
  ./start.sh
  </code>
</pre>

Após esse comando, você será perguntado para instalar alguns pacotes, e você deve responder `y` para cada um, ou `n` caso não tenha interesse nas libs.

<img
  src="/includes/2022-06-10-como-usar-meu-dotfiles-01.png"
  alt="Image from the post"
/>

Bom, você já está com tudo configuradinho, e com os plugins do ZSH instalados.

Existem alguns atalhos que eu criei para digitar menos, você pode checar na seção [alias](https://github.com/joaomarcuslf/dotfiles/blob/master/.bash_aliases).

Também existem alguns outras aplicações que eu recomendo você instalar para aumentar a produtividade, você pode checar na seção [comandos](https://github.com/joaomarcuslf/dotfiles#recommended).

### Atualização 2023-09-04

Além de diversas configurações que eu fiz no meu ambiente, eu também criei um script para automatizar lidar com configurações do Git, e chaves SSH, esse script se chama `git-profile`.

Se você já cumpriu todo o tutorial acima, o script já deve estar instalado, porém para garantir, siga os seguinte passo a passo no terminal:

<pre class="is-hljs">
  <code class="bash">
  cd ~
  cd dotfiles
  git pull

  refresh

  cat ~/scripts/git-profile.js
  </code>
</pre>

Se o arquivo existir, então você está pronto.

#### Como usar

O script `git-profile` é bem simples, ele tem alguns comandos, os principais são `set`, `create`, `remove`. Caso queira saber mais sobre, você pode rodar:

<pre class="is-hljs">
  <code class="bash">
  git-profile help
  </code>
</pre>

##### Criando um novo perfil

Para criar um novo perfil, você deve rodar o comando `git-profile create <profilename>`, o padrão que eu assumi para o nome dos arquivos de ssh é `id_ed25519`, caso você esteja usando algum outro padrão, como por exemplo `id_rsa`, você deve passar no final do comando assim: `git-profile create <profilename> is_rsa`.

Esse comando irá armazenar tanto o `.gitconfig`, quanto os arquivos dentro da pasta `~/.ssh` em uma pasta local chamada `.git-profile`.

##### Setando um perfil

Para alternar entre os perfis, você deve rodar o comando `git-profile set <profilename>`, esse comando irá copiar os arquivos do perfil para a pasta `~/.ssh`, e irá setar o `.gitconfig` para o perfil escolhido.

##### Removendo um perfil

Para remover um perfil, você deve rodar o comando `git-profile remove <profilename>`, esse comando irá remover os arquivos do perfil da pasta `~/.git-profile/.ssh`, e irá remover o `~/.git-profile/.gitconfig` do perfil.

**Nenhuma mudança será feito nos arquivos locais, então sua `.ssh`, e `.gitconfig` estará intacta até que você mude de perfil.**

##### Migrando

Caso você já tenha usado o `git-profile` no passado, você precisará rodar o comando `git-profile migrate`, para gerar os arquivos de metadata que serão utilizados para melhorar o uso.

##### Disclaimer

Nenhuma informação de seu ssh, ou gitconfig serão compartilhadas, você pode validar essa informação no arquivo [git-profile.js)](https://github.com/joaomarcuslf/dotfiles/blob/master/scripts/git-profile.js), esse script é apenas um automatizador de comandos para movimentar/copiar arquivos.

### Concluindo

Espero que você tenha gostado desse mini post. Caso você tenha algum problema, entre em contato comigo, eu estarei a disposição para ajudar.

Se gostou do projeto, dê uma estrelinha no Github, vou ficar bem feliz.

Vejo você no próximo!! Byeeee~

<div class="has-text-centered">
  <img
    width="200"
    src="/includes/octo-dancing.gif"
    alt="Image from the post"
  />
</div>
