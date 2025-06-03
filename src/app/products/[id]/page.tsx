"use client";

import Image from "next/image";
import { StarIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { useParams } from "next/navigation";

// 模拟产品数据
const products = {
  "1": {
    id: 1,
    name: "春季新款连衣裙",
    href: "#",
    price: "¥299",
    description:
      "这款春季连衣裙采用轻盈透气的面料，适合春夏季节穿着。简约大方的设计，让你在任何场合都能展现优雅气质。",
    highlights: [
      "轻盈透气的面料",
      "舒适的穿着体验",
      "简约时尚的设计",
      "适合多种场合",
    ],
    details:
      "这款连衣裙采用优质棉质面料，手感柔软，穿着舒适。A字裙摆设计，修饰腿型，展现优美身姿。",
    imageSrc:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800&q=80",
    imageAlt: "春季新款连衣裙展示图",
    colors: [
      { name: "白色", class: "bg-white", selectedClass: "ring-gray-400" },
      { name: "灰色", class: "bg-gray-200", selectedClass: "ring-gray-400" },
      { name: "黑色", class: "bg-gray-900", selectedClass: "ring-gray-900" },
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
    name: "休闲男士衬衫",
    href: "#",
    price: "¥199",
    description:
      "这款休闲男士衬衫采用优质棉质面料，透气舒适，适合日常穿着。简约大方的设计，让你在任何场合都能展现自信风采。",
    highlights: ["优质棉质面料", "透气舒适", "简约时尚的设计", "适合多种场合"],
    details:
      "这款衬衫采用优质棉质面料，手感柔软，穿着舒适。经典剪裁，修饰身形，展现男性魅力。",
    imageSrc:
      "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800&q=80",
    imageAlt: "休闲男士衬衫展示图",
    colors: [
      { name: "白色", class: "bg-white", selectedClass: "ring-gray-400" },
      { name: "蓝色", class: "bg-blue-200", selectedClass: "ring-blue-400" },
      { name: "黑色", class: "bg-gray-900", selectedClass: "ring-gray-900" },
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
    return <div className="text-center py-12">产品不存在</div>;
  }

  return (
    <div className="bg-white">
      <div className="pt-6">
        {/* 图片 */}
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

        {/* 产品信息 */}
        <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              {product.name}
            </h1>
          </div>

          {/* 选项 */}
          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <h2 className="sr-only">产品信息</h2>
            <p className="text-3xl tracking-tight text-gray-900">
              {product.price}
            </p>

            {/* 评价 */}
            <div className="mt-6">
              <h3 className="sr-only">评价</h3>
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
                <p className="sr-only">{product.rating} 颗星</p>
                <a
                  href="#"
                  className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                >
                  {product.reviewCount} 条评价
                </a>
              </div>
            </div>

            <div className="mt-10">
              <Link
                href="/cart"
                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                加入购物车
              </Link>
            </div>
          </div>

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
            {/* 描述和详情 */}
            <div>
              <h3 className="sr-only">描述</h3>

              <div className="space-y-6">
                <p className="text-base text-gray-900">{product.description}</p>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-sm font-medium text-gray-900">亮点</h3>

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
              <h2 className="text-sm font-medium text-gray-900">详情</h2>

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
