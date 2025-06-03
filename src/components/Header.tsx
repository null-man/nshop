"use client";

import { Fragment, useState } from "react";
import { Dialog, Popover, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  ShoppingBagIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";

// 定义类型
interface CategorySection {
  name: string;
  items: { name: string; href: string }[];
}

interface Category {
  name: string;
  featured: { name: string; href: string }[];
  sections: CategorySection[];
}

interface NavigationType {
  categories: Category[];
  pages: { name: string; href: string }[];
}

const navigation: NavigationType = {
  categories: [
    // {
    //   name: "女装",
    //   featured: [
    //     { name: "新品上市", href: "/products?category=women" },
    //     { name: "畅销商品", href: "/products?category=women&sort=bestseller" },
    //     { name: "特价商品", href: "/products?category=women&sort=sale" },
    //   ],
    //   sections: [
    //     {
    //       name: "服装",
    //       items: [
    //         { name: "连衣裙", href: "/products?category=women&type=dress" },
    //         { name: "上衣", href: "/products?category=women&type=tops" },
    //         { name: "裤装", href: "/products?category=women&type=pants" },
    //         { name: "外套", href: "/products?category=women&type=outerwear" },
    //       ],
    //     },
    //     {
    //       name: "配饰",
    //       items: [
    //         { name: "包包", href: "/products?category=women&type=bags" },
    //         { name: "首饰", href: "/products?category=women&type=jewelry" },
    //         { name: "围巾", href: "/products?category=women&type=scarves" },
    //       ],
    //     },
    //   ],
    // },
    // {
    //   name: "男装",
    //   featured: [
    //     { name: "新品上市", href: "/products?category=men" },
    //     { name: "畅销商品", href: "/products?category=men&sort=bestseller" },
    //     { name: "特价商品", href: "/products?category=men&sort=sale" },
    //   ],
    //   sections: [
    //     {
    //       name: "服装",
    //       items: [
    //         { name: "T恤", href: "/products?category=men&type=tshirts" },
    //         { name: "衬衫", href: "/products?category=men&type=shirts" },
    //         { name: "裤装", href: "/products?category=men&type=pants" },
    //         { name: "外套", href: "/products?category=men&type=outerwear" },
    //       ],
    //     },
    //     {
    //       name: "配饰",
    //       items: [
    //         { name: "腰带", href: "/products?category=men&type=belts" },
    //         { name: "钱包", href: "/products?category=men&type=wallets" },
    //         { name: "领带", href: "/products?category=men&type=ties" },
    //       ],
    //     },
    //   ],
    // },
  ],
  pages: [
    { name: "首页", href: "/" },
    { name: "关于我们", href: "/about" },
    { name: "联系我们", href: "/contact" },
  ],
};

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="border-b border-gray-200">
          <div className="flex h-16 items-center justify-between">
            {/* 移动端菜单按钮 */}
            <div className="flex lg:hidden">
              <button
                type="button"
                className="-ml-2 rounded-md bg-white p-2 text-gray-400"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">打开菜单</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            {/* Logo */}
            <div className="ml-4 flex lg:ml-0">
              <Link href="/">
                <span className="sr-only">Your Company</span>
                <Image
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt="Company Logo"
                  width={32}
                  height={32}
                />
              </Link>
            </div>

            {/* 导航菜单 */}
            <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
              <div className="flex h-full space-x-8">
                {navigation.categories.length > 0 &&
                  navigation.categories.map((category) => (
                    <Popover key={category.name} className="flex">
                      {() => (
                        <>
                          <div className="relative flex">
                            <Popover.Button className="relative z-10 flex items-center justify-center text-sm font-medium text-gray-700 transition-colors duration-200 ease-out hover:text-gray-800">
                              {category.name}
                            </Popover.Button>
                          </div>
                        </>
                      )}
                    </Popover>
                  ))}

                {navigation.pages.map((page) => (
                  <a
                    key={page.name}
                    href={page.href}
                    className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                  >
                    {page.name}
                  </a>
                ))}
              </div>
            </Popover.Group>

            {/* 购物车 */}
            <div className="ml-auto flex items-center">
              <div className="ml-4 flow-root lg:ml-6">
                <Link href="/cart" className="group -m-2 flex items-center p-2">
                  <ShoppingBagIcon
                    className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                    aria-hidden="true"
                  />
                  <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                    0
                  </span>
                  <span className="sr-only">购物车中的商品</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* 移动端菜单 */}
      <Transition.Root show={mobileMenuOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-40 lg:hidden"
          onClose={setMobileMenuOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                <div className="flex px-4 pb-2 pt-5">
                  <button
                    type="button"
                    className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="sr-only">关闭菜单</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* 移动端导航链接 */}
                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  {navigation.pages.map((page) => (
                    <div key={page.name} className="flow-root">
                      <a
                        href={page.href}
                        className="-m-2 block p-2 font-medium text-gray-900"
                      >
                        {page.name}
                      </a>
                    </div>
                  ))}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </header>
  );
}
