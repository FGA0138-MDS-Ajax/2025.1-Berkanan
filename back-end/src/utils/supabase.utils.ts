import { createClient } from '@supabase/supabase-js';

/**
 * Recupera a URL do Supabase das variáveis de ambiente
 * @type {string}
 * @throws {Error} Se SUPABASE_URL não estiver definida
 */
const SUPABASE_URL = process.env.SUPABASE_URL!;

/**
 * Recupera a chave de API do Supabase das variáveis de ambiente
 * @type {string}
 * @throws {Error} Se SUPABASE_KEY não estiver definida
 */
const SUPABASE_KEY = process.env.SUPABASE_KEY!;

/**
 * Cria uma instância do cliente Supabase para interagir com o backend do Supabase
 * @type {import('@supabase/supabase-js').SupabaseClient}
 * @description Inicializa um cliente Supabase com a URL e a chave de API fornecidas
 * @see {@link https://supabase.com/docs/reference/javascript/initializing|Inicialização do Cliente Supabase}
 */
export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);