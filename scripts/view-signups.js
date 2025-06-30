const { Pool } = require('pg')

const connectionString = 'postgresql://neondb_owner:npg_6v3wSJPLGDcB@ep-hidden-glade-ac4gshij-pooler.sa-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require'

const pool = new Pool({
  connectionString: connectionString
})

async function viewSignups() {
  try {
    console.log('📋 Buscando dados dos signups...\n')
    
    const client = await pool.connect()
    
    const result = await client.query(`
      SELECT id, name, email, country, profession, interest, 
             motivation, gdpr_consent, created_at
      FROM signups 
      ORDER BY created_at DESC
    `)
    
    console.log(`📊 Total de inscrições: ${result.rows.length}\n`)
    
    result.rows.forEach((signup, index) => {
      console.log(`--- Inscrição ${index + 1} ---`)
      console.log(`ID: ${signup.id}`)
      console.log(`Nome: ${signup.name}`)
      console.log(`Email: ${signup.email}`)
      console.log(`País: ${signup.country}`)
      console.log(`Profissão: ${signup.profession}`)
      console.log(`Interesse: ${signup.interest}`)
      console.log(`Motivação: ${signup.motivation || 'Não informado'}`)
      console.log(`GDPR: ${signup.gdpr_consent ? 'Aceito' : 'Não aceito'}`)
      console.log(`Data: ${new Date(signup.created_at).toLocaleString('pt-BR')}`)
      console.log('')
    })
    
    client.release()
    
  } catch (error) {
    console.error('❌ Erro:', error.message)
  } finally {
    await pool.end()
  }
}

viewSignups()