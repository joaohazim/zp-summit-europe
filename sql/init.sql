-- ZP Summit Europe Database Schema
-- Criação da tabela de inscrições

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Tabela principal de signups
CREATE TABLE signups (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    country VARCHAR(100) NOT NULL,
    profession VARCHAR(100) NOT NULL,
    interest VARCHAR(100) NOT NULL,
    motivation TEXT,
    gdpr_consent BOOLEAN NOT NULL DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Índices para performance
CREATE INDEX idx_signups_email ON signups(email);
CREATE INDEX idx_signups_created_at ON signups(created_at);
CREATE INDEX idx_signups_country ON signups(country);
CREATE INDEX idx_signups_profession ON signups(profession);

-- Trigger para atualizar updated_at automaticamente
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_signups_updated_at 
    BEFORE UPDATE ON signups 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();

-- Inserir dados de exemplo para teste
INSERT INTO signups (name, email, country, profession, interest, motivation, gdpr_consent) VALUES
('João Teste', 'joao@teste.com', 'BR', 'investor', 'networking', 'Interesse em aprender sobre cripto na Europa', true),
('Maria Silva', 'maria@teste.com', 'PT', 'founder', 'investing', 'Expandir networking europeu', true);

-- View para relatórios
CREATE VIEW signup_stats AS
SELECT 
    country,
    profession,
    COUNT(*) as total_signups,
    DATE_TRUNC('day', created_at) as signup_date
FROM signups 
GROUP BY country, profession, DATE_TRUNC('day', created_at)
ORDER BY signup_date DESC;