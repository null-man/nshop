"use client";

import Link from "next/link";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

export default function OrderSuccessPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="flex justify-center">
            <CheckCircleIcon className="h-16 w-16 text-green-500" />
          </div>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900">
            订单已确认！
          </h1>
          <p className="mt-4 text-lg text-gray-500">
            感谢您的购买。您的订单已成功处理。
          </p>
          <p className="mt-2 text-lg text-gray-500">
            订单确认邮件已发送至您的邮箱。
          </p>

          <div className="mt-10 border border-gray-200 rounded-lg bg-white p-6 shadow-sm">
            <h2 className="text-lg font-medium text-gray-900">订单信息</h2>
            <dl className="mt-4 space-y-4">
              <div className="flex justify-between">
                <dt className="text-sm text-gray-600">订单编号</dt>
                <dd className="text-sm font-medium text-gray-900">
                  #
                  {Math.floor(Math.random() * 10000000)
                    .toString()
                    .padStart(7, "0")}
                </dd>
              </div>
              <div className="flex justify-between border-t border-gray-200 pt-4">
                <dt className="text-sm text-gray-600">订单日期</dt>
                <dd className="text-sm font-medium text-gray-900">
                  {new Date().toLocaleDateString("zh-CN")}
                </dd>
              </div>
              <div className="flex justify-between border-t border-gray-200 pt-4">
                <dt className="text-sm text-gray-600">支付方式</dt>
                <dd className="text-sm font-medium text-gray-900">
                  信用卡支付
                </dd>
              </div>
              <div className="flex justify-between border-t border-gray-200 pt-4">
                <dt className="text-sm text-gray-600">预计送达</dt>
                <dd className="text-sm font-medium text-gray-900">
                  {new Date(
                    Date.now() + 7 * 24 * 60 * 60 * 1000
                  ).toLocaleDateString("zh-CN")}
                </dd>
              </div>
            </dl>
          </div>

          <div className="mt-10">
            <Link
              href="/"
              className="inline-block rounded-md bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              返回首页
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
