---
templateKey: blog-post
title: 'Projeto de seleção - Master Heroes '
language: pt
baseUrl: blog
date: 2019-11-13T18:44:10.641Z
author: Tiago Gouvea
description: >-
  Desenvolver um game onde o jogador testará seu conhecimento sobre
  super-heróis. Este é o projeto para nosso  processo de seleção atual.
featuredPost: false
published: true
featuredImage: /img/blog_super_herois.png
tags:
  - Seleção
  - Oportunidade
  - Vaga
---
Desenvolver um game utilizando a [SuperHero API](https://superheroapi.com/index.html), onde o jogador testará seu conhecimento sobre super-heróis.

### Requisitos do projeto

* Ao carregar o jogador verá uma interface de boas vindas
* Ao iniciar, o sistema deve obter todos os personagens da API e salvar em estado local
* Randomizar a ordem dos personagens para exibição e apresentar o primeiro personagem 
* O componente que apresenta o personagem mostra três botões, cada um com o nome de um personagem para o usuário selecionar
* Ao acertar o nome do super-herói, o usuário ganha 20 pontos
* Após o ultimo super-herói, apresentar uma interface com a pontuação total, e o percentual de acerto
* Ter uma constante para definir quantos cards serão apresentados
* Os personagens não devem se repetir

### Requisitos técnicos

* Deve ser implementado em React
* Deve estar disponível em repositório no Github
* Deve ter documentação básica explicando como clonar e rodar o projeto localmente, em inglês
* Publicar no github pages, heroku, firebase host, netilify ou qualquer outro lugar, pra gente jogar online

### Avaliação do projeto

Iremos avaliar inicialmente se o jogo funciona perfeitamente, se vai do começo ao fim e se permite a interação adequada. Daremos até **100 pontos** pelo projeto até aqui.

### Ganhando pontos extras

Criamos duas features maiores onde você pode ganhar pontos, além de alguns requisitos técnicos extras também.

#### Contagem regressiva

**Pontos extras: 60**

* Ter uma constante para definir tempo máximo do game
* Ao apresentar o primeiro personagem, iniciar a contagem do tempo
* O game termina no tempo definido, ou se o jogar terminas os super-heróis
* Ao termina antes do tempo concluir, o tempo restante é convertido em pontos

#### Leaderboard

**Pontos extras: 100**

* Ao final do game perguntar o nome do usuário
* Salvar nome, pontuação, quantidades de acertos, percentual do jogador e tempo (se tiver contagem regressiva) no leaderboard
* Node ou firebase (realtime database)

#### Bibliotecas

* React Router - **Pontos extras: 20**
* StyledComponents - **Pontos extras: 20**
* Utilizar o React com Next.JS - **Pontos extras: 30**
* Redux - **Pontos extras: 30**
* TypeScript - **Pontos extras: 40**
