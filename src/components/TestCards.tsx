"use client";

import { useState } from "react";

interface TestCard {
  type: string;
  number: string;
  expiry: string;
  cvc: string;
  description: string;
}

const testCards: TestCard[] = [
  {
    type: "Visa",
    number: "4242 4242 4242 4242",
    expiry: "任意未来日期",
    cvc: "任意3位数",
    description: "支付成功",
  },
  {
    type: "Visa (3D Secure)",
    number: "4000 0025 0000 3155",
    expiry: "任意未来日期",
    cvc: "任意3位数",
    description: "3D Secure验证",
  },
  {
    type: "Visa",
    number: "4000 0000 0000 9995",
    expiry: "任意未来日期",
    cvc: "任意3位数",
    description: "余额不足",
  },
];

export default function TestCards() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mt-4">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="text-sm text-indigo-600 hover:text-indigo-500"
      >
        {isOpen ? "隐藏测试卡号" : "显示测试卡号"}
      </button>

      {isOpen && (
        <div className="mt-2 border border-gray-200 rounded-md p-4 bg-gray-50">
          <h3 className="text-sm font-medium text-gray-900 mb-2">
            Stripe测试卡号
          </h3>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th
                    scope="col"
                    className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    卡类型
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    卡号
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    有效期
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    CVC
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    说明
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {testCards.map((card) => (
                  <tr key={card.number}>
                    <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">
                      {card.type}
                    </td>
                    <td className="px-3 py-2 whitespace-nowrap text-sm font-mono text-gray-900">
                      {card.number}
                    </td>
                    <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">
                      {card.expiry}
                    </td>
                    <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">
                      {card.cvc}
                    </td>
                    <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">
                      {card.description}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-2 text-xs text-gray-500">
            注意：这些卡号仅用于测试环境，不会产生实际费用。
          </p>
        </div>
      )}
    </div>
  );
}
