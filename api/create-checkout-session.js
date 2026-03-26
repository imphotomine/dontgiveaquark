import Stripe from "stripe";

console.log("Stripe key check:", !!process.env.STRIPE_SECRET_KEY);

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {

  if (req.method !== "POST") {
    return res.status(405).end();
  }

  const cart = req.body;

  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    line_items: cart,
    allow_promotion_codes: true,
    success_url: "https://your-site.vercel.app/success",
    cancel_url: "https://your-site.vercel.app/cart"
  });

  res.status(200).json({ url: session.url });
}