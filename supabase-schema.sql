-- Tabela para armazenar inscrições do ZP Summit
CREATE TABLE signups (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  country VARCHAR(100) NOT NULL,
  profession VARCHAR(100) NOT NULL,
  interest VARCHAR(100) NOT NULL,
  motivation TEXT,
  gdpr_consent BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Índices para melhor performance
CREATE INDEX idx_signups_email ON signups(email);
CREATE INDEX idx_signups_created_at ON signups(created_at);
CREATE INDEX idx_signups_country ON signups(country);
CREATE INDEX idx_signups_profession ON signups(profession);

-- RLS (Row Level Security) policies
ALTER TABLE signups ENABLE ROW LEVEL SECURITY;

-- Política para permitir inserção de novos registros
CREATE POLICY "Allow public insert" ON signups
  FOR INSERT TO anon
  WITH CHECK (true);

-- Política para leitura (apenas para usuários autenticados/admin)
CREATE POLICY "Allow authenticated read" ON signups
  FOR SELECT TO authenticated
  USING (true);

-- Trigger para atualizar updated_at automaticamente
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = timezone('utc'::text, now());
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_signups_updated_at 
  BEFORE UPDATE ON signups 
  FOR EACH ROW 
  EXECUTE FUNCTION update_updated_at_column();