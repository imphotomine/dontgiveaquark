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
        key: "delivery_method",
        label: {
          type: "custom",
          custom: "Delivery Method"
        },
        type: "dropdown",
        dropdown: {
          options: [
            {
              label: "Packeta",
              value: "packeta"
            },
            {
              label: "Pickup in Bratislava (Kmeťovo nám. 4-5)",
              value: "pickup"
            }
          ]
        },
        optional: false
      },
      {
        key: "packeta_address_and_city",
        label: {
          type: "custom",
          custom: "Packeta address (leave empty if Pickup)"
        },
        type: "text",
        optional: true
      },
    ],
    success_url: "https://dontgiveaquark.icu",
    cancel_url: "https://dontgiveaquark.icu"
  });

  res.status(200).json({ url: session.url });
}