import Stripe from 'stripe';
export { r as renderers } from '../../chunks/internal_BsTt5pTQ.mjs';

async function POST({ request }) {
  try {
    const data = await request.json();
    const stripe = new Stripe(undefined                                 );
    if (!data.amount || data.amount <= 0) {
      throw new Error("Le montant du don doit être supérieur à 0");
    }
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "eur",
            product_data: {
              name: "Don à EchoSafe",
              description: "Merci pour votre soutien!",
              // Utilisez votre propre logo si disponible
              images: ["https://echosafe.eloishenry.fr/images/logo.png"]
            },
            unit_amount: data.amount * 100
            // En centimes
          },
          quantity: 1
        }
      ],
      mode: "payment",
      success_url: `${undefined                               }/don/remerciement`,
      cancel_url: `${undefined                               }/don`
    });
    return new Response(
      JSON.stringify({ id: session.id }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  } catch (error) {
    console.error("Erreur lors de la création de la session:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  }
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
