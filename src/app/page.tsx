import Image from "next/image";
import Link from "next/link";

const featuredProducts = [
  {
    id: 1,
    name: "Spring New Dress",
    href: "/products/1",
    price: "$299",
    imageSrc:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800&q=80",
    imageAlt: "Spring new dress showcase",
  },
  {
    id: 2,
    name: "Casual Men's Shirt",
    href: "/products/2",
    price: "$199",
    imageSrc:
      "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800&q=80",
    imageAlt: "Casual men's shirt showcase",
  },
  {
    id: 3,
    name: "Fashionable Women's Jacket",
    href: "#",
    price: "$399",
    imageSrc:
      "https://images.unsplash.com/photo-1525450824786-227cbef70703?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800&q=80",
    imageAlt: "Fashionable women's jacket showcase",
  },
  {
    id: 4,
    name: "Men's Casual Pants",
    href: "#",
    price: "$259",
    imageSrc:
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800&q=80",
    imageAlt: "Men's casual pants showcase",
  },
];

const categories = [
  {
    name: "Women's Collection",
    href: "/products?category=women",
    imageSrc:
      "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&h=800&q=80",
  },
  {
    name: "Men's Collection",
    href: "/products?category=men",
    imageSrc:
      "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&h=800&q=80",
  },
  {
    name: "Accessories",
    href: "/products?category=accessories",
    imageSrc:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&h=800&q=80",
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-[var(--muted)]">
        <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8">
          <div className="px-6 py-16 sm:py-24 lg:col-span-7 lg:px-0 lg:py-32 xl:col-span-6">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl font-display text-[var(--foreground)]">
                Elegant Style
                <br />
                <span className="text-[var(--primary)]">Curated Fashion</span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-[var(--foreground)] opacity-90">
                Explore our carefully selected latest fashion clothing to
                showcase your personal charm. From casual to formal, we offer
                diverse choices for you.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <Link
                  href="/products"
                  className="rounded-md bg-[var(--primary)] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[var(--primary)]/90 transition duration-200"
                >
                  Browse Products
                </Link>
                <Link
                  href="/about"
                  className="text-sm font-semibold leading-6 text-[var(--foreground)] hover:text-[var(--primary)] transition duration-200"
                >
                  Learn More <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="relative lg:col-span-5 lg:-mr-8 xl:col-span-6">
            <div className="h-full w-full aspect-w-4 aspect-h-3 overflow-hidden rounded-l-2xl">
              <Image
                src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                alt="Fashion Shopping"
                width={2070}
                height={1380}
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold font-display text-center mb-12 text-[var(--foreground)]">
          Browse Categories
        </h2>
        <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
          {categories.map((category) => (
            <div key={category.name} className="group relative">
              <div className="h-56 w-full overflow-hidden rounded-lg bg-[var(--muted)] group-hover:opacity-90 transition duration-200">
                <Image
                  src={category.imageSrc}
                  alt={category.name}
                  width={1000}
                  height={800}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Link
                  href={category.href}
                  className="bg-[var(--background)]/80 backdrop-blur-sm px-6 py-3 rounded-md font-display font-medium text-lg hover:bg-[var(--background)] transition duration-200"
                >
                  {category.name}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Products */}
      <div className="bg-[var(--muted)]/30 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold font-display text-center mb-12 text-[var(--foreground)]">
            Featured Products
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {featuredProducts.map((product) => (
              <div key={product.id} className="group relative">
                <div className="aspect-w-3 aspect-h-4 w-full overflow-hidden rounded-lg bg-[var(--muted)] hover:shadow-md transition duration-200">
                  <Image
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center"
                    width={600}
                    height={800}
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                    <h3 className="text-sm text-white">
                      <Link href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </Link>
                    </h3>
                    <p className="mt-1 text-sm font-medium text-white">
                      {product.price}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-[var(--background)] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-[var(--primary)]/10 px-6 py-16 sm:p-16">
            <div className="mx-auto max-w-xl lg:max-w-none">
              <div className="text-center">
                <h2 className="text-2xl font-bold tracking-tight font-display text-[var(--foreground)]">
                  Subscribe to Our Newsletter
                </h2>
                <p className="mt-4 text-lg leading-8 text-[var(--foreground)]/80">
                  Be the first to receive latest product updates and exclusive
                  discounts.
                </p>
              </div>
              <form className="mx-auto mt-10 flex max-w-md gap-x-4">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="min-w-0 flex-auto rounded-md border-0 bg-white px-3.5 py-2 text-[var(--foreground)] shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-[var(--primary)] sm:text-sm sm:leading-6"
                  placeholder="Enter your email"
                />
                <button
                  type="submit"
                  className="flex-none rounded-md bg-[var(--primary)] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[var(--primary)]/90 transition duration-200"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
