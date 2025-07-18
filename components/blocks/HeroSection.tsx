"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function HeroSection() {
  const [language] = useState<"vi" | "en">("vi")

  const texts = {
    vi: {
      title: "Hương Vị Tự Nhiên,",
      titleHighlight: "Nâng Tầm Sức Khỏe",
      subtitle: "Nông Sản Sạch Từ Nông Trại Đến Bàn Ăn Của Bạn",
      exploreProducts: "Khám Phá Sản Phẩm Ngay",
      learnMore: "Tìm Hiểu Thêm",
    },
    en: {
      title: "Natural Flavors,",
      titleHighlight: "Enhanced Health",
      subtitle: "Fresh Produce From Farm To Your Table",
      exploreProducts: "Explore Products Now",
      learnMore: "Learn More",
    },
  }

  return (
    <section className="relative h-[600px] bg-gradient-to-r from-green-800 to-green-600 flex items-center">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: "url('/placeholder.svg?height=600&width=1200')",
        }}
      />

      <div className="relative container mx-auto px-4">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            {texts[language].title}
            <br />
            <span className="text-yellow-300">{texts[language].titleHighlight}</span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-green-100">{texts[language].subtitle}</p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/shop"
              className="inline-flex items-center justify-center bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-4 px-8 rounded-lg transition-colors group"
            >
              {texts[language].exploreProducts}
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/about"
              className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-green-800 font-bold py-4 px-8 rounded-lg transition-colors"
            >
              {texts[language].learnMore}
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 120L50 105C100 90 200 60 300 45C400 30 500 30 600 37.5C700 45 800 60 900 67.5C1000 75 1100 75 1150 75L1200 75V120H1150C1100 120 1000 120 900 120C800 120 700 120 600 120C500 120 400 120 300 120C200 120 100 120 50 120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  )
}
