"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ShoppingCart, Menu, X, Search, User } from "lucide-react"
import { MOCK_CART_ITEMS } from "@/lib/mockData"
import LanguageSwitcher from "./LanguageSwitcher"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [language, setLanguage] = useState<"vi" | "en">("vi")
  const pathname = usePathname()

  const cartItemsCount = MOCK_CART_ITEMS.reduce((total, item) => total + item.quantity, 0)

  const navigationLinks = [
    { href: "/", label: language === "vi" ? "Trang Chủ" : "Home" },
    { href: "/about", label: language === "vi" ? "Giới Thiệu" : "About" },
    { href: "/story", label: language === "vi" ? "Câu Chuyện" : "Our Story" },
    { href: "/shop", label: language === "vi" ? "Cửa Hàng" : "Shop" },
    { href: "/news", label: language === "vi" ? "Tin Tức" : "News" },
    { href: "/contact", label: language === "vi" ? "Liên Hệ" : "Contact" },
  ]

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/"
    }
    return pathname.startsWith(href)
  }

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center group-hover:bg-green-700 transition-colors">
              <span className="text-white font-bold text-lg">🌱</span>
            </div>
            <span className="text-xl font-bold text-green-800 group-hover:text-green-900 transition-colors">
              NôngSản
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-medium transition-all duration-200 relative group ${
                  isActive(link.href) ? "text-green-600" : "text-gray-700 hover:text-green-600"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all duration-200 group-hover:w-full ${
                    isActive(link.href) ? "w-full" : ""
                  }`}
                />
              </Link>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Search Icon */}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-all duration-200"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* User Account */}
            <Link
              href="/login"
              className="hidden md:flex items-center space-x-2 text-gray-700 hover:text-green-600 hover:bg-green-50 px-3 py-2 rounded-lg transition-all duration-200"
            >
              <User className="w-5 h-5" />
              <span className="text-sm font-medium">{language === "vi" ? "Đăng nhập" : "Login"}</span>
            </Link>

            {/* Cart */}
            <Link
              href="/shop/cart"
              className="relative p-2 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-all duration-200 group"
            >
              <ShoppingCart className="w-5 h-5" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
                  {cartItemsCount}
                </span>
              )}
            </Link>

            {/* Language Switcher */}
            <div className="hidden md:block">
              <LanguageSwitcher currentLang={language} onLanguageChange={setLanguage} />
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-all duration-200"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="py-4 border-t animate-slide-down">
            <div className="relative">
              <input
                type="text"
                placeholder={language === "vi" ? "Tìm kiếm sản phẩm..." : "Search products..."}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                autoFocus
              />
              <Search className="absolute right-3 top-3.5 w-5 h-5 text-gray-400" />
            </div>
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t animate-slide-down">
          <nav className="container mx-auto px-4 py-4 space-y-4">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block font-medium transition-all duration-200 py-2 px-3 rounded-lg ${
                  isActive(link.href)
                    ? "text-green-600 bg-green-50"
                    : "text-gray-700 hover:text-green-600 hover:bg-green-50"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center justify-between pt-4 border-t">
              <Link
                href="/login"
                className="flex items-center space-x-2 text-gray-700 hover:text-green-600 hover:bg-green-50 px-3 py-2 rounded-lg transition-all duration-200"
              >
                <User className="w-5 h-5" />
                <span>{language === "vi" ? "Đăng nhập" : "Login"}</span>
              </Link>
              <LanguageSwitcher currentLang={language} onLanguageChange={setLanguage} />
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
