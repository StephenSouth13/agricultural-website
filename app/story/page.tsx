"use client"

import { useState } from "react"
import Image from "next/image"
import { MOCK_STORY_CONTENT } from "@/lib/mockData"
import { ChevronRight } from "lucide-react"

export default function StoryPage() {
  const [language, setLanguage] = useState<"vi" | "en">("vi")
  const content = MOCK_STORY_CONTENT[language]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-green-800 to-green-600 flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: "url('/placeholder.svg?height=400&width=1200')",
          }}
        />
        <div className="relative container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{content.title}</h1>
          <p className="text-xl md:text-2xl text-green-100">{content.subtitle}</p>
        </div>
      </section>

      {/* Story Timeline */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {content.sections.map((section, index) => (
              <div key={index} className="relative">
                {/* Timeline Line */}
                {index < content.sections.length - 1 && (
                  <div className="absolute left-8 top-20 w-0.5 h-32 bg-green-200 hidden md:block"></div>
                )}

                <div
                  className={`flex flex-col md:flex-row items-center gap-8 mb-16 ${
                    index % 2 === 1 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="hidden md:flex w-16 h-16 bg-green-600 rounded-full items-center justify-center text-white font-bold text-xl flex-shrink-0">
                    {index + 1}
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-white rounded-lg shadow-lg p-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">{section.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-6">{section.content}</p>

                    {/* Mobile Timeline Indicator */}
                    <div className="md:hidden flex items-center text-green-600 font-medium">
                      <span className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-sm font-bold mr-3">
                        {index + 1}
                      </span>
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Image */}
                  <div className="flex-1">
                    <Image
                      src={section.image || "/placeholder.svg"}
                      alt={section.title}
                      width={500}
                      height={300}
                      className="rounded-lg shadow-lg w-full h-64 object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              {language === "vi" ? "Giá Trị Cốt Lõi" : "Core Values"}
            </h2>
            <p className="text-lg text-gray-600">
              {language === "vi"
                ? "Những giá trị định hướng mọi hoạt động của chúng tôi"
                : "Values that guide all our activities"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🌱",
                title: language === "vi" ? "Bền Vững" : "Sustainable",
                description:
                  language === "vi"
                    ? "Cam kết bảo vệ môi trường và phát triển bền vững"
                    : "Committed to environmental protection and sustainable development",
              },
              {
                icon: "❤️",
                title: language === "vi" ? "Tận Tâm" : "Dedicated",
                description:
                  language === "vi" ? "Luôn đặt sức khỏe khách hàng lên hàng đầu" : "Always put customer health first",
              },
              {
                icon: "🏆",
                title: language === "vi" ? "Chất Lượng" : "Quality",
                description:
                  language === "vi"
                    ? "Không ngừng nâng cao chất lượng sản phẩm"
                    : "Continuously improving product quality",
              },
            ].map((value, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
