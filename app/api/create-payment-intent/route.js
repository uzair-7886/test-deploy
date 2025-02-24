// app/api/create-payment-intent/route.js
import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(request) {
  try {
    const { amount, currency } = await request.json();
    const paymentIntent = await stripe.paymentIntents.create({
      amount, // amount in the smallest currency unit (
      currency: currency || "GBP",
    //   payment_method_types: ["card"],
    automatic_payment_methods: { enabled: true },
    });
    console.log(paymentIntent.client_secret)
    return NextResponse.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.error("Error creating payment intent:", error);
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
