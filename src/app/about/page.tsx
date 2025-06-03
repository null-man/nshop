import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Page Title */}
      <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
        <Image
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2830&q=80"
          alt="Team Collaboration"
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-20"
          width={2830}
          height={1000}
        />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              About Us
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              We are committed to providing quality fashion clothing and an
              exceptional shopping experience for every customer.
            </p>
          </div>
        </div>
      </div>

      {/* Company Profile */}
      <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Company Profile
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Founded in 2024, NShop is an e-commerce platform focused on
            providing high-quality fashion clothing. We collaborate with
            globally renowned brands and designers to bring customers the latest
            fashion trends and unique style experiences.
          </p>
        </div>

        {/* Mission and Values */}
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            <div className="flex flex-col">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                Our Mission
              </dt>
              <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">
                  To help everyone find and express their unique style through
                  quality fashion products and excellent service.
                </p>
              </dd>
            </div>
            <div className="flex flex-col">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                Our Vision
              </dt>
              <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">
                  To become a leading global fashion e-commerce platform,
                  setting fashion trends and creating a better lifestyle.
                </p>
              </dd>
            </div>
            <div className="flex flex-col">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                Core Values
              </dt>
              <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">
                  Integrity, Innovation, Quality, and Service. We always put
                  customer needs at the center and pursue excellence.
                </p>
              </dd>
            </div>
          </dl>
        </div>
      </div>

      {/* Our Advantages */}
      <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Our Advantages
          </h2>
          <ul role="list" className="mt-8 space-y-8 text-gray-600">
            <li className="flex gap-x-3">
              <span className="mt-1 h-5 w-5 flex-none text-indigo-600">✓</span>
              <span>
                <strong className="font-semibold text-gray-900">
                  Quality Products:
                </strong>
                Carefully selected global brands ensuring the quality of every
                item.
              </span>
            </li>
            <li className="flex gap-x-3">
              <span className="mt-1 h-5 w-5 flex-none text-indigo-600">✓</span>
              <span>
                <strong className="font-semibold text-gray-900">
                  Fast Delivery:
                </strong>
                Professional logistics team ensuring quick and safe delivery.
              </span>
            </li>
            <li className="flex gap-x-3">
              <span className="mt-1 h-5 w-5 flex-none text-indigo-600">✓</span>
              <span>
                <strong className="font-semibold text-gray-900">
                  Attentive Service:
                </strong>
                Professional customer service team providing comprehensive
                shopping support.
              </span>
            </li>
            <li className="flex gap-x-3">
              <span className="mt-1 h-5 w-5 flex-none text-indigo-600">✓</span>
              <span>
                <strong className="font-semibold text-gray-900">
                  Easy Returns:
                </strong>
                Convenient return and exchange service for worry-free shopping.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
