
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://mvglcbnkivwgwqsknlbf.supabase.co";
const supabaseAnonKey = "sb_publishable_1DhXHEcvV2txnJBvjetZtA_IO1Ghq4G";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
