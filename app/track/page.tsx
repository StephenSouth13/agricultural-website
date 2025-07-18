"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Search, Package, Truck, MapPin, Clock } from "lucide-react"

export default function TrackPage() {
  const [orderId, setOrderId] = useState("")

  const recentOrders = [
    {
      id: "ORD001",
      status: "delivered",
      statusText: "Đã giao hàng",
      date: "2025-01-15",
      items: 3,
      total: 350000,
    },
    {
      id: "ORD002",
      status: "in_transit",
      statusText: "Đang vận chuyển",
      date: "2025-01-17",
      items: 2,
      total: 280000,
    },
    {
      id: "ORD003",
      status: "preparing",
      statusText: "Đang chuẩn bị",
      date: "2025-01-18",
      items: 5,
      total: 450000,
    },
  ]

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault()
    if (orderId.trim()) {
      window.location.href = `/track/${orderId.trim()}`
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "delivered":
        return "bg-green-100 text-green-800"
      case "in_transit":
        return "bg-blue-100 text-blue-800"
      case "preparing":
        return "bg-yellow-100 text-yellow-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "delivered":
        return <MapPin className="w-4 h-4" />
      case "in_transit":
        return <Truck className="w-4 h-4" />
      case "preparing":
        return <Package className="w-4 h-4" />
      default:
        return <Clock className="w-4 h-4" />
    }
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Theo Dõi Đơn Hàng</h1>
          <p className="text-xl text-green-100">Kiểm tra trạng thái và vị trí đơn hàng của bạn theo thời gian thực</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Search Form */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="bg-white rounded-xl shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Nhập mã đơn hàng</h2>

            <form onSubmit={handleTrack} className="space-y-4">
              <div className="relative">
                <input
                  type="text"
                  value={orderId}
                  onChange={(e) => setOrderId(e.target.value)}
                  placeholder="Nhập mã đơn hàng (VD: ORD001)"
                  className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-lg"
                />
                <Search className="absolute left-4 top-4.5 w-6 h-6 text-gray-400" />
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-6 rounded-lg transition-colors text-lg"
              >
                Theo dõi đơn hàng
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">Bạn có thể tìm mã đơn hàng trong email xác nhận hoặc tin nhắn SMS</p>
            </div>
          </div>
        </div>

        {/* Recent Orders */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Đơn hàng gần đây</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentOrders.map((order) => (
              <Link
                key={order.id}
                href={`/track/${order.id}`}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-semibold text-gray-800">#{order.id}</h4>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium flex items-center ${getStatusColor(order.status)}`}
                  >
                    {getStatusIcon(order.status)}
                    <span className="ml-1">{order.statusText}</span>
                  </span>
                </div>

                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>Ngày đặt:</span>
                    <span>{new Date(order.date).toLocaleDateString("vi-VN")}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Số sản phẩm:</span>
                    <span>{order.items} sản phẩm</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tổng tiền:</span>
                    <span className="font-semibold text-green-600">{order.total.toLocaleString("vi-VN")}đ</span>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t">
                  <span className="text-green-600 font-medium text-sm">Xem chi tiết →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-8 h-8 text-blue-600" />
            </div>
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Theo dõi thời gian thực</h4>
            <p className="text-gray-600">Xem vị trí chính xác của đơn hàng trên bản đồ</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Truck className="w-8 h-8 text-green-600" />
            </div>
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Thông tin tài xế</h4>
            <p className="text-gray-600">Liên hệ trực tiếp với tài xế giao hàng</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-purple-600" />
            </div>
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Cập nhật liên tục</h4>
            <p className="text-gray-600">Nhận thông báo về mọi thay đổi của đơn hàng</p>
          </div>
        </div>
      </div>
    </div>
  )
}
