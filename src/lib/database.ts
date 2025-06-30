import { Pool } from 'pg'

// Configuração do PostgreSQL
const pool = new Pool({
  connectionString: process.env.DATABASE_URL || 'postgresql://admin:zpsummit2024@localhost:5432/zpsummit',
})

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

// Função para salvar lead no PostgreSQL
export async function saveSignup(data: Omit<SignupFormData, 'created_at'>) {
  const client = await pool.connect()
  
  try {
    const query = `
      INSERT INTO signups (name, email, country, profession, interest, motivation, gdpr_consent)
      VALUES ($1, $2, $3, $4, $5, $6, $7)
      RETURNING *
    `
    
    const values = [
      data.name,
      data.email,
      data.country,
      data.profession,
      data.interest,
      data.motivation || '',
      data.gdprConsent
    ]
    
    console.log('Executando query:', query)
    console.log('Com valores:', values)
    
    const result = await client.query(query, values)
    console.log('Resultado:', result.rows[0])
    return result.rows[0]
    
  } catch (error) {
    console.error('Erro ao salvar no PostgreSQL:', error)
    throw error
  } finally {
    client.release()
  }
}

// Função para buscar todos os signups
export async function getAllSignups() {
  const client = await pool.connect()
  
  try {
    const result = await client.query(`
      SELECT * FROM signups 
      ORDER BY created_at DESC
    `)
    return result.rows
  } catch (error) {
    console.error('Erro ao buscar signups:', error)
    throw error
  } finally {
    client.release()
  }
}

// Função para estatísticas
export async function getSignupStats() {
  const client = await pool.connect()
  
  try {
    const result = await client.query(`
      SELECT 
        country,
        profession,
        COUNT(*) as total
      FROM signups 
      GROUP BY country, profession
      ORDER BY total DESC
    `)
    return result.rows
  } catch (error) {
    console.error('Erro ao buscar estatísticas:', error)
    throw error
  } finally {
    client.release()
  }
}

export default pool