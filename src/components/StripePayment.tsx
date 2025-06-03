"use client";

import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

// 使用环境变量中的Stripe公钥
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY ||
    "pk_test_your_stripe_public_key"
);

interface CheckoutFormProps {
  amount: number;
  onSuccess: () => void;
  onError: (error: string) => void;
  isProcessing: boolean;
  setIsProcessing: (isProcessing: boolean) => void;
}

const CheckoutForm = ({
  amount,
  onSuccess,
  onError,
  isProcessing,
  setIsProcessing,
}: CheckoutFormProps) => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessing(true);

    const cardElement = elements.getElement(CardElement);

    if (!cardElement) {
      setCardError("无法找到卡片元素");
      setIsProcessing(false);
      return;
    }

    try {
      // 调用我们的API来创建支付意图
      const response = await fetch("/api/create-payment-intent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ amount }),
      });

      if (!response.ok) {
        throw new Error("创建支付意图失败");
      }

      const { clientSecret } = await response.json();

      // 确认卡片支付
      const { error, paymentIntent } = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: {
            card: cardElement,
          },
        }
      );

      if (error) {
        throw new Error(error.message || "支付处理失败");
      }

      if (paymentIntent.status === "succeeded") {
        onSuccess();
      } else {
        throw new Error("支付未完成");
      }

      // 如果需要在开发环境中模拟支付，可以使用以下代码
      // await new Promise((resolve) => setTimeout(resolve, 1500));
      // onSuccess();
    } catch (error) {
      if (error instanceof Error) {
        setCardError(error.message);
        onError(error.message);
      } else {
        setCardError("支付处理过程中发生错误");
        onError("支付处理过程中发生错误");
      }
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="rounded-md border border-gray-300 p-4">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            信用卡信息
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
        {cardError && (
          <div className="text-red-500 text-sm mt-2">{cardError}</div>
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
        {isProcessing ? "处理中..." : `支付 ¥${amount.toFixed(2)}`}
      </button>
    </form>
  );
};

interface StripePaymentProps {
  amount: number;
  onSuccess: () => void;
  onError: (error: string) => void;
}

export default function StripePayment({
  amount,
  onSuccess,
  onError,
}: StripePaymentProps) {
  const [isProcessing, setIsProcessing] = useState(false);

  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm
        amount={amount}
        onSuccess={onSuccess}
        onError={onError}
        isProcessing={isProcessing}
        setIsProcessing={setIsProcessing}
      />
    </Elements>
  );
}
