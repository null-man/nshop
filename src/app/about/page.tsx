import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* 页面标题 */}
      <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
        <Image
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2830&q=80"
          alt="团队合作"
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-20"
          width={2830}
          height={1000}
        />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              关于我们
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              我们致力于为每一位顾客提供优质的时尚服装和卓越的购物体验。
            </p>
          </div>
        </div>
      </div>

      {/* 公司简介 */}
      <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            公司简介
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            NShop成立于2024年，是一家专注于提供高品质时尚服装的电商平台。我们与全球知名品牌和设计师合作，
            为顾客带来最新潮流趋势和独特的时尚体验。
          </p>
        </div>

        {/* 使命和价值观 */}
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            <div className="flex flex-col">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                我们的使命
              </dt>
              <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">
                  通过提供优质的时尚产品和卓越的服务，帮助每个人找到并展现自己的独特风格。
                </p>
              </dd>
            </div>
            <div className="flex flex-col">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                我们的愿景
              </dt>
              <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">
                  成为全球领先的时尚电商平台，引领时尚潮流，创造美好生活方式。
                </p>
              </dd>
            </div>
            <div className="flex flex-col">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                核心价值观
              </dt>
              <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">
                  诚信、创新、品质、服务，始终以顾客需求为中心，追求卓越。
                </p>
              </dd>
            </div>
          </dl>
        </div>
      </div>

      {/* 我们的优势 */}
      <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            我们的优势
          </h2>
          <ul role="list" className="mt-8 space-y-8 text-gray-600">
            <li className="flex gap-x-3">
              <span className="mt-1 h-5 w-5 flex-none text-indigo-600">✓</span>
              <span>
                <strong className="font-semibold text-gray-900">
                  优质商品：
                </strong>
                严选全球优质品牌，确保每件商品的品质。
              </span>
            </li>
            <li className="flex gap-x-3">
              <span className="mt-1 h-5 w-5 flex-none text-indigo-600">✓</span>
              <span>
                <strong className="font-semibold text-gray-900">
                  快速配送：
                </strong>
                专业的物流团队，确保商品快速安全送达。
              </span>
            </li>
            <li className="flex gap-x-3">
              <span className="mt-1 h-5 w-5 flex-none text-indigo-600">✓</span>
              <span>
                <strong className="font-semibold text-gray-900">
                  贴心服务：
                </strong>
                专业的客服团队，为您提供全方位的购物支持。
              </span>
            </li>
            <li className="flex gap-x-3">
              <span className="mt-1 h-5 w-5 flex-none text-indigo-600">✓</span>
              <span>
                <strong className="font-semibold text-gray-900">
                  轻松退换：
                </strong>
                便捷的退换货服务，购物无忧。
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
