"use client";

import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

// Using test public key, please replace with your own key in production
const stripePromise = loadStripe(
  "pk_test_51O5TcxLswUZRMTmP5j6YyY7qwYoDFCnwpZBG3YzEOqQJTlUD2bGXP9Xd0WZjLTMHidV7VmZOxVlQrjJ0wZFQzVVm00ufGVMIAa"
);

const SimpleCheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessing(true);
    setErrorMessage(null);

    const cardElement = elements.getElement(CardElement);

    if (!cardElement) {
      setErrorMessage("Card element not found");
      setIsProcessing(false);
      return;
    }

    try {
      // Simulate payment processing
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Get payment method
      const { error: paymentMethodError, paymentMethod } =
        await stripe.createPaymentMethod({
          type: "card",
          card: cardElement,
        });

      if (paymentMethodError) {
        throw new Error(paymentMethodError.message);
      }

      // This is just a simulation of success, in a real application you should call a backend API to create a payment intent
      console.log("Payment successful, payment method ID:", paymentMethod.id);
      setPaymentStatus("success");
    } catch (error) {
      console.error("Payment error:", error);
      setPaymentStatus("error");
      if (error instanceof Error) {
        setErrorMessage(error.message);
      } else {
        setErrorMessage("An error occurred during payment processing");
      }
    } finally {
      setIsProcessing(false);
    }
  };

  if (paymentStatus === "success") {
    return (
      <div className="rounded-md bg-green-50 p-4 text-center">
        <div className="flex justify-center">
          <svg
            className="h-8 w-8 text-green-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="mt-2 text-lg font-medium text-green-800">
          Payment Successful!
        </h3>
        <p className="mt-2 text-sm text-green-700">
          Your payment has been processed successfully.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="rounded-md border border-gray-300 p-4">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Credit Card Information
          </label>
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  color: "#32325d",
                  fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
                  "::placeholder": {
                    color: "#aab7c4",
                  },
                },
                invalid: {
                  color: "#fa755a",
                  iconColor: "#fa755a",
                },
              },
            }}
          />
        </div>
        {errorMessage && (
          <div className="text-red-500 text-sm mt-2">{errorMessage}</div>
        )}
      </div>

      <button
        type="submit"
        disabled={!stripe || isProcessing}
        className={`w-full rounded-md border border-transparent px-4 py-3 text-base font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 ${
          !stripe || isProcessing
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500"
        }`}
      >
        {isProcessing ? "Processing..." : "Pay Now"}
      </button>

      <div className="mt-4 text-xs text-gray-500">
        <p>Test Card Number: 4242 4242 4242 4242</p>
        <p>Expiry Date: Any future date (e.g., 12/25)</p>
        <p>CVC: Any 3 digits (e.g., 123)</p>
      </div>
    </form>
  );
};

export default function SimpleStripePayment() {
  return (
    <Elements stripe={stripePromise}>
      <SimpleCheckoutForm />
    </Elements>
  );
}
