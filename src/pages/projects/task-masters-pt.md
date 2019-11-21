---
templateKey: project-page
baseUrl: projetos
featured: false
type: sideproject
date: 2019-11-20T14:23:25.374Z
language: pt
title: Task Masters
technology:
  - 2e611b48-37da-4527-bf70-fe66ad71bc41
  - fbecf863-4cf1-44e0-9a27-df32f01d33d6
  - d93e87bf-4d65-4107-9d29-3e1ac6f8dad9
  - 5c7e8c15-9336-40a3-ad99-33d0fa050309
summary: >-
  Um sistema integrado ao GitLab e Hubstaff para acompanhar o ritmo de trabalho
  de todos os membros da equipe
clientName: App Masters
clientLocation: Juiz de Fora/MG  - Brasil
devTime: 387
devMonths: 2
devCommits: 253
image: /img/projetos_whatsapp.png
thumbnailImage: /img/whatsapp-mock2.png
tags:
  - Gerencia de Projeto
  - Gestao do tempo
---
Acompanhar o ritmo de trabalho de desenvolvedores pode ser uma tarefa difícil e costuma ser a diferença entre ter um projeto entregue no prazo ou não. Enfrentando esta dificuldade algumas vezes, decidimos por implementar uma solução nossa para este problema.

Toda tarefa a ser realizada na App Masters é registrada no GitLab como uma issue no projeto em questão. Uma vez designada a um dos programadores, ele está apto a trabalhar no desenvolvimento.

Utilizamos o Hubstaff como ferramenta de mensuração de tempo alocado em tarefas, desta forma o desenvolvedor "dá play" ao iniciar uma tarefa, podendo "pausar" quando necessário. Desta forma temos o tempo exato consumido por cada tarefa.

O Task Masters então obtem as informações da issue do GitLab, e do tempo alocado do Hubstaff e faz algumas análises para "enxergarmos" melhor o andamento do projeto.

## Recursos úteis

A ferramenta foi feita para atender nossas necessidades, então tem alguns recursos bem únicos, bem dentro do que precisávamos.

As **Alocações atuais** dizem em qual tarefa cada desenvolvedor está trabalhando neste exato momento, se é um projeto prioritário e se está dentro do tempo estimado. 

Já em **Alocações semanais** acompanhamos o tempo alocado de cada desenvolvedor durante a semana, desta forma mesmo que em um dia não tenha sido possível alocar o tempo ideal, em outro o dev se ajusta para se manter dentro da meta. Os que alcançam a meta semanal ganham um hamburger (onde preferirem) na sexta-feira.

O sistema envia **notificações** aos desenvolvedores quando o tempo limite da tarefa se aproxima, bem como ao gerente de projeto quando o tempo estimado é ultrapassado, afim de que haja uma conversa para entender o que foi feito, o que falta, quais as dificuldades, e validar as próximas ações.

Em **Projetos** temos informações do contrato como horas contratadas e data final, e temos a visão do tanto de tempo já consumido por cada projeto, afim de concluirmos sempre dentro do prazo e volume de horas.

## Tecnologia

Utilizamos React para o frontend servido pelo Firebase, Node e MongoDb no backend servidos pelo Heroku.
