"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { XMarkIcon } from "@heroicons/react/20/solid";

const initialCartItems = [
  {
    id: 1,
    name: "春季新款连衣裙",
    href: "#",
    price: "¥299",
    quantity: 1,
    imageSrc:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800&q=80",
    imageAlt: "春季新款连衣裙展示图",
  },
];

export default function CartPage() {
  const [cartItems, setCartItems] = useState(initialCartItems);

  const removeItem = (itemId: number) => {
    setCartItems(cartItems.filter((item) => item.id !== itemId));
  };

  const updateQuantity = (itemId: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems(
      cartItems.map((item) =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const subtotal = cartItems.reduce((total, item) => {
    return total + parseFloat(item.price.replace("¥", "")) * item.quantity;
  }, 0);

  const shipping = 20;
  const total = subtotal + shipping;

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl py-16">
            购物车
          </h1>

          <form className="mt-12">
            <section aria-labelledby="cart-heading">
              <h2 id="cart-heading" className="sr-only">
                购物车中的商品
              </h2>

              <ul
                role="list"
                className="divide-y divide-gray-200 border-t border-b border-gray-200"
              >
                {cartItems.map((item) => (
                  <li key={item.id} className="flex py-6">
                    <div className="flex-shrink-0">
                      <Image
                        src={item.imageSrc}
                        alt={item.imageAlt}
                        className="h-24 w-24 rounded-md object-cover object-center sm:h-32 sm:w-32"
                        width={128}
                        height={128}
                      />
                    </div>

                    <div className="ml-4 flex flex-1 flex-col sm:ml-6">
                      <div>
                        <div className="flex justify-between">
                          <h4 className="text-sm">
                            <Link
                              href={item.href}
                              className="font-medium text-gray-700 hover:text-gray-800"
                            >
                              {item.name}
                            </Link>
                          </h4>
                          <button
                            type="button"
                            className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500"
                            onClick={() => removeItem(item.id)}
                          >
                            <span className="sr-only">移除</span>
                            <XMarkIcon className="h-5 w-5" aria-hidden="true" />
                          </button>
                        </div>
                        <p className="mt-1 text-sm text-gray-500">
                          {item.price}
                        </p>
                      </div>

                      <div className="mt-4 flex items-center">
                        <label
                          htmlFor={`quantity-${item.id}`}
                          className="sr-only"
                        >
                          数量
                        </label>
                        <button
                          type="button"
                          className="rounded-l border border-gray-300 px-3 py-1"
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                        >
                          -
                        </button>
                        <input
                          id={`quantity-${item.id}`}
                          name={`quantity-${item.id}`}
                          type="number"
                          className="w-16 border-t border-b border-gray-300 text-center"
                          value={item.quantity}
                          onChange={(e) =>
                            updateQuantity(item.id, parseInt(e.target.value))
                          }
                        />
                        <button
                          type="button"
                          className="rounded-r border border-gray-300 px-3 py-1"
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </section>

            {/* 订单摘要 */}
            <section aria-labelledby="summary-heading" className="mt-10">
              <h2
                id="summary-heading"
                className="text-lg font-medium text-gray-900"
              >
                订单摘要
              </h2>

              <div className="mt-4 rounded-lg border border-gray-200 bg-gray-50 px-4 py-6 sm:p-6">
                <div className="flow-root">
                  <dl className="-my-4 divide-y divide-gray-200 text-sm">
                    <div className="flex items-center justify-between py-4">
                      <dt className="text-gray-600">小计</dt>
                      <dd className="font-medium text-gray-900">
                        ¥{subtotal.toFixed(2)}
                      </dd>
                    </div>
                    <div className="flex items-center justify-between py-4">
                      <dt className="text-gray-600">运费</dt>
                      <dd className="font-medium text-gray-900">
                        ¥{shipping.toFixed(2)}
                      </dd>
                    </div>
                    <div className="flex items-center justify-between py-4">
                      <dt className="text-base font-medium text-gray-900">
                        总计
                      </dt>
                      <dd className="text-base font-medium text-gray-900">
                        ¥{total.toFixed(2)}
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>

              <div className="mt-10">
                <Link
                  href="/checkout"
                  className="w-full rounded-md border border-transparent bg-indigo-600 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 flex items-center justify-center"
                >
                  结算
                </Link>
              </div>

              <div className="mt-6 text-center text-sm text-gray-500">
                <p>
                  或{" "}
                  <Link
                    href="/products"
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    继续购物
                    <span aria-hidden="true"> &rarr;</span>
                  </Link>
                </p>
              </div>
            </section>
          </form>
        </div>
      </div>
    </div>
  );
}
