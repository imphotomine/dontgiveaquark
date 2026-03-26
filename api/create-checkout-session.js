import Stripe from "stripe";

console.log("Stripe key check:", !!process.env.STRIPE_SECRET_KEY);

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {

  if (req.method !== "POST") {
    return res.status(405).end();
  }

  const { lineItems, orderDetails } = req.body;

  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    line_items: lineItems,
    allow_promotion_codes: true,
    payment_intent_data: {
      description: orderDetails ? orderDetails.substring(0, 1000) : "Cart details"
    },
    metadata: {
      details: orderDetails ? orderDetails.substring(0, 500) : ""
    },
    custom_fields: [
      {
        key: "packeta_address",
        label: {
          type: "custom",
          custom: "Packeta parcel address"
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