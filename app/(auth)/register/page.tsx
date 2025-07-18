"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Eye, EyeOff, Mail, Lock, User, Phone, ArrowRight } from "lucide-react"

export default function RegisterPage() {
  const [language, setLanguage] = useState<"vi" | "en">("vi")
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
    newsletter: true,
  })

  const texts = {
    vi: {
      title: "Đăng Ký",
      subtitle: "Tạo tài khoản để trải nghiệm dịch vụ tốt nhất",
      fullNameLabel: "Họ và tên",
      emailLabel: "Email",
      phoneLabel: "Số điện thoại",
      passwordLabel: "Mật khẩu",
      confirmPasswordLabel: "Xác nhận mật khẩu",
      agreeTerms: "Tôi đồng ý với",
      termsLink: "Điều khoản dịch vụ",
      and: "và",
      privacyLink: "Chính sách bảo mật",
      newsletter: "Nhận thông tin ưu đãi qua email",
      registerButton: "Đăng ký",
      haveAccount: "Đã có tài khoản?",
      signIn: "Đăng nhập ngay",
      orContinue: "Hoặc tiếp tục với",
      benefits: [
        "Miễn phí vận chuyển đơn đầu tiên",
        "Tích điểm với mỗi đơn hàng",
        "Ưu đãi thành viên độc quyền",
        "Hỗ trợ khách hàng 24/7",
      ],
    },
    en: {
      title: "Sign Up",
      subtitle: "Create an account to experience the best service",
      fullNameLabel: "Full name",
      emailLabel: "Email",
      phoneLabel: "Phone number",
      passwordLabel: "Password",
      confirmPasswordLabel: "Confirm password",
      agreeTerms: "I agree to the",
      termsLink: "Terms of Service",
      and: "and",
      privacyLink: "Privacy Policy",
      newsletter: "Receive promotional emails",
      registerButton: "Sign up",
      haveAccount: "Already have an account?",
      signIn: "Sign in now",
      orContinue: "Or continue with",
      benefits: [
        "Free shipping on first order",
        "Earn points with every order",
        "Exclusive member offers",
        "24/7 customer support",
      ],
    },
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.password !== formData.confirmPassword) {
      alert(language === "vi" ? "Mật khẩu không khớp!" : "Passwords don't match!")
      return
    }
    if (!formData.agreeTerms) {
      alert(language === "vi" ? "Vui lòng đồng ý với điều khoản dịch vụ!" : "Please agree to the terms of service!")
      return
    }
    // Handle registration
    alert(language === "vi" ? "Đăng ký thành công!" : "Registration successful!")
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center py-12 px-4">
      <div className="max-w-5xl w-full bg-white rounded-2xl shadow-2xl overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left Side - Benefits */}
          <div className="bg-gradient-to-br from-green-600 to-green-700 p-8 lg:p-12 flex items-center order-2 lg:order-1">
            <div className="text-white">
              <h2 className="text-3xl font-bold mb-6">
                {language === "vi" ? "Tham gia cộng đồng NôngSản" : "Join NôngSản Community"}
              </h2>

              <div className="space-y-4 mb-8">
                {texts[language].benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-white font-bold">✓</span>
                    </div>
                    <span className="text-green-100">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="p-6 bg-green-500 bg-opacity-20 rounded-lg">
                <h3 className="font-semibold mb-2">
                  {language === "vi" ? "🎉 Chào mừng thành viên mới" : "🎉 Welcome New Member"}
                </h3>
                <p className="text-green-100 text-sm">
                  {language === "vi"
                    ? "Nhận ngay mã giảm giá 15% và miễn phí vận chuyển cho đơn hàng đầu tiên!"
                    : "Get 15% discount code and free shipping for your first order!"}
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="p-8 lg:p-12 order-1 lg:order-2">
            <div className="max-w-md mx-auto">
              {/* Logo */}
              <div className="flex items-center justify-center mb-8">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-xl">🌱</span>
                </div>
                <span className="text-2xl font-bold text-green-800">NôngSản</span>
              </div>

              {/* Header */}
              <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-gray-800 mb-2">{texts[language].title}</h1>
                <p className="text-gray-600">{texts[language].subtitle}</p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                    {texts[language].fullNameLabel}
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder={language === "vi" ? "Nguyễn Văn A" : "John Doe"}
                    />
                    <User className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    {texts[language].emailLabel}
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="your@email.com"
                    />
                    <Mail className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    {texts[language].phoneLabel}
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="0123 456 789"
                    />
                    <Phone className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
                  </div>
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                    {texts[language].passwordLabel}
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-12 pr-12 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="••••••••"
                    />
                    <Lock className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-3.5 text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
                    {texts[language].confirmPasswordLabel}
                  </label>
                  <div className="relative">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      id="confirmPassword"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-12 pr-12 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="••••••••"
                    />
                    <Lock className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-4 top-3.5 text-gray-400 hover:text-gray-600"
                    >
                      {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="flex items-start">
                    <input
                      type="checkbox"
                      name="agreeTerms"
                      checked={formData.agreeTerms}
                      onChange={handleInputChange}
                      required
                      className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500 mt-1"
                    />
                    <span className="ml-2 text-sm text-gray-600">
                      {texts[language].agreeTerms}{" "}
                      <Link href="/terms" className="text-green-600 hover:text-green-700">
                        {texts[language].termsLink}
                      </Link>{" "}
                      {texts[language].and}{" "}
                      <Link href="/privacy" className="text-green-600 hover:text-green-700">
                        {texts[language].privacyLink}
                      </Link>
                    </span>
                  </label>

                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="newsletter"
                      checked={formData.newsletter}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                    />
                    <span className="ml-2 text-sm text-gray-600">{texts[language].newsletter}</span>
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-colors flex items-center justify-center group"
                >
                  {texts[language].registerButton}
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>

              {/* Social Login */}
              <div className="mt-6">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">{texts[language].orContinue}</span>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  <button className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                    <span className="mr-2">🇬</span>
                    Google
                  </button>
                  <button className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                    <span className="mr-2">📘</span>
                    Facebook
                  </button>
                </div>
              </div>

              {/* Sign In Link */}
              <div className="mt-8 text-center">
                <span className="text-gray-600">{texts[language].haveAccount} </span>
                <Link href="/login" className="text-green-600 hover:text-green-700 font-medium">
                  {texts[language].signIn}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
