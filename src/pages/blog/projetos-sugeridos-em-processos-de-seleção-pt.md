---
templateKey: blog-post
title: Projetos sugeridos em processos de seleção
language: pt
baseUrl: blog
date: 2019-10-01T13:49:51.286Z
author: Tiago Gouvea
description: >-
  Este post tem por objetivo servir de arquivo de alguns posts do nosso antigo
  site, e referência para interessados em saber que tipo de projetos gostávamos
  de pedir em nossos processos de seleção.
featuredPost: false
published: true
featuredImage: /img/blog_projetos_processo_selecao.png
tags:
  - Selecao
  - React
  - React Native
  - Estágio
  - Juiz de Fora
  - App Masters
  - Vagas
---
Este post tem por objetivo servir de arquivo de alguns posts do nosso antigo site, e referência para interessados em saber que tipo de projetos gostávamos de pedir em nossos processos de seleção.


## Teste de algoritmo básico com HackerRank

Você fará duas etapas de testes usando o HackerRank, que é uma plataforma para testes de programação online bem legal. Para começar a primeira etapa:

Crie sua conta no HackerRank e responda nosso email de boas vindas com o link para seu perfil;

Acesse o Contest [App Masters Basics](https://www.hackerrank.com/app-masters-basics) e realize os quatro desafios (imaginamos que tudo deve levar menos de 30 minutos), comece pelo “Solve Me First” para entender como funciona a ferramenta;

Ao concluir os 4 desafios nos avise pelo email de boas vindas.

**Algumas dicas rápidas:**

* Ao criar sua conta, editando seu perfil, você pode selecionar o português como língua, e talvez algumas coisas fiquem em português;
* Use um tradutor online para traduzir os problemas se precisar;
* Para cada desafio você pode selecionar sua linguagem de programação preferida;
* Selecionando JavaScript, será “JavaScript (Node)”, mas não se assuste com isso;
* Os desafios já vêm com uma parte do código pronta, deixando você livre para implementar somente a parte da solução mesmo;
* Se tiver alguma duvida sobre o HackerRank ou o processo de seleção, fale conosco por whatsapp.
* Prazo para concluir esta primeira etapa: 3 dias corridos



## Teste de JavaScript

Este teste também acontecerá pelo HackerRank, no contest [App Masters ES6](https://www.hackerrank.com/app-masters-es6), mas deve ser realizado após concluir os desafios básicos acima.

Para os desafios desta segunda etapa você só poderá usar ES6 JavaScript, e não esperamos que você já saiba isso. Se já souber, será ótimo. Nossa dica é que busque no google como fazer cada uma das partes que não souber ainda. Queremos ver sua capacidade de buscar mesmo a solução, aprender como usar e resolver o problema.

**Algumas dicas extras:**

* Os desafios desta etapa são ligados ao um único problema, um processo de seleção;
* Nesta etapa você precisará executar várias vezes o código para alcançar o resultado desejado;
* Copie o código padrão para seu ambiente local ou use um editor online para ir implementando e testando;
* Recomendamos fortemente em caso de duvidas, que pergunte no DevJF, canal #app_masters, estaremos por lá para ajudar;
* No ambiente do HackerRank, se você passar algo para console.error(suaVariavel) ela será apresentada abaixo no resultado do teste, caso precise conferir o valor de alguma variável;
* O quarto desafio “Erros e promessas” é opcional, faça se quiser, mas saiba que ao faze-lo estará certamente entre os primeiros do processo de seleção.
* Concluindo esta etapa e ficando entre os sete primeiros colocados, você ganhará uma super caneca. Nas demais posições ganhará dois adesivos.

## Tudo sobre star wars

É uma aplicação web, web app ou mobile nativo, que deve ser desenvolvido usando React ou React Native. Em caso de duvida sinta-se a vontade para enviar perguntas no canal #react no slack DevJF. A aplicação deve permitir ao usuário conhecer mais sobre o Star Wars, seus filmes, personagens, planetas e tudo mais! A base de informações deve ser a [SWAPI](http://swapi.co/) que fornece todo dado necessário.

Imaginamos o projeto em cinco partes, crescentes, que lhe dará uma boa noção do React e dos estados. Você pode fazer apenas as três primeiras partes, ou encarar a quarta e quinta também (as mais difíceis). Concluindo as três primeiras você pode dar um build e nos enviar, bem como enviar um link para o código no seu repositório.

Você pode optar por realizar as chamadas da API usando axios ou fetch, ou então usar a biblioteca [SWAPI-Wrapper](https://github.com/cfjedimaster/SWAPI-Wrapper).

Seguem os requisitos:

1. Listar “people” na primeira interface, exibindo apenas um ou dois dados de cada personagem. Fique atento com paginação, pois, ao chamar /people/ ele trará só os primeiros registros;
2. Permitir realizar uma busca. Para isso adicione um campo acima da lista de personagens. O usuário poderá digitar sua busca e então ver os resultados filtrados abaixo (na mesma interface de lista);
3. Incluir filtro na busca. Oferecer um ou dois campos de filtros, tal como “gender” ou “height”. Realizando a busca ou filtrando, os registros são exibidos para o usuário (na mesma interface de lista);
4. Clicando em um dos personagens, abrir uma interface de detalhes daquele item, apresentando mais campos;
5. Nos detalhes do personagem, permitir clicar em um dos dados para visualizar seus detalhes também. Exemplo; ao clicar em um dos filmes abrirá uma interface apresentando os detalhes daquele filme. Não é preciso navegar em todos os dados, escolha apenas um ou dois dados que achar interessante montar a visualização.

**Impactando ainda mais:**

1. Sendo um web app, lembre o usuário de adicionar o atalho no celular, quando ainda não tiver;
2. Adicionar uma notificação quando o usuário abrir a aplicação pela primeira vez, dando boas vindas. Apenas na primeira vez;
3. Dizer no repositório o que você usou de componente e tecnologia no projeto, e porque usou;
4. Publicar o código em repositório público, com documentação em inglês.

## Projeto Laravel simples

Precisamos de estudantes que tenham interesse em aprender programação, sempre. Por isso nosso processo começa com um projeto simples a ser desenvolvido usando Laravel e bootstrap. Em caso de duvida sinta-se a vontade para enviar perguntas no canal #php no slack DevJF. Seguem os requisitos:

1. Criar banco de dados com tabela “users”, inclua ao menos um registro manualmente;
2. Ao acessar a url principal do sistema, caso não esteja autenticado redirecionar para rota de login, caso já logado, redirecionar para rota de dashboard;
3. Rota de login /login/ deve exibir campo de email e senha. Permitir ao usuário realizar o login, avisando caso o usuário não seja encontrado, ou se a senha não corresponder;
4. Na rota de dashboard exibir os dados do usuário logado;
5. Fornecer rota /api/users/{id} que ao chamar retorna os dados do usuário em JSON, para ser consumido por outro sistema;
6. Fornecer rota /api/users/add/ que recebe um post e inclui um novo usuário;
7. Permitir o usuário logado, pela interface, listar e incluir novos usuários (usando ajax ou não).

**Impactando ainda mais:**

1. Dizer no repositório o que você usou de componente e tecnologia no projeto, e porque usou;
2. Publicar o código em repositório público, com documentação em inglês;
3. Publicar o projeto em produção usando o heroku
4. Envie o projeto e aguarde o retorno da App Masters. Caso seu projeto seja aprovado, siga para a segunda parte.

## Projeto Laravel, segunda parte

A ideia é prover dados dos filmes da série Start Wars.

https://swapi.co/documentation#people

1. Criar a tabela “people” com os campos iguais da SWAPI, ignore os campos que são array;
2. Adicionar um menu no dashboard para acessar os personagens, ao clicar no menu exibir a lista de personagens e o botão incluir;
3. Ao incluir apresentar o formulário para inclusão do registro;
4. Pela lista também deve ser possível editar e excluir cada um dos registros;
5. Fornecer rota /api/people/ que retorna a lista de personagens;
6. Fornecer rota /api/people/{id} que retorna os dados apenas do personagem escolhido;

**Impactando ainda mais:**

1. Utilize a biblioteca [swapi-php](https://github.com/rmasters/swapi-php) para importar todos os personagens da SWAPI para seu banco de dados.
2. Permita que a rota de people aceite o parametro order (exemplo /api/people/?order=height), onde order será o nome de uma coluna pelo qual o dado deverá ser ordenado no retorno;
3. Permita que a rota de people aceite o parametro q (exemplo /api/people/?q=luke), onde serão retornados apenas registros que tenham “luke” em um dos campos de texto.

## Seu Spotify

É um web app que deve ser desenvolvido usando React e que permite ao usuário pesquisar por artistas no Spotify, ver seus discos e as músicas de cada álbum. Mas não será o Spotify… dê o nome que você quiser, porque o app é seu! Se fosse meu seria Tiagofy!

Imaginamos o projeto em três partes, crescentes, que lhe dará uma boa noção do React e de web components. A cada parte concluída você pode colocar online em algum lugar e nos enviar o link para usarmos, bem como enviar a URL do repositório de códigos. Para cada etapa sua, daremos algum feedback, pra você se manter motivado.

Toda informação sobre a API e você encontra no site para [desenvolvedores do Spotify](https://developer.spotify.com/), e recomendamos usar a biblioteca [spotify-web-api-js](https://github.com/jmperez/spotify-web-api-js) para a interação com a API.

1. Obter logo na primeira página todos os álbuns do artista “John Williams”. Para cada álbum exibir o título, capa e algo mais que você achar relevante;
2. Ao clicar em um álbum exibir as músicas deste álbum e outras informações que quiser;
3. Permitir uma busca para localizar artistas. Deverá ser incluído um input na pagina inicial onde o usuário irá digitar algo e clicar em “buscar”, momento esse que serão listados os artistas encontrados. 
4. Clicando em um deles abrirá a lista de discos do artista, tal como no item 1.

* A autenticação pode ser um problema. Tente ir pelo caminho mais curto, talvez sem permitir ao usuário autenticar. Use o token da sua conta, obtido da maneira mais rápida que conseguir.
* Não preocupe em fazer uma interface bonita, não é o que validaremos. Queremos ver é funcionando.
* Se quiser enviar perguntas use o canal #react no slack DevJf.

## Criar projeto usando Firebase realtime database

Criar interface simples que permita incluir objetos em uma lista (ao menos 3 dados por objeto). Permitir excluir cada um dos itens.

**Pontos extras:**

* Permitir editar cada um dos itens
* Fazer deploy do projeto pelo Firebase Cli
* Criar interface de autenticação usando o GitHub
* Criar um repositório para o código com readme bem escrito
* Documentar em inglês

## Obter previsão do tempo com React Native

Criar um app pra Android ou iOS que a partir da localização do usuário (ou informando o CEP) obtém a previsão do tempo para hoje e talvez os próximos dias, e exibe em interface bem amigável.

**Pontos extras:**
* Criar um repositório para o código com readme bem escrito
Documentar em inglês

## Criar um component React e gerar um pacote NPM para instalação

O componente deve receber atributos e lidar com ao menos um estado. Exemplo:

```javascript
<MeuCompenente ativo={true} valorInicial={1}/>
```

Dai, ter um estado para “valor” que neste caso começaria de um, e iria incrementando.

Para o projeto de seleção, criar o componente, publicar um pacote npm que permita qualquer um instalar seu componente e usa-lo.

Se precisar de ajuda pra criar o projeto base do react, uma opção pode ser usar o create-react-create-app.

**Pontos extras:**

* Adicionar uma chamada ajax no componente
* Criar um repositório para o código com readme bem escrito
* Documentar em inglês

## Obter a localização do usuário e exibir na interface detalhes sobre isso

Utilizando javascript obter a localização do visitante, e exibir na interface o endereço completo de onde ele estiver.

Em JF, dependendo da conexão, a localização pode “cair” em BH, mas, ignore isso.. apenas use os dados e apresente.

**Pontos extras:**

* Exibir o mapa com um pin no exato local
* Calcular a distância deste ponto até a App Masters (-21.7725621,-43.3469667)
* Criar um repositório para o código com readme bem escrito
* Documentar em inglês

## Criar uma interface usando Material Design Lite

Utilize o Material Design Lite para criar uma interface bacana para um web/app mobile fictício, utilizando ao menos os componentes Navigation Layout, Cards, Menus.

Abrir um dialog do Material Design Lite com um formulário contendo três inputs; nome, email e telefone. Validar (bem) o preenchimento dos três campos.

**Pontos extras:**

* Adicionar os inputs de endereço começando pelo CEP, que ao sair dele, valida, e então obtém o endereço e preenche os demais.. usar o componente Loading
* Criar um repositório para o código com readme bem escrito
* Documentar em inglês
