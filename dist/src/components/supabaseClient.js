import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://uudrxapjmfixmfgvowpe.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV1ZHJ4YXBqbWZpeG1mZ3Zvd3BlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk5MTc3MDAsImV4cCI6MjA1NTQ5MzcwMH0.AENfvpVwm_xJRRQ_80T6IT9P6M6g5PdEvi9OFWJQ8fw";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);