# 🚀 Guia de Deploy - ZP Summit Europe

## ✅ **O que já está pronto:**

- ✅ **Build funcionando** - Projeto compilado com sucesso
- ✅ **Supabase configurado** - Backend e API prontos
- ✅ **SEO otimizado** - Meta tags, sitemap, robots.txt
- ✅ **Performance** - Next.js 14 com otimizações
- ✅ **Responsivo** - Design mobile-first

---

## 🔧 **Deploy no Vercel (5 minutos):**

### **Opção 1: Via CLI (Recomendado)**
```bash
# 1. Login no Vercel
npx vercel login

# 2. Deploy
npx vercel --prod

# 3. Seguir as instruções:
# - Set up and deploy "zp-summit"? Y
# - Which scope? [sua conta]
# - Link to existing project? N
# - What's your project's name? zp-summit-europe
# - In which directory is your code located? ./
```

### **Opção 2: Via Dashboard Web**
1. Acesse [vercel.com](https://vercel.com)
2. Conecte com GitHub
3. Import Repository
4. Configure as variáveis de ambiente

---

## 🔐 **Configurar Variáveis de Ambiente:**

**No painel do Vercel:**
1. Project Settings → Environment Variables
2. Adicionar:
```
NEXT_PUBLIC_SUPABASE_URL = sua_url_do_supabase
NEXT_PUBLIC_SUPABASE_ANON_KEY = sua_chave_publica
```

---

## 🗄️ **Setup do Supabase (10 minutos):**

### 1. **Criar Projeto**
- Acesse [supabase.com](https://supabase.com)
- New Project → "zp-summit-europe"
- Região: West Europe (Ireland)

### 2. **Configurar Database**
- SQL Editor → Copiar/colar o conteúdo de `supabase-schema.sql`
- RUN → Verificar se tabela `signups` foi criada

### 3. **Obter Credenciais**
- Settings → API
- Copiar Project URL e anon public key

---

## 🌐 **Domínio Personalizado:**

### **No Vercel:**
1. Project → Domains
2. Add Domain → `zpsummit.eu`
3. Configurar DNS no seu provedor:
   ```
   CNAME: zpsummit.eu → cname.vercel-dns.com
   ```

---

## 📊 **Monitoramento:**

### **Analytics (Opcional):**
- Vercel Analytics (automático)
- Google Analytics 4
- Hotjar/Mixpanel

### **Dashboard de Leads:**
- Supabase Dashboard
- Filtros por país, profissão, data
- Export CSV

---

## 🚨 **Troubleshooting:**

### **Build Failed:**
```bash
npm run build
# Verificar erros no terminal
```

### **Formulário não funciona:**
- Verificar variáveis Supabase
- Conferir console do navegador
- Testar API: `/api/signup`

### **Imagens não carregam:**
- Verificar domínios em `next.config.js`
- Unsplash às vezes bloqueia

---

## 🎯 **Próximos Passos:**

### **Hoje:**
1. ✅ Deploy feito
2. ✅ Supabase configurado  
3. ✅ Domínio conectado
4. ✅ Primeiro teste do formulário

### **Esta Semana:**
- Google Analytics
- Email automático de confirmação
- Pixel Facebook/LinkedIn

### **Próximo Mês:**
- Dashboard admin personalizado
- Integração Mailchimp
- A/B tests na landing

---

## 📞 **Suporte:**

**Seu CTO está disponível para:**
- Resolver problemas técnicos
- Adicionar novas funcionalidades
- Otimizações de performance
- Integrações com outras tools

**Status:** ✅ **PRONTO PARA CAPTURAR LEADS!**