"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Eye, EyeOff, Mail, Lock, ArrowRight } from "lucide-react"

export default function LoginPage() {
  const [language, setLanguage] = useState<"vi" | "en">("vi")
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  })

  const texts = {
    vi: {
      title: "Đăng Nhập",
      subtitle: "Chào mừng bạn trở lại với NôngSản",
      emailLabel: "Email",
      passwordLabel: "Mật khẩu",
      rememberMe: "Ghi nhớ đăng nhập",
      forgotPassword: "Quên mật khẩu?",
      loginButton: "Đăng nhập",
      noAccount: "Chưa có tài khoản?",
      signUp: "Đăng ký ngay",
      orContinue: "Hoặc tiếp tục với",
      benefits: ["Theo dõi đơn hàng dễ dàng", "Lưu địa chỉ giao hàng", "Nhận ưu đãi độc quyền", "Tích điểm thành viên"],
    },
    en: {
      title: "Login",
      subtitle: "Welcome back to NôngSản",
      emailLabel: "Email",
      passwordLabel: "Password",
      rememberMe: "Remember me",
      forgotPassword: "Forgot password?",
      loginButton: "Login",
      noAccount: "Don't have an account?",
      signUp: "Sign up now",
      orContinue: "Or continue with",
      benefits: ["Track orders easily", "Save delivery addresses", "Get exclusive offers", "Earn member points"],
    },
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle login
    alert(language === "vi" ? "Đăng nhập thành công!" : "Login successful!")
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
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-2xl overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left Side - Form */}
          <div className="p-8 lg:p-12">
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

                <div className="flex items-center justify-between">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="remember"
                      checked={formData.remember}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                    />
                    <span className="ml-2 text-sm text-gray-600">{texts[language].rememberMe}</span>
                  </label>
                  <Link href="/forgot-password" className="text-sm text-green-600 hover:text-green-700">
                    {texts[language].forgotPassword}
                  </Link>
                </div>

                <button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-colors flex items-center justify-center group"
                >
                  {texts[language].loginButton}
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

              {/* Sign Up Link */}
              <div className="mt-8 text-center">
                <span className="text-gray-600">{texts[language].noAccount} </span>
                <Link href="/register" className="text-green-600 hover:text-green-700 font-medium">
                  {texts[language].signUp}
                </Link>
              </div>
            </div>
          </div>

          {/* Right Side - Benefits */}
          <div className="bg-gradient-to-br from-green-600 to-green-700 p-8 lg:p-12 flex items-center">
            <div className="text-white">
              <h2 className="text-3xl font-bold mb-6">{language === "vi" ? "Tại sao nên đăng nhập?" : "Why login?"}</h2>

              <div className="space-y-4">
                {texts[language].benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-white font-bold">✓</span>
                    </div>
                    <span className="text-green-100">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-green-500 bg-opacity-20 rounded-lg">
                <h3 className="font-semibold mb-2">{language === "vi" ? "🎁 Ưu đãi đặc biệt" : "🎁 Special Offer"}</h3>
                <p className="text-green-100 text-sm">
                  {language === "vi"
                    ? "Giảm 10% cho đơn hàng đầu tiên khi đăng ký thành viên mới!"
                    : "10% off your first order when you sign up as a new member!"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
