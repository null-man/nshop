"use client";

import Image from "next/image";
import { StarIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { useParams } from "next/navigation";

// 模拟产品数据
const products = {
  "1": {
    id: 1,
    name: "Spring New Dress",
    href: "#",
    price: "$299",
    description:
      "This spring dress is made of light and breathable fabric, perfect for spring and summer wear. The simple and elegant design allows you to showcase your grace in any occasion.",
    highlights: [
      "Light and breathable fabric",
      "Comfortable wearing experience",
      "Simple and fashionable design",
      "Suitable for various occasions",
    ],
    details:
      "This dress is made of high-quality cotton fabric, soft to touch and comfortable to wear. The A-line skirt design flatters your legs and shows off your beautiful figure.",
    imageSrc:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800&q=80",
    imageAlt: "Spring new dress showcase",
    colors: [
      { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
      { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
      { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
    ],
    sizes: [
      { name: "XXS", inStock: false },
      { name: "XS", inStock: true },
      { name: "S", inStock: true },
      { name: "M", inStock: true },
      { name: "L", inStock: true },
      { name: "XL", inStock: true },
      { name: "XXL", inStock: false },
    ],
    rating: 4.5,
    reviewCount: 117,
  },
  "2": {
    id: 2,
    name: "Casual Men's Shirt",
    href: "#",
    price: "$199",
    description:
      "This casual men's shirt is made of high-quality cotton fabric, breathable and comfortable for daily wear. The simple and stylish design allows you to show your confidence in any occasion.",
    highlights: [
      "High-quality cotton fabric",
      "Breathable and comfortable",
      "Simple and stylish design",
      "Suitable for various occasions",
    ],
    details:
      "This shirt is made of high-quality cotton fabric, soft to touch and comfortable to wear. The classic cut flatters your figure and shows off your masculine charm.",
    imageSrc:
      "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800&q=80",
    imageAlt: "Casual men's shirt showcase",
    colors: [
      { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
      { name: "Blue", class: "bg-blue-200", selectedClass: "ring-blue-400" },
      { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
    ],
    sizes: [
      { name: "XS", inStock: false },
      { name: "S", inStock: true },
      { name: "M", inStock: true },
      { name: "L", inStock: true },
      { name: "XL", inStock: true },
      { name: "XXL", inStock: true },
    ],
    rating: 4.2,
    reviewCount: 84,
  },
};

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function ProductDetails() {
  const params = useParams();
  const productId = params.id as string;
  const product = products[productId as keyof typeof products];

  if (!product) {
    return <div className="text-center py-12">Product not found</div>;
  }

  return (
    <div className="bg-white">
      <div className="pt-6">
        {/* Images */}
        <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
          <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
            <Image
              src={product.imageSrc}
              alt={product.imageAlt}
              className="h-full w-full object-cover object-center"
              width={600}
              height={800}
            />
          </div>
          <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
              <Image
                src={product.imageSrc}
                alt={product.imageAlt}
                className="h-full w-full object-cover object-center"
                width={600}
                height={800}
              />
            </div>
            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
              <Image
                src={product.imageSrc}
                alt={product.imageAlt}
                className="h-full w-full object-cover object-center"
                width={600}
                height={800}
              />
            </div>
          </div>
          <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
            <Image
              src={product.imageSrc}
              alt={product.imageAlt}
              className="h-full w-full object-cover object-center"
              width={600}
              height={800}
            />
          </div>
        </div>

        {/* Product info */}
        <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              {product.name}
            </h1>
          </div>

          {/* Options */}
          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <h2 className="sr-only">Product information</h2>
            <p className="text-3xl tracking-tight text-gray-900">
              {product.price}
            </p>

            {/* Reviews */}
            <div className="mt-6">
              <h3 className="sr-only">Reviews</h3>
              <div className="flex items-center">
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      className={classNames(
                        product.rating > rating
                          ? "text-yellow-400"
                          : "text-gray-200",
                        "h-5 w-5 flex-shrink-0"
                      )}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="sr-only">{product.rating} stars</p>
                <a
                  href="#"
                  className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                >
                  {product.reviewCount} reviews
                </a>
              </div>
            </div>

            <div className="mt-10">
              <Link
                href="/cart"
                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Add to Cart
              </Link>
            </div>
          </div>

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
            {/* Description and details */}
            <div>
              <h3 className="sr-only">Description</h3>

              <div className="space-y-6">
                <p className="text-base text-gray-900">{product.description}</p>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

              <div className="mt-4">
                <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                  {product.highlights.map((highlight) => (
                    <li key={highlight} className="text-gray-400">
                      <span className="text-gray-600">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-10">
              <h2 className="text-sm font-medium text-gray-900">Details</h2>

              <div className="mt-4 space-y-6">
                <p className="text-sm text-gray-600">{product.details}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
