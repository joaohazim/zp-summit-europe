import { NextResponse } from 'next/server'
import { getAllSignups } from '@/lib/database'

export async function GET() {
  try {
    const signups = await getAllSignups()
    
    // Calcular estatísticas
    const stats = {
      total: signups.length,
      today: signups.filter(signup => {
        const today = new Date().toDateString()
        const signupDate = new Date(signup.created_at).toDateString()
        return today === signupDate
      }).length,
      countries: signups.reduce((acc: { [key: string]: number }, signup) => {
        acc[signup.country] = (acc[signup.country] || 0) + 1
        return acc
      }, {}),
      professions: signups.reduce((acc: { [key: string]: number }, signup) => {
        acc[signup.profession] = (acc[signup.profession] || 0) + 1
        return acc
      }, {}),
      interests: signups.reduce((acc: { [key: string]: number }, signup) => {
        acc[signup.interest] = (acc[signup.interest] || 0) + 1
        return acc
      }, {})
    }

    return NextResponse.json({
      signups,
      stats
    })

  } catch (error) {
    console.error('Erro ao buscar dados do admin:', error)
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    )
  }
}