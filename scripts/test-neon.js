const { Pool } = require('pg')

// Use the exact connection string
const connectionString = 'postgresql://neondb_owner:npg_6v3wSJPLGDcB@ep-hidden-glade-ac4gshij-pooler.sa-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require'

const pool = new Pool({
  connectionString: connectionString
})

async function testNeon() {
  try {
    console.log('🔍 Testando conexão com Neon...')
    
    const client = await pool.connect()
    console.log('✅ Conectado ao Neon!')
    
    // Testar conexão básica
    const result = await client.query('SELECT NOW() as timestamp, version() as version')
    console.log('✅ Timestamp:', result.rows[0].timestamp)
    console.log('📊 PostgreSQL Version:', result.rows[0].version.split(' ')[0])
    
    // Criar tabela signups
    console.log('📋 Criando tabela signups...')
    await client.query(`
      CREATE TABLE IF NOT EXISTS signups (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL UNIQUE,
        country VARCHAR(100),
        profession VARCHAR(100),
        interest VARCHAR(100),
        motivation TEXT,
        gdpr_consent BOOLEAN DEFAULT true,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `)
    
    console.log('✅ Tabela signups criada!')
    
    // Verificar tabela
    const tableCheck = await client.query(`
      SELECT column_name, data_type, is_nullable
      FROM information_schema.columns 
      WHERE table_name = 'signups' 
      ORDER BY ordinal_position
    `)
    
    console.log('📋 Estrutura da tabela signups:')
    tableCheck.rows.forEach(col => {
      console.log(`   - ${col.column_name}: ${col.data_type} (${col.is_nullable === 'YES' ? 'nullable' : 'not null'})`)
    })
    
    // Contar registros
    const countResult = await client.query('SELECT COUNT(*) FROM signups')
    console.log(`📊 Total de registros: ${countResult.rows[0].count}`)
    
    client.release()
    console.log('🎉 Teste concluído com sucesso!')
    
  } catch (error) {
    console.error('❌ Erro:', error.message)
    console.error('❌ Stack:', error.stack)
  } finally {
    await pool.end()
  }
}

testNeon()