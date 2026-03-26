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
    custom_fields: [
      {
        key: "name_surname",
        label: {
          type: "custom",
          custom: "Name and Surname"
        },
        type: "text",
        optional: false
      },
      {
        key: "packeta_address",
        label: {
          type: "custom",
          custom: "Packeta address"
        },
        type: "text",
        optional: false
      },
      {
        key: "city",
        label: {
          type: "custom",
          custom: "City"
        },
        type: "text",
        optional: false
      }
    ],
    success_url: "https://your-site.vercel.app/success",
    cancel_url: "https://your-site.vercel.app/cart"
  });

  res.status(200).json({ url: session.url });
}