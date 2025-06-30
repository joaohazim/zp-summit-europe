import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key'

// Verificar se as variáveis estão configuradas
const isSupabaseConfigured = supabaseUrl !== 'https://placeholder.supabase.co' && supabaseAnonKey !== 'placeholder-key'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Tipos para o formulário
export interface SignupFormData {
  name: string
  email: string
  country: string
  profession: string
  interest: string
  motivation: string
  gdprConsent: boolean
  created_at?: string
}

// Função para salvar lead no Supabase
export async function saveSignup(data: Omit<SignupFormData, 'created_at'>) {
  // Verificar se Supabase está configurado
  if (!isSupabaseConfigured) {
    console.warn('Supabase não configurado. Dados seriam salvos:', data)
    return [{ id: 'demo-id', ...data, created_at: new Date().toISOString() }]
  }

  try {
    const { data: result, error } = await supabase
      .from('signups')
      .insert([
        {
          ...data,
          created_at: new Date().toISOString()
        }
      ])
      .select()

    if (error) {
      console.error('Erro ao salvar no Supabase:', error)
      throw error
    }

    return result
  } catch (error) {
    console.error('Erro na função saveSignup:', error)
    throw error
  }
}