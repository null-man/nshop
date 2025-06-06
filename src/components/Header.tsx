"use client";

import { Fragment, useState } from "react";
import { Dialog, Popover, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  ShoppingBagIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

// Define types
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
    //   name: "Women",
    //   featured: [
    //     { name: "New Arrivals", href: "/products?category=women" },
    //     { name: "Bestsellers", href: "/products?category=women&sort=bestseller" },
    //     { name: "Sale Items", href: "/products?category=women&sort=sale" },
    //   ],
    //   sections: [
    //     {
    //       name: "Clothing",
    //       items: [
    //         { name: "Dresses", href: "/products?category=women&type=dress" },
    //         { name: "Tops", href: "/products?category=women&type=tops" },
    //         { name: "Pants", href: "/products?category=women&type=pants" },
    //         { name: "Outerwear", href: "/products?category=women&type=outerwear" },
    //       ],
    //     },
    //     {
    //       name: "Accessories",
    //       items: [
    //         { name: "Bags", href: "/products?category=women&type=bags" },
    //         { name: "Jewelry", href: "/products?category=women&type=jewelry" },
    //         { name: "Scarves", href: "/products?category=women&type=scarves" },
    //       ],
    //     },
    //   ],
    // },
    // {
    //   name: "Men",
    //   featured: [
    //     { name: "New Arrivals", href: "/products?category=men" },
    //     { name: "Bestsellers", href: "/products?category=men&sort=bestseller" },
    //     { name: "Sale Items", href: "/products?category=men&sort=sale" },
    //   ],
    //   sections: [
    //     {
    //       name: "Clothing",
    //       items: [
    //         { name: "T-shirts", href: "/products?category=men&type=tshirts" },
    //         { name: "Shirts", href: "/products?category=men&type=shirts" },
    //         { name: "Pants", href: "/products?category=men&type=pants" },
    //         { name: "Outerwear", href: "/products?category=men&type=outerwear" },
    //       ],
    //     },
    //     {
    //       name: "Accessories",
    //       items: [
    //         { name: "Belts", href: "/products?category=men&type=belts" },
    //         { name: "Wallets", href: "/products?category=men&type=wallets" },
    //         { name: "Ties", href: "/products?category=men&type=ties" },
    //       ],
    //     },
    //   ],
    // },
  ],
  pages: [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
  ],
};

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-[var(--background)] shadow-sm">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="border-b border-gray-100">
          <div className="flex h-16 items-center justify-between">
            {/* Mobile menu button */}
            <div className="flex lg:hidden">
              <button
                type="button"
                className="-ml-2 rounded-md p-2 text-[var(--foreground)] hover:bg-[var(--muted)]"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            {/* Logo */}
            <div className="ml-4 flex lg:ml-0">
              <Link href="/" className="flex items-center">
                <span className="font-display text-2xl font-bold text-[var(--primary)]">
                  NShop
                </span>
              </Link>
            </div>

            {/* Navigation menu */}
            <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
              <div className="flex h-full space-x-8">
                {navigation.categories.length > 0 &&
                  navigation.categories.map((category) => (
                    <Popover key={category.name} className="flex">
                      {() => (
                        <>
                          <div className="relative flex">
                            <Popover.Button className="relative z-10 flex items-center justify-center text-sm font-medium text-[var(--foreground)] transition-colors duration-200 ease-out hover:text-[var(--primary)]">
                              {category.name}
                            </Popover.Button>
                          </div>
                        </>
                      )}
                    </Popover>
                  ))}

                {navigation.pages.map((page) => (
                  <Link
                    key={page.name}
                    href={page.href}
                    className="flex items-center text-sm font-medium text-[var(--foreground)] hover:text-[var(--primary)] transition duration-150"
                  >
                    {page.name}
                  </Link>
                ))}
              </div>
            </Popover.Group>

            {/* Shopping cart */}
            <div className="ml-auto flex items-center">
              <div className="ml-4 flow-root lg:ml-6">
                <Link href="/cart" className="group -m-2 flex items-center p-2">
                  <ShoppingBagIcon
                    className="h-6 w-6 flex-shrink-0 text-[var(--foreground)] group-hover:text-[var(--primary)] transition duration-150"
                    aria-hidden="true"
                  />
                  <span className="ml-2 text-sm font-medium text-[var(--foreground)] group-hover:text-[var(--primary)]">
                    0
                  </span>
                  <span className="sr-only">Items in cart</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
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
              <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-[var(--background)] pb-12 shadow-xl">
                <div className="flex px-4 pb-2 pt-5">
                  <button
                    type="button"
                    className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-[var(--foreground)]"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                <div className="border-t border-gray-200 px-4 py-6">
                  <div className="flex items-center justify-center">
                    <span className="font-display text-2xl font-bold text-[var(--primary)]">
                      NShop
                    </span>
                  </div>
                </div>

                {/* Mobile navigation links */}
                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  {navigation.pages.map((page) => (
                    <div key={page.name} className="flow-root">
                      <Link
                        href={page.href}
                        className="-m-2 block p-2 font-medium text-[var(--foreground)] hover:text-[var(--primary)]"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {page.name}
                      </Link>
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
