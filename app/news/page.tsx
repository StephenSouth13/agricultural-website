"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Search, Calendar, User, Tag } from "lucide-react"
import { MOCK_NEWS_ARTICLES } from "@/lib/mockData"
import { formatDate } from "@/lib/utils"

export default function NewsPage() {
  const [language, setLanguage] = useState<"vi" | "en">("vi")
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("")

  const filteredArticles = MOCK_NEWS_ARTICLES.filter((article) => {
    const title = language === "vi" ? article.title : article.titleEn
    const category = language === "vi" ? article.category : article.categoryEn

    const matchesSearch = title.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = !selectedCategory || category === selectedCategory

    return matchesSearch && matchesCategory
  })

  const categories = [
    ...new Set(MOCK_NEWS_ARTICLES.map((article) => (language === "vi" ? article.category : article.categoryEn))),
  ]

  const texts = {
    vi: {
      title: "Tin Tức Nông Nghiệp",
      subtitle: "Cập nhật những thông tin mới nhất về nông nghiệp và sức khỏe",
      searchPlaceholder: "Tìm kiếm bài viết...",
      allCategories: "Tất cả danh mục",
      readMore: "Đọc thêm",
      by: "Bởi",
      noArticles: "Không tìm thấy bài viết nào",
    },
    en: {
      title: "Agricultural News",
      subtitle: "Latest updates on agriculture and health",
      searchPlaceholder: "Search articles...",
      allCategories: "All categories",
      readMore: "Read more",
      by: "By",
      noArticles: "No articles found",
    },
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-80 bg-gradient-to-r from-green-800 to-green-600 flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: "url('/placeholder.svg?height=320&width=1200')",
          }}
        />
        <div className="relative container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{texts[language].title}</h1>
          <p className="text-xl text-green-100">{texts[language].subtitle}</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Search and Filter */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder={texts[language].searchPlaceholder}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <Search className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
            </div>

            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="">{texts[language].allCategories}</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Articles Grid */}
        {filteredArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <article
                key={article.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <Link href={`/news/${article.id}`}>
                  <Image
                    src={article.thumbnailUrl || "/placeholder.svg"}
                    alt={language === "vi" ? article.title : article.titleEn}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </Link>

                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{formatDate(article.publishDate)}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      <span>
                        {texts[language].by} {article.author}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mb-3">
                    <Tag className="w-4 h-4 text-green-600" />
                    <span className="text-sm bg-green-100 text-green-600 px-2 py-1 rounded">
                      {language === "vi" ? article.category : article.categoryEn}
                    </span>
                  </div>

                  <Link href={`/news/${article.id}`}>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3 hover:text-green-600 transition-colors line-clamp-2">
                      {language === "vi" ? article.title : article.titleEn}
                    </h3>
                  </Link>

                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {language === "vi" ? article.shortDescription : article.shortDescriptionEn}
                  </p>

                  <Link
                    href={`/news/${article.id}`}
                    className="inline-flex items-center text-green-600 hover:text-green-700 font-medium"
                  >
                    {texts[language].readMore} →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">📰</div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">{texts[language].noArticles}</h3>
            <p className="text-gray-500">
              {language === "vi"
                ? "Thử thay đổi từ khóa tìm kiếm hoặc danh mục"
                : "Try changing search keywords or category"}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
