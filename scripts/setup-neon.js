const { Pool } = require('pg')

const pool = new Pool({
  connectionString: process.env.DATABASE_URL
})

async function setupNeonDatabase() {
  try {
    console.log('🔍 Conectando ao Neon PostgreSQL...')
    
    const client = await pool.connect()
    
    // Testar conexão básica
    const result = await client.query('SELECT NOW()')
    console.log('✅ Conexão OK! Timestamp:', result.rows[0].now)
    
    console.log('📋 Criando tabela "signups"...')
    
    // Criar tabela signups
    await client.query(`
      CREATE TABLE IF NOT EXISTS signups (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL UNIQUE,
        phone VARCHAR(50),
        country VARCHAR(100),
        experience VARCHAR(50),
        motivation TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `)
    
    console.log('✅ Tabela "signups" criada com sucesso!')
    
    // Verificar se tabela existe
    const tableCheck = await client.query(`
      SELECT table_name 
      FROM information_schema.tables 
      WHERE table_schema = 'public' AND table_name = 'signups'
    `)
    
    if (tableCheck.rows.length > 0) {
      console.log('✅ Tabela "signups" confirmada!')
      
      // Contar registros
      const countResult = await client.query('SELECT COUNT(*) FROM signups')
      console.log(`📊 Total de signups: ${countResult.rows[0].count}`)
    }
    
    client.release()
    console.log('🎉 Setup do Neon concluído com sucesso!')
    
  } catch (error) {
    console.error('❌ Erro no setup:', error.message)
  } finally {
    await pool.end()
  }
}

setupNeonDatabase()