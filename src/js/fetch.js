import { createClient } from '@supabase/supabase-js'
require('dotenv').config()
console.log(process.env.SUPABASE_KEY)

const supabaseUrl = 'https://mviverpljyubyhqonihm.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

const { data, error } = await supabase

  .from('posts')

  .select()
  console.log(data)