import Stripe from 'stripe';

export async function POST({ request }) {
  try {
    const data = await request.json();
    
    // Initialiser Stripe avec votre clé secrète
    const stripe = new Stripe(import.meta.env.STRIPE_SECRET_KEY);
    
    // S'assurer que le montant existe et est positif
    if (!data.amount || data.amount <= 0) {
      throw new Error("Le montant du don doit être supérieur à 0");
    }
    
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'eur',
            product_data: {
              name: 'Don à EchoSafe',
              description: 'Merci pour votre soutien!',
              // Utilisez votre propre logo si disponible
              images: ['https://pocketbase-echo-safe.fly.dev/images/logo.png'],
            },
            unit_amount: data.amount * 100,  // En centimes
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${import.meta.env.PUBLIC_SITE_URL}/don/remerciement`,
      cancel_url: `${import.meta.env.PUBLIC_SITE_URL}/don`,
    });
    
    return new Response(
      JSON.stringify({ id: session.id }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  } catch (error) {
    console.error('Erreur lors de la création de la session:', error);
    
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  }
}