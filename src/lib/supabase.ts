import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://xjsseshibdovuywxdmgy.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhqc3Nlc2hpYmRvdnV5d3hkbWd5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTEzMTE1NDYsImV4cCI6MjA2Njg4NzU0Nn0.M8OAyTyPcZYsq7pCh-_B04ZgdimL3FuLw5xJi6XGIng'

// Verificar se as variáveis estão configuradas
const isSupabaseConfigured = supabaseUrl !== 'https://placeholder.supabase.co'

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