"use client"

import { useState } from "react"
import { use } from "react"
import Image from "next/image"
import Link from "next/link"
import { Calendar, User, Tag, ArrowLeft, Share2, Facebook, Twitter } from "lucide-react"
import { MOCK_NEWS_ARTICLES } from "@/lib/mockData"
import { formatDate } from "@/lib/utils"

interface ArticleDetailPageProps {
  params: Promise<{ articleId: string }>
}

export default function ArticleDetailPage({ params }: ArticleDetailPageProps) {
  const { articleId } = use(params)
  const [language, setLanguage] = useState<"vi" | "en">("vi")

  const article = MOCK_NEWS_ARTICLES.find((a) => a.id === articleId)

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            {language === "vi" ? "Không tìm thấy bài viết" : "Article not found"}
          </h1>
          <Link href="/news" className="text-green-600 hover:text-green-700">
            {language === "vi" ? "Quay lại tin tức" : "Back to news"}
          </Link>
        </div>
      </div>
    )
  }

  const relatedArticles = MOCK_NEWS_ARTICLES.filter((a) => a.id !== articleId).slice(0, 3)

  const texts = {
    vi: {
      backToNews: "Quay lại tin tức",
      by: "Bởi",
      share: "Chia sẻ",
      relatedArticles: "Bài viết liên quan",
      readMore: "Đọc thêm",
    },
    en: {
      backToNews: "Back to news",
      by: "By",
      share: "Share",
      relatedArticles: "Related articles",
      readMore: "Read more",
    },
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Link href="/news" className="inline-flex items-center text-green-600 hover:text-green-700 mb-8 font-medium">
          <ArrowLeft className="w-4 h-4 mr-2" />
          {texts[language].backToNews}
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <article className="bg-white rounded-lg shadow-md overflow-hidden">
              {/* Featured Image */}
              <Image
                src={article.thumbnailUrl || "/placeholder.svg"}
                alt={language === "vi" ? article.title : article.titleEn}
                width={800}
                height={400}
                className="w-full h-64 md:h-80 object-cover"
              />

              <div className="p-8">
                {/* Article Meta */}
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6">
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
                  <div className="flex items-center gap-1">
                    <Tag className="w-4 h-4" />
                    <span className="bg-green-100 text-green-600 px-2 py-1 rounded">
                      {language === "vi" ? article.category : article.categoryEn}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                  {language === "vi" ? article.title : article.titleEn}
                </h1>

                {/* Share Buttons */}
                <div className="flex items-center gap-4 mb-8 pb-6 border-b">
                  <span className="text-gray-600 font-medium">{texts[language].share}:</span>
                  <div className="flex gap-2">
                    <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
                      <Facebook className="w-4 h-4" />
                      Facebook
                    </button>
                    <button className="flex items-center gap-2 bg-blue-400 hover:bg-blue-500 text-white px-4 py-2 rounded-lg transition-colors">
                      <Twitter className="w-4 h-4" />
                      Twitter
                    </button>
                    <button className="flex items-center gap-2 bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors">
                      <Share2 className="w-4 h-4" />
                      {texts[language].share}
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div
                  className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
                  dangerouslySetInnerHTML={{
                    __html: language === "vi" ? article.content : article.contentEn,
                  }}
                />
              </div>
            </article>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <h3 className="text-xl font-bold text-gray-800 mb-6">{texts[language].relatedArticles}</h3>

              <div className="space-y-6">
                {relatedArticles.map((relatedArticle) => (
                  <Link key={relatedArticle.id} href={`/news/${relatedArticle.id}`} className="block group">
                    <div className="flex gap-4">
                      <Image
                        src={relatedArticle.thumbnailUrl || "/placeholder.svg"}
                        alt={language === "vi" ? relatedArticle.title : relatedArticle.titleEn}
                        width={80}
                        height={60}
                        className="w-20 h-15 object-cover rounded flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-gray-800 group-hover:text-green-600 transition-colors line-clamp-2 mb-1">
                          {language === "vi" ? relatedArticle.title : relatedArticle.titleEn}
                        </h4>
                        <p className="text-sm text-gray-500">{formatDate(relatedArticle.publishDate)}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
