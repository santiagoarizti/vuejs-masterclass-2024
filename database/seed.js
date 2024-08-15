/* eslint-env node */

import { fakerEN_US as faker } from '@faker-js/faker'
import { createClient } from '@supabase/supabase-js'

// VITE_ tells Vite to bump the variable to the frontend
const supabaseUrl = process.env.VITE_SUPABASE_URL
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!supabaseKey) {
  throw 'No supabase key santi'
}
if (!supabaseUrl) {
  throw 'No supabase url santi'
}

// Create a single supabase client for interacting with your database
const supabase = createClient(supabaseUrl, supabaseKey)

const logErrorAndExit = (tableName, error) => {
  console.error(
    `An error occurred in table '${tableName}' with code ${error.code}: ${error.message}`
  )
  process.exit(1)
}

const logStep = (stepMessage) => {
  console.log(stepMessage)
}

const seedProjects = async (numEntries) => {
  const projects = []
  for (let i = 0; i < numEntries; i++) {
    const name = faker.word.adjective() + ' ' + faker.word.noun()
    projects.push({
      name,
      slug: faker.helpers.slugify(name),
      status: faker.helpers.arrayElement(['in-progress', 'completed']),
      collaborators: faker.helpers.arrayElements([1, 2, 3])
    })
  }

  const { data, error } = await supabase.from('projects').insert(projects)

  if (error) return logErrorAndExit('projects', error)

  logStep('"projects" seeded successfully.')

  return data
}

const seedDatabase = async (numEntriesPerTable) => {
  await seedProjects(numEntriesPerTable)
}

const numEntriesPerTable = 10

seedDatabase(numEntriesPerTable)
