import { createClient } from '@supabase/supabase-js'
import type { Database } from '../../database/types'

// VITE_ tells Vite to bump the variable to the frontend
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY

if (!supabaseKey) {
  throw 'No supabase key santi'
}
if (!supabaseUrl) {
  throw 'No supabase url santi'
}

// Create a single supabase client for interacting with your database
export const supabase = createClient<Database>(supabaseUrl, supabaseKey)

// supabase
// db 8-Bi3P3PRm9kyzm
// api eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFpd25hd3p4bm9wd3djemJtZnplIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjM3NTYyMDksImV4cCI6MjAzOTMzMjIwOX0.ajAky4B0RyG-ltJOvQJEdOqI1UwALHvt23wC7fvyERc
// url https://aiwnawzxnopwwczbmfze.supabase.co

// needed to run this at first (these are in npm scripts):
// supabase init
// supabase login
// supabase link --project-ref aiwnawzxnopwwczbmfze

// supabase migration new projects-schema
