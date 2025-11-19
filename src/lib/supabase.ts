import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

// Função para validar se é uma URL HTTP/HTTPS válida
const isValidUrl = (url: string) => {
  try {
    const parsedUrl = new URL(url)
    return parsedUrl.protocol === 'http:' || parsedUrl.protocol === 'https:'
  } catch {
    return false
  }
}

// Use placeholder se não estiver configurado ou inválido
const finalSupabaseUrl = (supabaseUrl && isValidUrl(supabaseUrl)) ? supabaseUrl : 'https://placeholder.supabase.co'
const finalSupabaseAnonKey = (supabaseUrl && supabaseAnonKey) ? supabaseAnonKey : 'placeholder-key'

// Validação para evitar erro quando variáveis não estão configuradas
if (!supabaseUrl || !isValidUrl(supabaseUrl) || !supabaseAnonKey) {
  console.warn('⚠️ Variáveis de ambiente do Supabase não configuradas ou inválidas. Configure em: Configurações do Projeto -> Integrações -> Supabase')
}

export const supabase = createClient(
  finalSupabaseUrl,
  finalSupabaseAnonKey
)