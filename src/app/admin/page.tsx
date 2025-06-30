'use client'

import { useState, useEffect } from 'react'

interface Signup {
  id: number
  name: string
  email: string
  country: string
  profession: string
  interest: string
  motivation: string
  gdpr_consent: boolean
  created_at: string
}

export default function AdminPage() {
  const [signups, setSignups] = useState<Signup[]>([])
  const [loading, setLoading] = useState(true)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState('')

  const authenticate = () => {
    if (password === 'zpsummit2024') {
      setIsAuthenticated(true)
      fetchData()
    } else {
      alert('Senha incorreta!')
    }
  }

  const fetchData = async () => {
    try {
      setLoading(true)
      const response = await fetch('/api/admin/signups')
      if (response.ok) {
        const data = await response.json()
        setSignups(data.signups || [])
      }
    } catch (error) {
      console.error('Erro ao buscar dados:', error)
    } finally {
      setLoading(false)
    }
  }

  if (!isAuthenticated) {
    return (
      <div style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        fontFamily: 'Arial, sans-serif'
      }}>
        <div style={{
          background: 'white',
          padding: '2rem',
          borderRadius: '12px',
          boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
          width: '100%',
          maxWidth: '400px'
        }}>
          <h1 style={{ textAlign: 'center', marginBottom: '1rem', color: '#333' }}>
            ZP Summit Admin
          </h1>
          <p style={{ textAlign: 'center', marginBottom: '1.5rem', color: '#666' }}>
            Digite a senha para acessar o dashboard
          </p>
          <div style={{ marginBottom: '1rem' }}>
            <input
              type="password"
              placeholder="Senha de administrador"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && authenticate()}
              style={{
                width: '100%',
                padding: '12px',
                border: '2px solid #ddd',
                borderRadius: '8px',
                fontSize: '16px'
              }}
            />
          </div>
          <button 
            onClick={authenticate}
            style={{
              width: '100%',
              padding: '12px',
              background: '#667eea',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '16px',
              cursor: 'pointer'
            }}
          >
            Entrar
          </button>
        </div>
      </div>
    )
  }

  if (loading) {
    return (
      <div style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
      }}>
        <div style={{ textAlign: 'center', color: 'white' }}>
          <p>Carregando dados...</p>
        </div>
      </div>
    )
  }

  return (
    <div style={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '2rem',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ 
          background: 'white', 
          borderRadius: '12px', 
          padding: '2rem',
          boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
        }}>
          <h1 style={{ color: '#333', marginBottom: '0.5rem' }}>
            Dashboard ZP Summit
          </h1>
          <p style={{ color: '#666', marginBottom: '2rem' }}>
            Total de inscrições: {signups.length}
          </p>

          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid #eee' }}>
                  <th style={{ padding: '12px', textAlign: 'left' }}>Nome</th>
                  <th style={{ padding: '12px', textAlign: 'left' }}>Email</th>
                  <th style={{ padding: '12px', textAlign: 'left' }}>País</th>
                  <th style={{ padding: '12px', textAlign: 'left' }}>Profissão</th>
                  <th style={{ padding: '12px', textAlign: 'left' }}>Data</th>
                </tr>
              </thead>
              <tbody>
                {signups.map((signup) => (
                  <tr key={signup.id} style={{ borderBottom: '1px solid #eee' }}>
                    <td style={{ padding: '12px', fontWeight: 'bold' }}>{signup.name}</td>
                    <td style={{ padding: '12px' }}>{signup.email}</td>
                    <td style={{ padding: '12px' }}>{signup.country}</td>
                    <td style={{ padding: '12px' }}>{signup.profession}</td>
                    <td style={{ padding: '12px' }}>
                      {new Date(signup.created_at).toLocaleDateString('pt-BR')}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={{ marginTop: '2rem', textAlign: 'center' }}>
            <button 
              onClick={fetchData}
              style={{
                padding: '12px 24px',
                background: '#667eea',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                marginRight: '1rem'
              }}
            >
              Atualizar
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}