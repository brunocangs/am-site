---
templateKey: blog-post
title: Tecnologias que utilizamos
language: pt
baseUrl: blog
date: 2019-11-06T13:27:20.813Z
author: Tiago Gouvea
description: >-
  Ao longo de dois anos e meio conseguimos trabalhar com uma boa variedade de
  tecnologias. Com algumas tivemos mais sucesso, com outras menos. Por isso
  escrevemos estes post para falar um pouco sobre nossa experiência com algumas
  destas tecnologias.
featuredPost: true
published: true
featuredImage: /img/img_3244.jpg
tags:
  - tecnologias
  - projetos
  - stack
  - JavaScript
  - React
  - React Native
---
Começamos a App Masters em 1º de abril de 2017 (é verdade) e logo quando tínhamos a primeira equipe já selecionada, fizemos uma reunião para decidir quais tecnologias usaríamos.

Eu já tinha trabalhado com alguns stacks bem distintos ao longo dos anos, mas estava aberto para algo novo, e queria que todos pudessem efetivamente escolher com o que trabalhar.

Naquele momento decidimos usar React com Node e MongoDB. Nossa stack de desenvolvimento então ficou totalmente orientada ao JavaScript moderno.

Gostaria então de falar um pouco sobre algumas das tecnologias que usamos desde então.

### MongoDB

Inicialmente o Mongo trás algumas facilidades pra quem está acostumado com o modelo SQL de fazer as coisas, como por exemplo permitir adicionar um atributo em objetos (registros) sem precisar rodar uma migration, ou "alterar o banco". Basta incluir os novos atributos no arquivo de declaração do schema e pronto. 

O que sempre ouvimos falar do Mongo é "alta performance", porém, no mundo real não foi tão incrível quanto esperávamos. Na verdade algumas queries nem tão complexas estouravam o timeout do node.

Pra quem vem do mundo SQL, fazer uma query com join, group, order, having, somando alguns campos é algo relativamente simples. São três ou quatro linhas de código e em uma base de dados pequena o resultado vem em alguns milisegundos. Já no Mongo essa mesma query poderia facilmente ter mais de 30 linhas, com várias etapas agrupando (group) e desagrupando (unwind), talvez com um reducer ou project pra montar o resultado final, e o tempo para obtenção do resultado final era sempre muito longo.

Confesso que talvez não tenhamos nos dedicado o suficiente pra aprender mais sobre a indexação do Mongo, fine tunning de servidor, estas coisas.

### \*SQL

Naquele começo eu achei que não voltaria usar SQL mais, que o SQL estava ultrapassado e noSQL seria o futuro. Mas depois de dois ou três projetos com o Mongo, optamos por fazer um com PostgreSQL para fazer um balanço. 

Não começamos nenhum novo projeto com Mongo depois disso.

### Next.JS

Em dois grandes projetos utilizamos o Next.JS e tem sido muito bom. 

Segundo o João Baraky, "O Next.JS tem sido muito usado porque permite você utilizar o React mantendo o foco em SEO, porque tudo é feito com server-side rendering, então os componentes se tornam HTML diretamente no servidor".

### Gatsby JS

Já tínhamos lido muitas vezes sobre o Gatsby e a curiosidade ficou grande. Estávamos já ha algum tempo querendo refazer nosso site e entre um projeto e outro a oportunidade surgiu. Não pensamos muito e fomos logo começando com Gatsby.

### Kubernetes

Implementamos um cluster utilizando Kubernetes em um projeto com grande potencial de escala mundial e foi bem interessante. 

Eu precisei me dedicar para estudar mais sobre containers, para aprender como o Kubernetes iria trazer grande vantagem para o projeto. E conhecer o Kubernetes foi realmente incrível; entender como serviços como o YouTube dão conta da demanda, expandindo e retraindo quando necessário, equilibrando a carga e tudo mais foi bom demais. 

A coisa é feita pra funcionar, e realmente funciona. A curva de aprendizado é puxada e o painel do Google Cloud Platform também não ajuda muito. Pelo shell você pode controlar 100% da operação. Com o deployment bem configurado e tudo online e funcionando você entende a dimensão do Kubernetes.

### Firebase

Eu já tinha alguma experiência com Firebase antes da App Masters, mas aqui só utilizamos ele como base de dados em um projeto. 

Utilizamos o firestore, que estava sendo liberado na época, e foi bem tranquilo. Adicionamos algumas cloud functions que respondiam com GraphQL e ficou bem organizado o projeto.

Em praticamente todos os outros projetos que fizemos, usamos o hosting do Firebase para hostear admins com React, por praticidade mesmo.

Eu quero ainda fazer outros projetos usando mais o Firebase como database, seja no realtime ou no firestore, porque vejo que é um caminho a seguir.

### Docker

Em um dos projetos que fizemos o docker se fez necessário, já que o processo de deploy automatizado dependia disso. 

Para o ambiente de desenvolvimento o docker ajudar a todos do time terem o mesmo cenário; distribuição linux necessária, pacotes de sistemas, servidores instalados e banco de dados.

Para o ambiente de produção o docker é uma mão na roda, porque com pouco esforço você sobre a estrutura necessária para o projeto funcionar da maneira como ele funciona na máquina de desenvolvimento, com as mesmas dependências e versões. Você sabe que "lá" ele vai rodar exatamente como roda "aqui", e isso facilita as coisas.

### DevOps

Acho que sempre quando eu pensar em DevOps, vou achar que fazemos pouco ainda. Alguns elementos do DevOps já fazem parte do nosso processo, mas precisamos adicionar muito mais, testar mais, automatizar mais, medir mais.

### React

Nós gostamos mesmo do React, não tem mais jeito. Atualmente a comunidade React tem sido muito ativa, com muitas bibliotecas e ferramentas novas surgindo todos os dias, porém, nada nos impede de no futuro aderirmos ao Flutter ou algo melhor que o React. 

Quando falamos em React, falamos em Redux, Saga, Styled Components, hooks e tantas outros conceitos que usamos no dia a dia.

Sobre o Styled Componentes, para o Matheus Assis "a vantagem de modificar o css com condições baseadas em propriedades que você dá para os componentes é um dos pontos mais fortes, aliado a simplicidade de criar componentes padrão do html já setando o css deles, tornando mais fácil manter sua própria lib de componentes visuais para o design."

O React nos dá produtividade, nos permite fazer um código limpo, fácil de implementar e compreender.

### React Native

O React Native, no passado da humanidade, já foi uma duvida. Hoje é uma certeza, por isso tem sido adotado cada vez mais. A demanda não para de crescer.

Qualquer pessoa que queira publicar um aplicativo com React Native terá que passar por alguns apertos. Sabemos disso. Não é fácil, mas na implementação nativa também não é.

Já desenvolvemos vários aplicativos com React Native, tanto para Android quando para iOS e continuamos aprendendo cada vez mais.

Uma experiência muito enriquecedora que já tivemos foi desenvolver assinatura em aplicativos, ou, in-app purchase. Basicamente permitir ao usuário comprar algum produto no aplicativo, ou assinar um serviço. Não é uma coisa simples, cada loja (Google Play/Apple Store) lida com o fluxo de uma forma um pouco diferente, e conseguir fazer um código único que atenda aos dois públicos exige um tanto de experimentação. É mais um conhecimento que hoje temos.

### Gateway de pagamento

Como o cliente ganha dinheiro com nossos produtos, sem fazer venda? Com isso já implementamos integrações com alguns gateways de pagamento.

Stripe é o melhor documentado, com muitos recursos, estável e fácil de lidar. A área administrativa do cliente também é bem completa e fácil de usar e entender.

PagSeguro é de longe o pior, com documentação abandonada, suporte ruim, API instável e com falhas, tudo bem amador.

MOIP (Wirecard) e Iugu são ok, com documentação adequada e API certinha, como tem que ser.

### Blockchain

Fizemos um pequeno projeto com blockchain, usando a rede Ethereum e implementando com JavaScript (web3). Naquele momento (meiados de 2018) a implementação ainda era bem rústica, as bibliotecas bem bugadas, mas no final tudo acabou funcionando.

Deu pra sentir que era algo em construção, muita discussão nas issues, pessoas propondo formas melhores de funcionar, buscando soluções para os problemas que iam surgindo.

### Forest Admin

Uma ferramenta que foi interessante conhecer em 2019 foi o Forest Admin. Ele basicamente é um admin que conecta na sua API, e deixa você configurar as interfaces todas sem programar.

Foi uma solicitação de um cliente usa-lo. Inicialmente fiquei meio desanimado, me sentindo "usuário" de construtor de admin, sem fazer código. Mas não durou muito o desânimo, porque depois de algumas horas entendendo como tudo funcionava, ele facilitou bem nossa vida no projeto.

Utilizamos com uma API Node/Sequelize/MySql, por onde o Forest obtem os schemas e fornece todos os dados para customização no admin.

### Node

O Node vem nos acompanhando desde o começo na empresa, e por agora não temos desejo de abandonar.

Já utilizamos acesso ao banco "na mão", com Sequelize e Mongoose, e em todos os casos obtivemos sucesso, claro.

O node é performático, leve e fácil de colocar pra funcionar online. 

No lado do código, é JavaScript, então te dá muita liberdade para fazer o que quiser... o que é bom, e ruim. Já usamos alguns padrões de código diferentes, tentando ser mais rigorosos e voltados pra orientação a objeto, e também sendo mais flexível usando mais funcional.

Hoje temos usado o TypeScript com a abordagem funcional, e tem sido muito bom.

### PHP + Lumen

Em um dos projetos, eu mesmo sugeri usarmos o PHP para fazer o Backend, já que eu seria o único na implementação desta parte. Sou certificado PHP, desenvolvi durante muitos anos com PHP, então não teria dificuldades com ele.

Optei por utilizar o Lumen (uma simplificação do Laravel) por ser mais rápido e um pouco menos burocrático.

O Lumen, bem como o PHP, são uma boa opção para quem é do mundo PHP, mas em função da nossa relação estreita com o stack JavaScript, optamos por não usar em futuros projetos.


### Jest

Muitos programadores resistem as metodologias que envolvam testes unitários... e eu entendo o porque, também nunca fui muito fã, no passado.

Em um grande projeto vimos que os testes ajudariam a manter tudo funcionando, mesmo depois de uma grande mudança. Facilitaria conferir cada pequena parte do sistema, testar se as grandes partes estão funcionando como esperado, e se tudo junto ainda se mantem integro. Eo resultado é que não queremos parar de usar testes nunca mais.

O jest tem sido uma biblioteca adequada pra isso, integrada ao nosso stack, fácil de lidar e usar.

### Postman

Quem desenvolve APIs precisa mesmo usar alguma ferramenta como o Postman, não tem como evoluir sem isso. Eu já usava antes da App Masters, e usamos em todos os projetos que envolveram API até então. 

O Postman permite criar coleções com as requisições, realizar testes em cada chamada para confirmar que o retorno é o esperado, além de permitir também exportar as coleções e executar os mesmos testes em linhas de comando. É uma ferramenta realmente essencial.

### Storybook

Projetos React podem facilmente chegar a ter dezenas ou até centenas de componentes. Ter ciência de cada componente, poder realmente vê-lo em funcionamento sem precisar usar o sistema (ir até aquela tela lá no final do wizard pra ver o tal popup modal) e ainda servir como documentação, isso é basicamente o que o storybook faz.
