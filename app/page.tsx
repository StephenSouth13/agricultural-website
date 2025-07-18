"use client"

import { useState } from "react"
import HeroSection from "@/components/blocks/HeroSection"
import ProductShowcase from "@/components/blocks/ProductShowcase"
import WhyChooseUs from "@/components/blocks/WhyChooseUs"
import TestimonialsCarousel from "@/components/blocks/TestimonialsCarousel"
import Link from "next/link"
import Image from "next/image"
import { MOCK_NEWS_ARTICLES } from "@/lib/mockData"
import { formatDate } from "@/lib/utils"

export default function HomePage() {
  const [language] = useState<"vi" | "en">("vi")
  const latestNews = MOCK_NEWS_ARTICLES.slice(0, 3)

  const texts = {
    vi: {
      aboutTitle: "Về Chúng Tôi",
      aboutText1:
        "Với hơn 10 năm kinh nghiệm trong lĩnh vực nông nghiệp, chúng tôi tự hào là đơn vị tiên phong trong việc cung cấp các sản phẩm nông sản sạch, an toàn và chất lượng cao.",
      aboutText2:
        "Từ những cánh đồng xanh mướt đến bàn ăn của gia đình bạn, chúng tôi cam kết mang đến những sản phẩm tươi ngon nhất với quy trình sản xuất nghiêm ngặt và công nghệ hiện đại.",
      learnMore: "Tìm Hiểu Thêm",
      newsTitle: "Tin Tức Nông Nghiệp Mới Nhất",
      newsSubtitle: "Cập nhật những thông tin hữu ích về nông nghiệp và sức khỏe",
      viewAllNews: "Xem Tất Cả Tin Tức",
      readMore: "Đọc thêm",
    },
    en: {
      aboutTitle: "About Us",
      aboutText1:
        "With over 10 years of experience in agriculture, we are proud to be a pioneer in providing clean, safe and high-quality agricultural products.",
      aboutText2:
        "From lush green fields to your family's dining table, we are committed to bringing the freshest products with strict production processes and modern technology.",
      learnMore: "Learn More",
      newsTitle: "Latest Agricultural News",
      newsSubtitle: "Stay updated with useful information about agriculture and health",
      viewAllNews: "View All News",
      readMore: "Read more",
    },
  }

  return (
    <>
      <HeroSection />

      {/* About Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Nông trại của chúng tôi"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">{texts[language].aboutTitle}</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">{texts[language].aboutText1}</p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">{texts[language].aboutText2}</p>
              <Link
                href="/about"
                className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
              >
                {texts[language].learnMore}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ProductShowcase />
      <WhyChooseUs />
      <TestimonialsCarousel />

      {/* Latest News Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{texts[language].newsTitle}</h2>
            <p className="text-lg text-gray-600">{texts[language].newsSubtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {latestNews.map((article) => (
              <article
                key={article.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <Image
                  src={article.thumbnailUrl || "/placeholder.svg"}
                  alt={language === "vi" ? article.title : article.titleEn}
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="text-sm text-gray-500 mb-2">{formatDate(article.publishDate)}</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3 line-clamp-2">
                    {language === "vi" ? article.title : article.titleEn}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {language === "vi" ? article.shortDescription : article.shortDescriptionEn}
                  </p>
                  <Link href={`/news/${article.id}`} className="text-green-600 hover:text-green-700 font-medium">
                    {texts[language].readMore} →
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/news"
              className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
            >
              {texts[language].viewAllNews}
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
