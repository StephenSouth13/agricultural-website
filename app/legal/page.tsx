"use client"

import { useState } from "react"
import Image from "next/image"
import { FileText, Download, Eye, Shield, Award, CheckCircle } from "lucide-react"

export default function LegalPage() {
  const [language, setLanguage] = useState<"vi" | "en">("vi")

  const legalDocuments = [
    {
      id: "business-license",
      title: language === "vi" ? "Giấy phép kinh doanh" : "Business License",
      description:
        language === "vi"
          ? "Giấy chứng nhận đăng ký kinh doanh do Sở Kế hoạch và Đầu tư TP.HCM cấp"
          : "Business registration certificate issued by HCMC Department of Planning and Investment",
      issueDate: "2020-03-15",
      expiryDate: "2025-03-15",
      issuer: language === "vi" ? "Sở Kế hoạch và Đầu tư TP.HCM" : "HCMC Department of Planning and Investment",
      documentUrl: "/documents/business-license.pdf",
      thumbnailUrl: "/placeholder.svg?height=200&width=150",
      status: "active",
    },
    {
      id: "food-safety",
      title: language === "vi" ? "Giấy chứng nhận an toàn thực phẩm" : "Food Safety Certificate",
      description:
        language === "vi"
          ? "Chứng nhận đảm bảo an toàn thực phẩm theo tiêu chuẩn HACCP"
          : "Food safety certification according to HACCP standards",
      issueDate: "2023-06-20",
      expiryDate: "2026-06-20",
      issuer: language === "vi" ? "Cục An toàn thực phẩm" : "Food Safety Department",
      documentUrl: "/documents/food-safety.pdf",
      thumbnailUrl: "/placeholder.svg?height=200&width=150",
      status: "active",
    },
    {
      id: "organic-cert",
      title: language === "vi" ? "Chứng nhận hữu cơ" : "Organic Certification",
      description:
        language === "vi"
          ? "Chứng nhận sản phẩm hữu cơ theo tiêu chuẩn quốc tế"
          : "Organic product certification according to international standards",
      issueDate: "2023-01-10",
      expiryDate: "2026-01-10",
      issuer: language === "vi" ? "Tổ chức chứng nhận hữu cơ Việt Nam" : "Vietnam Organic Certification Organization",
      documentUrl: "/documents/organic-cert.pdf",
      thumbnailUrl: "/placeholder.svg?height=200&width=150",
      status: "active",
    },
    {
      id: "tax-cert",
      title: language === "vi" ? "Giấy chứng nhận thuế" : "Tax Certificate",
      description:
        language === "vi" ? "Giấy chứng nhận đăng ký thuế và mã số thuế" : "Tax registration certificate and tax code",
      issueDate: "2020-03-20",
      expiryDate: "N/A",
      issuer: language === "vi" ? "Cục Thuế TP.HCM" : "HCMC Tax Department",
      documentUrl: "/documents/tax-cert.pdf",
      thumbnailUrl: "/placeholder.svg?height=200&width=150",
      status: "active",
    },
    {
      id: "quality-cert",
      title: language === "vi" ? "Chứng nhận ISO 22000" : "ISO 22000 Certificate",
      description:
        language === "vi"
          ? "Chứng nhận hệ thống quản lý an toàn thực phẩm ISO 22000:2018"
          : "Food safety management system certification ISO 22000:2018",
      issueDate: "2022-09-15",
      expiryDate: "2025-09-15",
      issuer: language === "vi" ? "Tổ chức chứng nhận SGS" : "SGS Certification Organization",
      documentUrl: "/documents/iso-22000.pdf",
      thumbnailUrl: "/placeholder.svg?height=200&width=150",
      status: "active",
    },
    {
      id: "export-license",
      title: language === "vi" ? "Giấy phép xuất khẩu" : "Export License",
      description:
        language === "vi"
          ? "Giấy phép xuất khẩu nông sản sang các nước ASEAN"
          : "Agricultural export license to ASEAN countries",
      issueDate: "2023-04-01",
      expiryDate: "2026-04-01",
      issuer:
        language === "vi" ? "Bộ Nông nghiệp và Phát triển nông thôn" : "Ministry of Agriculture and Rural Development",
      documentUrl: "/documents/export-license.pdf",
      thumbnailUrl: "/placeholder.svg?height=200&width=150",
      status: "active",
    },
  ]

  const certifications = [
    {
      name: "HACCP",
      description:
        language === "vi"
          ? "Hệ thống phân tích mối nguy và điểm kiểm soát tới hạn"
          : "Hazard Analysis and Critical Control Points",
      logo: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "ISO 22000",
      description: language === "vi" ? "Tiêu chuẩn quản lý an toàn thực phẩm" : "Food safety management standard",
      logo: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "VietGAP",
      description: language === "vi" ? "Thực hành nông nghiệp tốt Việt Nam" : "Vietnam Good Agricultural Practices",
      logo: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Organic",
      description: language === "vi" ? "Chứng nhận sản phẩm hữu cơ" : "Organic product certification",
      logo: "/placeholder.svg?height=80&width=80",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800"
      case "expired":
        return "bg-red-100 text-red-800"
      case "pending":
        return "bg-yellow-100 text-yellow-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const texts = {
    vi: {
      title: "Giấy Tờ Pháp Lý",
      subtitle: "Tất cả giấy tờ pháp lý và chứng nhận chất lượng của chúng tôi",
      documentsTitle: "Giấy Tờ Pháp Lý",
      certificationsTitle: "Chứng Nhận Chất Lượng",
      issueDate: "Ngày cấp",
      expiryDate: "Ngày hết hạn",
      issuer: "Cơ quan cấp",
      status: "Trạng thái",
      active: "Còn hiệu lực",
      download: "Tải xuống",
      view: "Xem",
      companyInfo: "Thông Tin Công Ty",
      companyName: "Công ty TNHH Nông Sản Sạch Việt Nam",
      taxCode: "Mã số thuế: 0123456789",
      address: "Địa chỉ: 123 Đường Nông Nghiệp, Phường 1, Quận 1, TP.HCM",
      phone: "Điện thoại: 0123 456 789",
      email: "Email: info@nongsan.vn",
      website: "Website: nongsan.vn",
    },
    en: {
      title: "Legal Documents",
      subtitle: "All our legal documents and quality certifications",
      documentsTitle: "Legal Documents",
      certificationsTitle: "Quality Certifications",
      issueDate: "Issue Date",
      expiryDate: "Expiry Date",
      issuer: "Issuer",
      status: "Status",
      active: "Active",
      download: "Download",
      view: "View",
      companyInfo: "Company Information",
      companyName: "Vietnam Clean Agricultural Products Co., Ltd.",
      taxCode: "Tax Code: 0123456789",
      address: "Address: 123 Agriculture Street, Ward 1, District 1, HCMC",
      phone: "Phone: 0123 456 789",
      email: "Email: info@nongsan.vn",
      website: "Website: nongsan.vn",
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
        {/* Company Information */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <Shield className="w-6 h-6 mr-3 text-green-600" />
            {texts[language].companyInfo}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <p className="text-gray-700">
                <strong>{texts[language].companyName}</strong>
              </p>
              <p className="text-gray-600">{texts[language].taxCode}</p>
              <p className="text-gray-600">{texts[language].address}</p>
            </div>
            <div className="space-y-3">
              <p className="text-gray-600">{texts[language].phone}</p>
              <p className="text-gray-600">{texts[language].email}</p>
              <p className="text-gray-600">{texts[language].website}</p>
            </div>
          </div>
        </div>

        {/* Legal Documents */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 flex items-center">
            <FileText className="w-6 h-6 mr-3 text-green-600" />
            {texts[language].documentsTitle}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {legalDocuments.map((doc) => (
              <div
                key={doc.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">{doc.title}</h3>
                      <p className="text-sm text-gray-600 mb-3">{doc.description}</p>
                    </div>
                    <Image
                      src={doc.thumbnailUrl || "/placeholder.svg"}
                      alt={doc.title}
                      width={60}
                      height={80}
                      className="rounded border shadow-sm"
                    />
                  </div>

                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-500">{texts[language].issueDate}:</span>
                      <span className="text-gray-700">{new Date(doc.issueDate).toLocaleDateString("vi-VN")}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">{texts[language].expiryDate}:</span>
                      <span className="text-gray-700">
                        {doc.expiryDate === "N/A" ? "N/A" : new Date(doc.expiryDate).toLocaleDateString("vi-VN")}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">{texts[language].issuer}:</span>
                      <span className="text-gray-700 text-right text-xs">{doc.issuer}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-4 pt-4 border-t">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(doc.status)}`}>
                      <CheckCircle className="w-3 h-3 inline mr-1" />
                      {texts[language].active}
                    </span>
                    <div className="flex space-x-2">
                      <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors">
                        <Download className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-8 flex items-center">
            <Award className="w-6 h-6 mr-3 text-green-600" />
            {texts[language].certificationsTitle}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-20 h-20 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                  <Image
                    src={cert.logo || "/placeholder.svg"}
                    alt={cert.name}
                    width={60}
                    height={60}
                    className="rounded"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{cert.name}</h3>
                <p className="text-sm text-gray-600">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Legal Notice */}
        <div className="mt-12 bg-blue-50 rounded-xl p-6">
          <div className="flex items-start">
            <Shield className="w-6 h-6 text-blue-600 mt-1 mr-3 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-semibold text-blue-800 mb-2">
                {language === "vi" ? "Cam Kết Pháp Lý" : "Legal Commitment"}
              </h3>
              <p className="text-blue-700 text-sm leading-relaxed">
                {language === "vi"
                  ? "Tất cả các giấy tờ pháp lý và chứng nhận trên đây đều có hiệu lực và được cập nhật thường xuyên. Chúng tôi cam kết tuân thủ đầy đủ các quy định pháp luật về an toàn thực phẩm, chất lượng sản phẩm và bảo vệ quyền lợi người tiêu dùng."
                  : "All legal documents and certifications above are valid and regularly updated. We are committed to full compliance with legal regulations on food safety, product quality and consumer protection."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
