import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const supabase = createClient(
  "https://otepmbqmvuwrnvrbfkdb.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im90ZXBtYnFtdnV3cm52cmJma2RiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQyMTA3MTMsImV4cCI6MjAxOTc4NjcxM30.a_3_DwzNpNX8RnvVq0kc_kJEBfxyFaDg5bAIMcr6q04"
);
