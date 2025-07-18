"use client"

import { useState } from "react"
import Link from "next/link"
import ProductCard from "@/components/shop/ProductCard"
import { MOCK_PRODUCTS } from "@/lib/mockData"

export default function ProductShowcase() {
  const [language] = useState<"vi" | "en">("vi")
  const featuredProducts = MOCK_PRODUCTS.slice(0, 4)

  const texts = {
    vi: {
      title: "Sản Phẩm Nổi Bật",
      subtitle: "Khám phá những sản phẩm nông sản tươi ngon, chất lượng cao được khách hàng yêu thích nhất",
      viewAll: "Xem Tất Cả Sản Phẩm",
    },
    en: {
      title: "Featured Products",
      subtitle: "Discover the freshest, highest quality agricultural products loved by our customers",
      viewAll: "View All Products",
    },
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{texts[language].title}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{texts[language].subtitle}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/shop"
            className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
          >
            {texts[language].viewAll}
          </Link>
        </div>
      </div>
    </section>
  )
}
