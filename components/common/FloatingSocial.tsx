"use client"

import { useState } from "react"
import { Facebook, Instagram, Youtube, Phone, Mail, ChevronUp, ChevronDown } from "lucide-react"

export default function FloatingSocial() {
  const [isExpanded, setIsExpanded] = useState(false)

  const socialLinks = [
    { icon: Facebook, href: "#", color: "bg-blue-600 hover:bg-blue-700", label: "Facebook" },
    { icon: Instagram, href: "#", color: "bg-pink-600 hover:bg-pink-700", label: "Instagram" },
    { icon: Youtube, href: "#", color: "bg-red-600 hover:bg-red-700", label: "YouTube" },
    { icon: Phone, href: "tel:0123456789", color: "bg-green-600 hover:bg-green-700", label: "Hotline" },
    { icon: Mail, href: "mailto:info@nongsan.vn", color: "bg-gray-600 hover:bg-gray-700", label: "Email" },
  ]

  return (
    <div className="fixed left-6 top-1/2 transform -translate-y-1/2 z-40">
      <div className="flex flex-col items-center space-y-2">
        {/* Toggle Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="bg-green-600 hover:bg-green-700 text-white p-3 rounded-full shadow-lg transition-all duration-300"
        >
          {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
        </button>

        {/* Social Links */}
        <div
          className={`flex flex-col space-y-2 transition-all duration-500 ${
            isExpanded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
        >
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target={social.href.startsWith("http") ? "_blank" : "_self"}
              rel="noopener noreferrer"
              className={`${social.color} text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 group relative`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <social.icon className="w-5 h-5" />

              {/* Tooltip */}
              <div className="absolute left-full ml-3 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-2 py-1 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                {social.label}
                <div className="absolute right-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-r-gray-800"></div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
