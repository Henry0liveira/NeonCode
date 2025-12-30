import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, company, phone, message } = body

    // Validação básica
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Campos obrigatórios faltando' },
        { status: 400 }
      )
    }

    // Aqui você integraria com seu serviço de email
    // Exemplos: SendGrid, Resend, Nodemailer, etc.
    
    // Simulação de envio de email
    console.log('Formulário recebido:', {
      name,
      email,
      company,
      phone,
      message,
    })

    // Exemplo com Resend (descomente e configure):
    /*
    import { Resend } from 'resend'
    const resend = new Resend(process.env.RESEND_API_KEY)
    
    await resend.emails.send({
      from: 'contato@NeonCode.com',
      to: 'contato@NeonCode.com',
      subject: `Nova mensagem de ${name}`,
      html: `
        <h2>Nova mensagem do formulário de contato</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Empresa:</strong> ${company || 'Não informado'}</p>
        <p><strong>Telefone:</strong> ${phone || 'Não informado'}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${message}</p>
      `,
    })
    */

    return NextResponse.json(
      { message: 'Mensagem enviada com sucesso!' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Erro ao processar formulário:', error)
    return NextResponse.json(
      { error: 'Erro ao enviar mensagem' },
      { status: 500 }
    )
  }
}

