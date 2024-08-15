<script setup lang="ts">
/*
drop table if exists projects;
drop type if exists current_status;

create type current_status as enum('in-progress', 'completed');

create table projects(
  id bigint primary key generated always as identity not null,
  created_at timestamptz default now() not null,
  name text not null,
  slug text unique not null,
  status current_status default 'in-progress',
  collaborators text array default array[]::varchar[] not null
);

insert into projects (name, slug) values ('project one', 'project-one');
*/
</script>

<template>
  <div>
    <h1>Projects Page</h1>
    <RouterLink to="/">Go to home</RouterLink>
    <RouterLink :to="{ name: '/projects/[id]', params: { id: 1 } }">Go to project 1</RouterLink>
  </div>
</template>
