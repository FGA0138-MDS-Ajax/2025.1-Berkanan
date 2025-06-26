import { createClient } from '@supabase/supabase-js';

/**
 * Recupera a URL do Supabase das variáveis de ambiente
 * @type {string}
 * @throws {Error} Se SUPABASE_URL não estiver definida
 */
const SUPABASE_URL = "https://txxaffbvcrzgwhaxcgvr.supabase.co";

/**
 * Recupera a chave de API do Supabase das variáveis de ambiente
 * @type {string}
 * @throws {Error} Se SUPABASE_KEY não estiver definida
 */
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR4eGFmZmJ2Y3J6Z3doYXhjZ3ZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkwODEyNjcsImV4cCI6MjA2NDY1NzI2N30.aekkzJGIGMirxY5_cNjhB_tFicFpzcLNar4lFqWMgZs";

/**
 * Cria uma instância do cliente Supabase para interagir com o backend do Supabase
 * @type {import('@supabase/supabase-js').SupabaseClient}
 * @description Inicializa um cliente Supabase com a URL e a chave de API fornecidas
 * @see {@link https://supabase.com/docs/reference/javascript/initializing|Inicialização do Cliente Supabase}
 */
export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);