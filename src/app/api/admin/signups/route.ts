import { NextRequest, NextResponse } from 'next/server'
import { getAllSignups, getSignupStats } from '@/lib/database'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const type = searchParams.get('type')

    if (type === 'stats') {
      const stats = await getSignupStats()
      return NextResponse.json({ success: true, data: stats })
    }

    // Buscar todos os signups
    const signups = await getAllSignups()
    
    return NextResponse.json({
      success: true,
      data: signups,
      total: signups.length
    })

  } catch (error) {
    console.error('Erro na API admin:', error)
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    )
  }
}