-- Criar tabela signups para o ZP Summit
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
);

-- Verificar se a tabela foi criada
SELECT table_name, column_name, data_type 
FROM information_schema.columns 
WHERE table_name = 'signups' 
ORDER BY ordinal_position;