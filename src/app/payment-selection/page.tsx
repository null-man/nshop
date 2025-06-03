"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function PaymentSelectionPage() {
  const router = useRouter();
  const [paymentMethod, setPaymentMethod] = useState("credit-card");
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePaymentMethodChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPaymentMethod(e.target.value);
  };

  const handleContinue = () => {
    setIsProcessing(true);

    // Redirect to different pages based on selected payment method
    if (paymentMethod === "credit-card") {
      router.push("/stripe-demo");
    } else if (paymentMethod === "alipay") {
      // Redirect to Alipay payment page
      alert("Alipay payment not implemented yet");
      setIsProcessing(false);
    } else if (paymentMethod === "wechat-pay") {
      // Redirect to WeChat Pay payment page
      alert("WeChat Pay payment not implemented yet");
      setIsProcessing(false);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              Select Payment Method
            </h1>
            <p className="mt-4 text-gray-500">
              Please select your preferred payment method and click continue to
              complete payment.
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
                Payment Method
              </h2>

              <div className="space-y-4">
                <div className="flex items-center">
                  <input
                    id="credit-card"
                    name="paymentMethod"
                    type="radio"
                    value="credit-card"
                    checked={paymentMethod === "credit-card"}
                    onChange={handlePaymentMethodChange}
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label
                    htmlFor="credit-card"
                    className="ml-3 block text-sm font-medium text-gray-700"
                  >
                    Credit Card (Stripe)
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    id="alipay"
                    name="paymentMethod"
                    type="radio"
                    value="alipay"
                    checked={paymentMethod === "alipay"}
                    onChange={handlePaymentMethodChange}
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label
                    htmlFor="alipay"
                    className="ml-3 block text-sm font-medium text-gray-700"
                  >
                    Alipay
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    id="wechat-pay"
                    name="paymentMethod"
                    type="radio"
                    value="wechat-pay"
                    checked={paymentMethod === "wechat-pay"}
                    onChange={handlePaymentMethodChange}
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label
                    htmlFor="wechat-pay"
                    className="ml-3 block text-sm font-medium text-gray-700"
                  >
                    WeChat Pay
                  </label>
                </div>
              </div>

              <div className="mt-8">
                <button
                  onClick={handleContinue}
                  disabled={isProcessing}
                  className={`w-full rounded-md border border-transparent px-4 py-3 text-base font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                    isProcessing
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500"
                  }`}
                >
                  {isProcessing ? "Processing..." : "Continue to Payment"}
                </button>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/cart"
              className="text-indigo-600 hover:text-indigo-500"
            >
              Return to Cart
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
