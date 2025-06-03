import { NextResponse } from "next/server";
import Stripe from "stripe";

// Initialize Stripe client
const stripe = new Stripe(
  process.env.STRIPE_SECRET_KEY || "sk_test_your_stripe_secret_key",
  {
    apiVersion: "2025-05-28.basil",
  }
);

export async function POST(request: Request) {
  try {
    const { amount } = await request.json();

    // Create payment intent
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount * 100), // Stripe uses cents as the unit
      currency: "usd", // Changed from CNY to USD to match our price display
      // In a real application, you might want to add more metadata
      metadata: {
        order_id: `order-${Date.now()}`,
      },
    });

    return NextResponse.json({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    console.error("Error creating payment intent:", error);
    return NextResponse.json(
      { error: "Failed to create payment intent" },
      { status: 500 }
    );
  }
}
