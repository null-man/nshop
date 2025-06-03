"use client";

import dynamic from "next/dynamic";
import Link from "next/link";

// Dynamically import Stripe payment component to avoid server-side rendering issues
const SimpleStripePayment = dynamic(
  () => import("@/components/SimpleStripePayment"),
  {
    ssr: false,
    loading: () => (
      <div className="animate-pulse bg-gray-200 h-32 rounded-md w-full"></div>
    ),
  }
);

export default function StripeDemo() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              Stripe Payment Demo
            </h1>
            <p className="mt-4 text-gray-500">
              This is a simple Stripe payment demonstration page. You can use
              test card numbers for payment testing.
            </p>
          </div>

          <div className="bg-white shadow rounded-lg p-6">
            <div className="mb-8">
              <h2 className="text-xl font-medium text-gray-900">
                Order Summary
              </h2>
              <div className="mt-4 border-t border-b border-gray-200 py-4">
                <div className="flex justify-between">
                  <p className="text-gray-700">Subtotal</p>
                  <p className="font-medium text-gray-900">$299.00</p>
                </div>
                <div className="flex justify-between mt-2">
                  <p className="text-gray-700">Shipping</p>
                  <p className="font-medium text-gray-900">$20.00</p>
                </div>
                <div className="flex justify-between mt-2 pt-2 border-t border-gray-200">
                  <p className="text-gray-900 font-medium">Total</p>
                  <p className="font-medium text-gray-900">$319.00</p>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <h2 className="text-xl font-medium text-gray-900 mb-4">
                Credit Card Payment
              </h2>
              <SimpleStripePayment />
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link href="/" className="text-indigo-600 hover:text-indigo-500">
              Return to Homepage
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
