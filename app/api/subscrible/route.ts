export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    const audienceResponse = await fetch(process.env.NEXT_PUBLIC_API_URL!, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_RESEND_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        unsubscribed: false,
      }),
    });

    if (!audienceResponse.ok) {
      const errorDetails = await audienceResponse.json();
      throw new Error(
        `Erro ao adicionar contato: ${errorDetails.message || "Desconhecido"}`
      );
    }

    const emailResponse = await fetch(process.env.NEXT_PUBLIC_RESEND_SEND!, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_RESEND_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Explaining Things <no-reply@explainingthings.com>",
        to: [email],
        subject: "Bem-vindo ao Explaining Things 🔍",
        html: `
    <p>Olá,</p>

    <p>Bem-vindo ao <strong>Explaining Things</strong> — um projeto dedicado a entender o que está por trás do cotidiano.</p>

    <p>A cada edição, você receberá explicações técnicas e visuais sobre fenômenos comuns: como uma tela reconhece o toque, o que faz o som existir, por que as escadas são projetadas do jeito que são, e muito mais.</p>

    <p>O objetivo é simples: tornar o comum compreensível.</p>

    <p>Enquanto isso, explore mais em <a href="https://explainingthings.com" target="_blank">explainingthings.com</a>.</p>

    <br/>
    <p>— Otoniel Emanuel</p>
    <p><em>Criador do Explaining Things</em></p>
  `,
      }),
    });

    if (!emailResponse) {
      throw new Error("Error to send confirmation emial.");
    }

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    return new Response(JSON.stringify({ error: errorMessage }), {
      status: 500,
    });
  }
}
