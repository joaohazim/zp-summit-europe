#!/bin/bash

# Script para iniciar o PostgreSQL via Docker

echo "🚀 Iniciando PostgreSQL com Docker..."

# Verificar se Docker está rodando
if ! docker info > /dev/null 2>&1; then
    echo "❌ Docker não está rodando. Por favor, inicie o Docker Desktop."
    exit 1
fi

# Subir o container PostgreSQL
docker-compose up -d postgres

echo "⏳ Aguardando PostgreSQL inicializar..."
sleep 5

# Verificar se o container está rodando
if docker ps | grep -q "zp-summit-db"; then
    echo "✅ PostgreSQL está rodando!"
    echo "📊 Dados de conexão:"
    echo "   Host: localhost"
    echo "   Port: 5432" 
    echo "   Database: zpsummit"
    echo "   User: admin"
    echo "   Password: zpsummit2024"
    echo ""
    echo "🔗 Connection String: postgresql://admin:zpsummit2024@localhost:5432/zpsummit"
    echo ""
    echo "📱 Para testar a conexão:"
    echo "   npm run test-db"
else
    echo "❌ Erro ao iniciar PostgreSQL"
    docker-compose logs postgres
fi