---
templateKey: project-page
baseUrl: projects
featured: false
type: sideproject
date: 2020-01-08T12:08:31.831Z
whereToFind: []
language: en
title: Task Masters
technology:
  - c925ab8b-afca-4c33-b63a-e9c513eccdd3
  - 7f100892-1f9f-4266-b024-59ca1ad0873e
  - 92fbd0e2-662d-4032-8d8e-06123b77b119
  - 4fa7939c-30e5-43a5-8e56-fa64c47fbbc3
summary: >-
  A system with GitLab and Hubstaff integrations to track the work of all of the
  company's team members
clientName: App Masters
clientLocation: Brazil
devTime: 387
devMonths: 2
devCommits: 253
image: /img/projeto_maior_taskmasters.png
thumbnailImage: /img/projetos_task_masters.png
tags:
  - Project Management
  - Time Tracking
  - React
  - Firebase
  - MongoDB
---
Keeping up with a developer’s work pace can be a tough task and it’s often the difference between having a project delivered according to schedule or not. Having faced this difficulty a few times, we decided to implement our own solution to this problem.

Every task to be performed at App Masters is registered in GitLab as an issue in it's appropriate Project. Once it's assigned to one of the programmers, he is able to work on its development.

We use Hubstaff as a tool for measuring the time allocated for tasks. Thus, the developer starts tracking their time when starting a task and can pause when necessary. That way we have the exact time consumed by each task.

Task Masters then gathers information from the GitLab issue, and Hubstaff’s allocated time, processes it and gives us better look at the project’s progress.

## Useful Resources

The tool is designed for us, so it has some very unique features designed to meet our own needs.

**Current Allocations** tells you what task each developer is working on at that moment, if it’s a priority project, and if it is on schedule.

In **Weekly Allocations** we track the time allocated by each developer during the week. Even if there’s a day that they weren't able to allocate the ideal time, the developer can adjust to stay within the goal. Those who reach the weekly goal get a free hamburger from a place they prefer on Friday.

The system sends notifications to developers when the task deadline is approaching, as well as to the project manager when the estimated time is exceeded. As a result, there is a conversation to understand what has been done, what is missing, what the difficulties are and to validate the next action.

In regard to projects we have contract information on, such as: contracted hours and an end date, we have a vision of how much time is already consumed by each project. Thus allowing us to always complete the project on time and within the volume of hours.

## Technology

We use React for the front end served by Firebase, Node and MongoDb on the back end served by Heroku.
