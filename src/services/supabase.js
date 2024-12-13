import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://lxvbpqfghwqlvjywppqk.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx4dmJwcWZnaHdxbHZqeXdwcHFrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzM4NDc4MjEsImV4cCI6MjA0OTQyMzgyMX0.AnZx-s-hjOJg2Qlou0BGGy0pvYbVxvHOU8bXgsB7aHs";
export const supabase = createClient(supabaseUrl, supabaseKey);
