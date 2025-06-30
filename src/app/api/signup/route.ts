import { NextRequest, NextResponse } from 'next/server'
import { saveSignup } from '@/lib/supabase'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validação básica
    const { name, email, country, profession, interest, motivation, gdprConsent } = body
    
    if (!name || !email || !country || !profession || !interest || !gdprConsent) {
      return NextResponse.json(
        { error: 'Todos os campos obrigatórios devem ser preenchidos' },
        { status: 400 }
      )
    }

    if (!email.includes('@')) {
      return NextResponse.json(
        { error: 'Email inválido' },
        { status: 400 }
      )
    }

    // Salvar no Supabase
    const result = await saveSignup({
      name,
      email,
      country,
      profession,
      interest,
      motivation,
      gdprConsent
    })

    return NextResponse.json(
      { 
        success: true, 
        message: 'Inscrição realizada com sucesso!',
        data: result 
      },
      { status: 201 }
    )

  } catch (error: unknown) {
    console.error('Erro na API:', error)
    
    // Erro de email duplicado
    if (error && typeof error === 'object' && 'code' in error && error.code === '23505') {
      return NextResponse.json(
        { error: 'Este email já está cadastrado' },
        { status: 409 }
      )
    }

    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    )
  }
}