# Setup do Supabase para ZP Summit

## 🚀 Passos para Configurar

### 1. Criar Conta no Supabase
1. Acesse [supabase.com](https://supabase.com)
2. Clique em "Start your project"
3. Faça login com GitHub (recomendado)

### 2. Criar Novo Projeto
1. Clique em "New Project"
2. Escolha uma organização
3. Nome do projeto: `zp-summit-europe`
4. Password do database: **GUARDAR ESSA SENHA!**
5. Região: `West Europe (Ireland)` - mais próximo da Espanha
6. Clique em "Create new project"

### 3. Configurar Database
1. No dashboard do Supabase, vá em "SQL Editor"
2. Copie todo o conteúdo do arquivo `supabase-schema.sql`
3. Cole no editor e clique em "Run"
4. Verifique se a tabela `signups` foi criada em "Database" > "Tables"

### 4. Obter Chaves da API
1. Vá em "Project Settings" (ícone de engrenagem)
2. Clique em "API"
3. Copie:
   - **Project URL** (NEXT_PUBLIC_SUPABASE_URL)
   - **anon public** key (NEXT_PUBLIC_SUPABASE_ANON_KEY)

### 5. Configurar Variáveis de Ambiente
1. Edite o arquivo `.env.local`
2. Substitua pelos valores reais:
```bash
NEXT_PUBLIC_SUPABASE_URL=https://seuprojetoid.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=sua_chave_publica_aqui
```

### 6. Testar Configuração
```bash
npm run dev
```
Acesse http://localhost:3000 e teste o formulário de inscrição.

## 📊 Como Acessar os Dados

### Dashboard do Supabase
1. Vá em "Database" > "Tables"
2. Clique em "signups"
3. Veja todos os cadastros em tempo real

### Filtros Úteis
- Por país: `country = 'BR'`
- Por profissão: `profession = 'investor'`
- Por data: `created_at >= '2024-01-01'`

## 🔒 Segurança
- ✅ RLS (Row Level Security) habilitado
- ✅ Apenas inserção pública permitida
- ✅ Leitura restrita a usuários autenticados
- ✅ Chaves anônimas seguras para frontend

## 📈 Próximos Passos
1. **Analytics**: Integrar Google Analytics
2. **Email**: Configurar notificações automáticas
3. **Export**: Funcionalidade de exportar CSV
4. **Dashboard**: Painel admin personalizado

## 🆘 Troubleshooting

### Erro "Invalid API key"
- Verifique se copiou as chaves corretas
- Confirme se o projeto está rodando

### Erro "Table doesn't exist"
- Execute novamente o SQL do arquivo `supabase-schema.sql`
- Verifique se a tabela aparece no dashboard

### Formulário não salva
- Abra o DevTools do navegador
- Veja os erros no Console
- Verifique se as variáveis de ambiente estão corretas