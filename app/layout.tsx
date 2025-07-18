import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/common/Header"
import Footer from "@/components/common/Footer"
import FloatingChat from "@/components/common/FloatingChat"
import FloatingSocial from "@/components/common/FloatingSocial"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "NôngSản - Nông Sản Sạch Từ Nông Trại Đến Bàn Ăn",
  description: "Chuyên cung cấp nông sản tươi ngon, sạch sẽ và an toàn. Giao hàng nhanh chóng, chất lượng đảm bảo.",
  keywords: "nông sản, rau củ, trái cây, thực phẩm sạch, hữu cơ",
    generator: 'Quách Long'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <FloatingChat language="vi" />
        <FloatingSocial />
      </body>
    </html>
  )
}
