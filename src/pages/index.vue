<script setup lang="ts">
import { supabase } from '@/lib/supabaseClient'
import { ref } from 'vue'

const projects = ref<any[] | null>(null)

;(async () => {
  const { data, error } = await supabase.from('projects').select()

  if (error) console.log(error)

  projects.value = data
})()
</script>

<template>
  <div>
    <h1>Home Page</h1>
    <RouterLink to="/projects">Go to projects</RouterLink>
    <ul>
      <li v-for="project in projects" :key="project.id">
        {{ project }}
      </li>
    </ul>
  </div>
</template>
