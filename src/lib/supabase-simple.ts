// Versão simplificada do Supabase para evitar erros de build
export async function saveSignup(data: any) {
  // Para agora, só vamos simular que salvou
  console.log('Dados que seriam salvos:', data)
  return { success: true, message: 'Dados salvos (modo demo)' }
}