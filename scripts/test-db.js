const { Pool } = require('pg')

const pool = new Pool({
  connectionString: 'postgresql://admin:zpsummit2024@localhost:5432/zpsummit'
})

async function testConnection() {
  try {
    console.log('🔍 Testando conexão com PostgreSQL...')
    
    const client = await pool.connect()
    
    // Testar conexão básica
    const result = await client.query('SELECT NOW()')
    console.log('✅ Conexão OK! Timestamp:', result.rows[0].now)
    
    // Verificar se tabela existe
    const tableCheck = await client.query(`
      SELECT table_name 
      FROM information_schema.tables 
      WHERE table_schema = 'public' AND table_name = 'signups'
    `)
    
    if (tableCheck.rows.length > 0) {
      console.log('✅ Tabela "signups" existe!')
      
      // Contar registros
      const countResult = await client.query('SELECT COUNT(*) FROM signups')
      console.log(`📊 Total de signups: ${countResult.rows[0].count}`)
      
      // Mostrar dados de exemplo
      const sampleData = await client.query('SELECT name, email, country FROM signups LIMIT 3')
      if (sampleData.rows.length > 0) {
        console.log('📋 Dados de exemplo:')
        sampleData.rows.forEach(row => {
          console.log(`   - ${row.name} (${row.email}) - ${row.country}`)
        })
      }
    } else {
      console.log('❌ Tabela "signups" não encontrada')
    }
    
    client.release()
    console.log('🎉 Teste concluído com sucesso!')
    
  } catch (error) {
    console.error('❌ Erro na conexão:', error.message)
  } finally {
    await pool.end()
  }
}

testConnection()