"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ExternalLink, MapPin, Users, Award, Handshake, Globe, Phone, Mail } from "lucide-react"

export default function PartnersPage() {
  const [language, setLanguage] = useState<"vi" | "en">("vi")

  const partnerCategories = [
    {
      id: "suppliers",
      title: language === "vi" ? "Nhà Cung Cấp" : "Suppliers",
      description: language === "vi" ? "Các nông trại và nhà cung cấp nguyên liệu" : "Farms and raw material suppliers",
      partners: [
        {
          id: "dalat-farm",
          name: "Nông Trại Đà Lạt Xanh",
          nameEn: "Dalat Green Farm",
          logo: "/placeholder.svg?height=100&width=100",
          description:
            language === "vi"
              ? "Chuyên cung cấp rau củ hữu cơ từ Đà Lạt"
              : "Specializing in organic vegetables from Dalat",
          location: "Đà Lạt, Lâm Đồng",
          established: "2015",
          website: "https://dalatgreenfarm.vn",
          phone: "0263 123 456",
          email: "info@dalatgreenfarm.vn",
          certifications: ["VietGAP", "Organic"],
          products: ["Rau củ hữu cơ", "Trái cây sạch"],
        },
        {
          id: "mekong-fruits",
          name: "Trái Cây Miền Tây",
          nameEn: "Mekong Fruits Co.",
          logo: "/placeholder.svg?height=100&width=100",
          description:
            language === "vi"
              ? "Nhà cung cấp trái cây tươi từ đồng bằng sông Cửu Long"
              : "Fresh fruit supplier from Mekong Delta",
          location: "Cần Thơ, Việt Nam",
          established: "2012",
          website: "https://mekongfruits.vn",
          phone: "0292 123 456",
          email: "contact@mekongfruits.vn",
          certifications: ["HACCP", "ISO 22000"],
          products: ["Xoài", "Dừa", "Thanh long"],
        },
        {
          id: "highland-herbs",
          name: "Thảo Mộc Cao Nguyên",
          nameEn: "Highland Herbs Farm",
          logo: "/placeholder.svg?height=100&width=100",
          description:
            language === "vi"
              ? "Chuyên trồng và cung cấp thảo mộc sạch"
              : "Specializing in growing and supplying clean herbs",
          location: "Sapa, Lào Cai",
          established: "2018",
          website: "https://highlandherbs.vn",
          phone: "0214 123 456",
          email: "herbs@highland.vn",
          certifications: ["Organic", "Fair Trade"],
          products: ["Thảo mộc", "Gia vị tự nhiên"],
        },
      ],
    },
    {
      id: "logistics",
      title: language === "vi" ? "Đối Tác Vận Chuyển" : "Logistics Partners",
      description: language === "vi" ? "Các đơn vị vận chuyển và logistics" : "Transportation and logistics companies",
      partners: [
        {
          id: "fresh-logistics",
          name: "Fresh Logistics Vietnam",
          nameEn: "Fresh Logistics Vietnam",
          logo: "/placeholder.svg?height=100&width=100",
          description:
            language === "vi"
              ? "Chuyên vận chuyển thực phẩm tươi sống với hệ thống lạnh"
              : "Specializing in fresh food transportation with cold chain system",
          location: "TP.HCM, Việt Nam",
          established: "2010",
          website: "https://freshlogistics.vn",
          phone: "028 123 456",
          email: "service@freshlogistics.vn",
          certifications: ["ISO 9001", "HACCP"],
          services: ["Vận chuyển lạnh", "Kho bảo quản", "Giao hàng nhanh"],
        },
        {
          id: "green-delivery",
          name: "Green Delivery Express",
          nameEn: "Green Delivery Express",
          logo: "/placeholder.svg?height=100&width=100",
          description:
            language === "vi"
              ? "Dịch vụ giao hàng nhanh thân thiện môi trường"
              : "Eco-friendly express delivery service",
          location: "Hà Nội, Việt Nam",
          established: "2019",
          website: "https://greendelivery.vn",
          phone: "024 123 456",
          email: "info@greendelivery.vn",
          certifications: ["Green Certificate"],
          services: ["Giao hàng trong ngày", "Xe điện", "Đóng gói sinh thái"],
        },
      ],
    },
    {
      id: "technology",
      title: language === "vi" ? "Đối Tác Công Nghệ" : "Technology Partners",
      description:
        language === "vi" ? "Các công ty công nghệ và giải pháp số" : "Technology companies and digital solutions",
      partners: [
        {
          id: "agritech-solutions",
          name: "AgriTech Solutions",
          nameEn: "AgriTech Solutions",
          logo: "/placeholder.svg?height=100&width=100",
          description:
            language === "vi"
              ? "Giải pháp công nghệ cho nông nghiệp thông minh"
              : "Technology solutions for smart agriculture",
          location: "TP.HCM, Việt Nam",
          established: "2020",
          website: "https://agritech.vn",
          phone: "028 987 654",
          email: "tech@agritech.vn",
          certifications: ["ISO 27001"],
          services: ["IoT nông nghiệp", "AI phân tích", "Blockchain truy xuất"],
        },
        {
          id: "farm-management",
          name: "Smart Farm Management",
          nameEn: "Smart Farm Management",
          logo: "/placeholder.svg?height=100&width=100",
          description: language === "vi" ? "Hệ thống quản lý nông trại thông minh" : "Smart farm management system",
          location: "Đà Nẵng, Việt Nam",
          established: "2021",
          website: "https://smartfarm.vn",
          phone: "0236 123 456",
          email: "support@smartfarm.vn",
          certifications: ["ISO 9001"],
          services: ["Quản lý nông trại", "Giám sát từ xa", "Báo cáo tự động"],
        },
      ],
    },
    {
      id: "certification",
      title: language === "vi" ? "Tổ Chức Chứng Nhận" : "Certification Bodies",
      description:
        language === "vi"
          ? "Các tổ chức chứng nhận chất lượng và tiêu chuẩn"
          : "Quality and standard certification organizations",
      partners: [
        {
          id: "vietnam-organic",
          name: "Tổ Chức Chứng Nhận Hữu Cơ Việt Nam",
          nameEn: "Vietnam Organic Certification",
          logo: "/placeholder.svg?height=100&width=100",
          description:
            language === "vi"
              ? "Tổ chức chứng nhận sản phẩm hữu cơ hàng đầu"
              : "Leading organic product certification organization",
          location: "Hà Nội, Việt Nam",
          established: "2008",
          website: "https://vietnamorganic.gov.vn",
          phone: "024 987 654",
          email: "cert@vietnamorganic.gov.vn",
          certifications: ["ISO 17065"],
          services: ["Chứng nhận hữu cơ", "Kiểm tra chất lượng", "Đào tạo tiêu chuẩn"],
        },
        {
          id: "sgs-vietnam",
          name: "SGS Việt Nam",
          nameEn: "SGS Vietnam",
          logo: "/placeholder.svg?height=100&width=100",
          description:
            language === "vi"
              ? "Tổ chức kiểm tra, thử nghiệm và chứng nhận quốc tế"
              : "International inspection, testing and certification organization",
          location: "TP.HCM, Việt Nam",
          established: "1995",
          website: "https://sgs.com.vn",
          phone: "028 111 222",
          email: "vietnam@sgs.com",
          certifications: ["ISO 17025", "ISO 17065"],
          services: ["Kiểm tra chất lượng", "Chứng nhận ISO", "Đào tạo"],
        },
      ],
    },
  ]

  const partnerStats = [
    {
      number: "50+",
      label: language === "vi" ? "Đối tác chiến lược" : "Strategic Partners",
      icon: Handshake,
    },
    {
      number: "15+",
      label: language === "vi" ? "Tỉnh thành" : "Provinces",
      icon: MapPin,
    },
    {
      number: "500+",
      label: language === "vi" ? "Nông hộ hợp tác" : "Cooperating Farmers",
      icon: Users,
    },
    {
      number: "20+",
      label: language === "vi" ? "Chứng nhận chất lượng" : "Quality Certifications",
      icon: Award,
    },
  ]

  const texts = {
    vi: {
      title: "Đối Tác Của Chúng Tôi",
      subtitle: "Mạng lưới đối tác tin cậy giúp chúng tôi mang đến sản phẩm chất lượng cao",
      established: "Thành lập",
      location: "Địa điểm",
      website: "Website",
      contact: "Liên hệ",
      certifications: "Chứng nhận",
      products: "Sản phẩm",
      services: "Dịch vụ",
      visitWebsite: "Truy cập website",
      partnerWithUs: "Hợp Tác Với Chúng Tôi",
      partnerDescription:
        "Chúng tôi luôn tìm kiếm những đối tác uy tín để cùng phát triển và mang đến giá trị tốt nhất cho khách hàng.",
      becomePartner: "Trở thành đối tác",
      partnerBenefits: "Lợi ích khi hợp tác",
      benefits: [
        "Hỗ trợ marketing và quảng bá thương hiệu",
        "Đào tạo và chuyển giao công nghệ",
        "Chia sẻ kinh nghiệm và best practices",
        "Mở rộng thị trường và khách hàng",
        "Hỗ trợ tài chính và đầu tư",
      ],
    },
    en: {
      title: "Our Partners",
      subtitle: "Trusted partner network helping us deliver high-quality products",
      established: "Established",
      location: "Location",
      website: "Website",
      contact: "Contact",
      certifications: "Certifications",
      products: "Products",
      services: "Services",
      visitWebsite: "Visit website",
      partnerWithUs: "Partner With Us",
      partnerDescription:
        "We are always looking for reputable partners to develop together and bring the best value to customers.",
      becomePartner: "Become a partner",
      partnerBenefits: "Partnership Benefits",
      benefits: [
        "Marketing and brand promotion support",
        "Training and technology transfer",
        "Experience sharing and best practices",
        "Market and customer expansion",
        "Financial support and investment",
      ],
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
        {/* Partner Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {partnerStats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-6 h-6 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-gray-800 mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Partner Categories */}
        {partnerCategories.map((category) => (
          <div key={category.id} className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">{category.title}</h2>
              <p className="text-lg text-gray-600">{category.description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.partners.map((partner) => (
                <div
                  key={partner.id}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <Image
                        src={partner.logo || "/placeholder.svg"}
                        alt={partner.name}
                        width={60}
                        height={60}
                        className="rounded-lg mr-4"
                      />
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800">{partner.name}</h3>
                        <p className="text-sm text-gray-500">{partner.location}</p>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">{partner.description}</p>

                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-500">{texts[language].established}:</span>
                        <span className="text-gray-700">{partner.established}</span>
                      </div>

                      {partner.certifications && (
                        <div>
                          <span className="text-gray-500 block mb-1">{texts[language].certifications}:</span>
                          <div className="flex flex-wrap gap-1">
                            {partner.certifications.map((cert, index) => (
                              <span key={index} className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">
                                {cert}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {partner.products && (
                        <div>
                          <span className="text-gray-500 block mb-1">{texts[language].products}:</span>
                          <div className="flex flex-wrap gap-1">
                            {partner.products.map((product, index) => (
                              <span key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                                {product}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {partner.services && (
                        <div>
                          <span className="text-gray-500 block mb-1">{texts[language].services}:</span>
                          <div className="flex flex-wrap gap-1">
                            {partner.services.map((service, index) => (
                              <span key={index} className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">
                                {service}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="mt-6 pt-4 border-t flex items-center justify-between">
                      <div className="flex space-x-3">
                        <a
                          href={`tel:${partner.phone}`}
                          className="text-gray-400 hover:text-green-600 transition-colors"
                        >
                          <Phone className="w-4 h-4" />
                        </a>
                        <a
                          href={`mailto:${partner.email}`}
                          className="text-gray-400 hover:text-green-600 transition-colors"
                        >
                          <Mail className="w-4 h-4" />
                        </a>
                        <a
                          href={partner.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-green-600 transition-colors"
                        >
                          <Globe className="w-4 h-4" />
                        </a>
                      </div>
                      <Link
                        href={partner.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-600 hover:text-green-700 text-sm font-medium flex items-center"
                      >
                        {texts[language].visitWebsite}
                        <ExternalLink className="w-3 h-3 ml-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Partnership CTA */}
        <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">{texts[language].partnerWithUs}</h2>
          <p className="text-green-100 mb-8 max-w-2xl mx-auto">{texts[language].partnerDescription}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">{texts[language].partnerBenefits}</h3>
              <ul className="text-left space-y-2">
                {texts[language].benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <Award className="w-5 h-5 mr-2 mt-0.5 text-green-300 flex-shrink-0" />
                    <span className="text-green-100">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex items-center justify-center">
              <Link
                href="/contact"
                className="bg-white text-green-600 hover:bg-green-50 font-bold py-4 px-8 rounded-lg transition-colors inline-flex items-center"
              >
                <Handshake className="w-5 h-5 mr-2" />
                {texts[language].becomePartner}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
