"use client";

import Link from "next/link";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

export default function OrderSuccessPage() {
  // 生成随机订单号
  const orderNumber = Math.floor(Math.random() * 1000000)
    .toString()
    .padStart(6, "0");

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="max-w-xl">
          <div className="flex items-center">
            <CheckCircleIcon className="h-12 w-12 text-green-500" />
            <h1 className="ml-3 text-3xl font-bold tracking-tight text-gray-900">
              谢谢您的订购！
            </h1>
          </div>
          <p className="mt-2 text-base text-gray-500">
            您的订单已成功提交，我们将尽快处理。
          </p>
          <p className="mt-2 text-base text-gray-500">
            订单号：
            <span className="font-medium text-gray-900">{orderNumber}</span>
          </p>
        </div>

        <div className="mt-10 border-t border-gray-200">
          <h2 className="mt-8 text-lg font-medium text-gray-900">订单信息</h2>

          <div className="mt-6">
            <h3 className="sr-only">订单项目</h3>
            <div className="space-y-8">
              <div className="border-t border-b border-gray-200 bg-white shadow-sm sm:rounded-lg sm:border">
                <div className="py-6 px-4 sm:px-6 lg:grid lg:grid-cols-12 lg:gap-x-8 lg:p-8">
                  <div className="sm:flex lg:col-span-7">
                    <div className="mt-6 sm:mt-0">
                      <h3 className="text-base font-medium text-gray-900">
                        春季新款连衣裙
                      </h3>
                      <p className="mt-2 text-sm font-medium text-gray-900">
                        ¥299.00
                      </p>
                      <p className="mt-3 text-sm text-gray-500">尺码: M</p>
                      <p className="mt-1 text-sm text-gray-500">颜色: 白色</p>
                    </div>
                  </div>

                  <div className="mt-6 lg:col-span-5 lg:mt-0">
                    <dl className="grid grid-cols-2 gap-x-6 text-sm">
                      <div>
                        <dt className="font-medium text-gray-900">配送信息</dt>
                        <dd className="mt-3 text-gray-500">
                          <span className="block">预计3-5个工作日送达</span>
                          <span className="block">顺丰快递</span>
                        </dd>
                      </div>
                    </dl>
                  </div>
                </div>

                <div className="border-t border-gray-200 py-6 px-4 sm:px-6 lg:p-8">
                  <h4 className="sr-only">状态</h4>
                  <p className="text-sm font-medium text-gray-900">
                    订单处理中 - 预计发货时间：2-3个工作日
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-200 py-6">
          <div className="flex justify-between">
            <Link
              href="/"
              className="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              继续购物
            </Link>
            <Link
              href="#"
              className="rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              查看订单
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
