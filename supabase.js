import { createClient } from '@supabase/supabase-js';

const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY
const supabaseURL = "https://tblguoqlsbwkrwsbpqam.supabase.co"
const supabase = createClient(supabaseURL,supabaseKey);

export default supabase