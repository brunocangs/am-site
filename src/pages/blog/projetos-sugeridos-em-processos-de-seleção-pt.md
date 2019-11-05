---
templateKey: blog-post
title: Projetos sugeridos em processos de seleção
language: pt
baseUrl: blog
date: 2019-10-01T13:49:51.286Z
author: Tiago Gouvea
description: Fizemos um post com vários projetos sugeridos em processos de seleção passados
featuredPost: false
featuredImage: /img/img_3235.jpg
tags:
  - Selecao
  - React
  - React Native
  - Estágio
  - Juiz de Fora
  - App Masters
  - Vagas
---

# 

https://www.hackerrank.com/app-masters-basics
https://www.hackerrank.com/app-masters-es6








## Tudo sobre star wars
É uma aplicação web, web app ou mobile nativo, que deve ser desenvolvido usando React ou React Native. Em caso de duvida sinta-se a vontade para enviar perguntas no canal #react no slack DevJF. A aplicação deve permitir ao usuário conhecer mais sobre o Star Wars, seus filmes, personagens, planetas e tudo mais! A base de informações deve ser a SWAPI que fornece todo dado necessário.

http://swapi.co/
https://github.com/cfjedimaster/SWAPI-Wrapper

Imaginamos o projeto em cinco partes, crescentes, que lhe dará uma boa noção do React e dos estados. Você pode fazer apenas as três primeiras partes, ou encarar a quarta e quinta também (as mais difíceis). Concluindo as três primeiras você pode dar um build e nos enviar, bem como enviar um link para o código no seu repositório.

Você pode optar por realizar as chamadas da API usando axios ou fetch, ou então usar a biblioteca SWAPI-Wrapper.

Seguem os requisitos:

Listar “people” na primeira interface, exibindo apenas um ou dois dados de cada personagem. Fique atento com paginação, pois, ao chamar /people/ ele trará só os primeiros registros;
Permitir realizar uma busca. Para isso adicione um campo acima da lista de personagens. O usuário poderá digitar sua busca e então ver os resultados filtrados abaixo (na mesma interface de lista);
Incluir filtro na busca. Oferecer um ou dois campos de filtros, tal como “gender” ou “height”. Realizando a busca ou filtrando, os registros são exibidos para o usuário (na mesma interface de lista);
Clicando em um dos personagens, abrir uma interface de detalhes daquele item, apresentando mais campos;
Nos detalhes do personagem, permitir clicar em um dos dados para visualizar seus detalhes também. Exemplo; ao clicar em um dos filmes abrirá uma interface apresentando os detalhes daquele filme. Não é preciso navegar em todos os dados, escolha apenas um ou dois dados que achar interessante montar a visualização.
Impactando ainda mais:

Sendo um web app, lembre o usuário de adicionar o atalho no celular, quando ainda não tiver;
Adicionar uma notificação quando o usuário abrir a aplicação pela primeira vez, dando boas vindas. Apenas na primeira vez;
Dizer no repositório o que você usou de componente e tecnologia no projeto, e porque usou;
Publicar o código em repositório público, com documentação em inglês.

# Projeto Laravel simples

Projeto Laravel simples
Precisamos de estudantes que tenham interesse em aprender programação, sempre. Por isso nosso processo começa com um projeto simples a ser desenvolvido usando Laravel e bootstrap. Em caso de duvida sinta-se a vontade para enviar perguntas no canal #php no slack DevJF. Seguem os requisitos:

Criar banco de dados com tabela “users”, inclua ao menos um registro manualmente;
Ao acessar a url principal do sistema, caso não esteja autenticado redirecionar para rota de login, caso já logado, redirecionar para rota de dashboard;
Rota de login /login/ deve exibir campo de email e senha. Permitir ao usuário realizar o login, avisando caso o usuário não seja encontrado, ou se a senha não corresponder;
Na rota de dashboard exibir os dados do usuário logado;
Fornecer rota /api/users/{id} que ao chamar retorna os dados do usuário em JSON, para ser consumido por outro sistema;
Fornecer rota /api/users/add/ que recebe um post e inclui um novo usuário;
Permitir o usuário logado, pela interface, listar e incluir novos usuários (usando ajax ou não).
Impactando ainda mais:

Dizer no repositório o que você usou de componente e tecnologia no projeto, e porque usou;
Publicar o código em repositório público, com documentação em inglês;
Publicar o projeto em produção usando o heroku
Envie o projeto e aguarde o retorno da App Masters. Caso seu projeto seja aprovado, siga para a segunda parte.

Projeto Laravel, segunda parte

Caso seja solicitado, dê continuidade ao projeto incluindo novos recursos. A ideia é prover dados dos filmes da série Start Wars.

https://swapi.co/documentation#people

Criar a tabela “people” com os campos iguais da SWAPI, ignore os campos que são array;
Adicionar um menu no dashboard para acessar os personagens, ao clicar no menu exibir a lista de personagens e o botão incluir;
Ao incluir apresentar o formulário para inclusão do registro;
Pela lista também deve ser possível editar e excluir cada um dos registros;
Fornecer rota /api/people/ que retorna a lista de personagens;
Fornecer rota /api/people/{id} que retorna os dados apenas do personagem escolhido;
Impactando ainda mais:

Utilize a biblioteca swapi-php para importar todos os personagens da SWAPI para seu banco de dados.
Permita que a rota de people aceite o parametro order (exemplo /api/people/?order=height), onde order será o nome de uma coluna pelo qual o dado deverá ser ordenado no retorno;
Permita que a rota de people aceite o parametro q (exemplo /api/people/?q=luke), onde serão retornados apenas registros que tenham “luke” em um dos campos de texto.
Envie o projeto e aguarde o retorno da App Masters.

https://github.com/rmasters/swapi-php









Projeto para Junho de 2017
Para junho de 2017 sugerimos que você desenvolva o projeto “Seu Spotify“. Assim que começar nos avise pelo WhatsApp (32)98873-5683 para sabermos que está se empenhando, e para organizarmos nossa agenda aqui, e vá nos avisando de cada etapa concluída também.

Seu Spotify
É um web app que deve ser desenvolvido usando React e que permite ao usuário pesquisar por artistas no Spotify, ver seus discos e as músicas de cada álbum. Mas não será o Spotify… dê o nome que você quiser, porque o app é seu! Se fosse meu seria Tiagofy!

Imaginamos o projeto em três partes, crescentes, que lhe dará uma boa noção do React e de web components. A cada parte concluída você pode colocar online em algum lugar e nos enviar o link para usarmos, bem como enviar a URL do repositório de códigos. Para cada etapa sua, daremos algum feedback, pra você se manter motivado.

Toda informação sobre a API e você encontra no site para desenvolvedores do Spotify, e recomendamos usar a biblioteca spotify-web-api-js para a interação com a API.

https://developer.spotify.com/
https://github.com/jmperez/spotify-web-api-js

1 – Obter logo na primeira página todos os álbuns do artista “John Williams”. Para cada álbum exibir o título, capa e algo mais que você achar relevante;

2 – Ao clicar em um álbum exibir as músicas deste álbum e outras informações que quiser;

3 – Permitir uma busca para localizar artistas. Deverá ser incluído um input na pagina inicial onde o usuário irá digitar algo e clicar em “buscar”, momento esse que serão listados os artistas encontrados. Clicando em um deles abrirá a lista de discos do artista, tal como no item 1.

* A autenticação pode ser um problema. Tente ir pelo caminho mais curto, talvez sem permitir ao usuário autenticar. Use o token da sua conta, obtido da maneira mais rápida que conseguir.
* Não preocupe em fazer uma interface bonita, não é o que validaremos. Queremos ver é funcionando.
* Se quiser enviar perguntas use o canal #react no slack DevJf.





Criar projeto usando Firebase realtime database – 95 pontos
Criar interface simples que permita incluir objetos em uma lista (ao menos 3 dados por objeto). Permitir excluir cada um dos itens.

Pontos extras:

Permitir editar cada um dos itens
Fazer deploy do projeto pelo Firebase Cli
Criar interface de autenticação usando o GitHub
Criar um repositório para o código com readme bem escrito
Documentar em inglês
Obter previsão do tempo com React Native – 95 pontos
Criar um app pra Android ou iOS que a partir da localização do usuário (ou informando o CEP) obtém a previsão do tempo para hoje e talvez os próximos dias, e exibe em interface bem amigável.

Pontos extras:

Criar um repositório para o código com readme bem escrito
Documentar em inglês
Criar um component React e gerar um pacote NPM para instalação – 90 pontos
O componente deve receber atributos e lidar com ao menos um estado. Exemplo:

<MeuCompenente ativo={true} valorInicial={1}/>

Dai, ter um estado para “valor” que neste caso começaria de um, e iria incrementando.

Para o projeto de seleção, criar o componente, publicar um pacote npm que permita qualquer um instalar seu componente e usa-lo.

Se precisar de ajuda pra criar o projeto base do react, uma opção pode ser usar o create-react-create-app.

Pontos extras:

Adicionar uma chamada ajax no componente
Criar um repositório para o código com readme bem escrito
Documentar em inglês
Criar projeto novo com React e exibir um componente repetidas vezes – 90 pontos
Crie um array de objetos ou valores, em um arquivo .js separado só pra isso, e permita que sua interface liste os itens do array em uma interface minimamente agradável.

Se precisar de ajuda pra criar o projeto base do react, uma opção pode ser usar o create-react-create-app.

Pontos extras:

Pontos extras – Usar Material-UI ou Materialize
Criar um repositório para o código com readme bem escrito
Documentar em inglês
Obter a localização do usuário e exibir na interface detalhes sobre isso – 80 pontos
Utilizando javascript obter a localização do visitante, e exibir na interface o endereço completo de onde ele estiver.

Em JF, dependendo da conexão, a localização pode “cair” em BH, mas, ignore isso.. apenas use os dados e apresente.

Pontos extras:

Exibir o mapa com um pin no exato local
Calcular a distância deste ponto até a App Machine (-21.7725621,-43.3469667)
Criar um repositório para o código com readme bem escrito
Documentar em inglês
Criar API com Node.js – 70 pontos
Listar alguns nomes (cerca de 30) e através de uma única chamada REST retornar se o nome é “Masculino”, “Feminino” ou desconhecido para quando não estiver na lista de 30 nomes.

Pontos extras:

Retornar sempre, quantas vezes aquele nome já foi pesquisado
Exigir um token específico no header da requisição
Criar um repositório para o código com readme bem escrito
Documentar em inglês
Criar uma interface usando Material Design Lite – 60 pontos
Utilize o Material Design Lite para criar uma interface bacana para um web/app mobile fictício, utilizando ao menos os componentes Navigation Layout, Cards, Menus.

Abrir um dialog do Material Design Lite com um formulário contendo três inputs; nome, email e telefone. Validar (bem) o preenchimento dos três campos.

Pontos extras:

Adicionar os inputs de endereço começando pelo CEP, que ao sair dele, valida, e então obtém o endereço e preenche os demais.. usar o componente Loading
Criar um repositório para o código com readme bem escrito
Documentar em inglês
Criar um app com lowcode tools – 40 pontos
Criar um app de um relógio pomodoro usando uma destas ferramentas; Thunkable, buuble, WebFlow (será um web app neste caso), AppsGeyser.
