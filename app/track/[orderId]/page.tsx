"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowLeft,
  Package,
  Truck,
  MapPin,
  Clock,
  Phone,
  User,
  CheckCircle,
  Circle,
  Navigation,
  Star,
  MessageCircle,
} from "lucide-react"

interface TrackingPageProps {
  params: { orderId: string }
}

export default function TrackingPage({ params }: TrackingPageProps) {
  const { orderId } = params
  const [currentLocation, setCurrentLocation] = useState({ lat: 10.8231, lng: 106.6297 })

  // Mock order data
  const orderData = {
    id: orderId,
    status: "in_transit",
    estimatedDelivery: "2025-01-18 15:30",
    totalAmount: 450000,
    items: [
      {
        id: "1",
        name: "Cà chua Đà Lạt tươi sạch",
        quantity: 2,
        price: 35000,
        image: "/placeholder.svg?height=60&width=60",
      },
      {
        id: "2",
        name: "Dâu tây Mộc Châu loại 1",
        quantity: 1,
        price: 120000,
        image: "/placeholder.svg?height=60&width=60",
      },
    ],
    customer: {
      name: "Nguyễn Văn A",
      phone: "0123 456 789",
      address: "123 Đường ABC, Phường 1, Quận 1, TP.HCM",
    },
    driver: {
      name: "Trần Văn B",
      phone: "0987 654 321",
      avatar: "/placeholder.svg?height=60&width=60",
      rating: 4.8,
      vehicleNumber: "51A-12345",
      vehicleType: "Xe tải lạnh",
    },
    shipper: {
      company: "Fresh Logistics Vietnam",
      phone: "1900 123 456",
      logo: "/placeholder.svg?height=40&width=120",
    },
    timeline: [
      {
        id: "1",
        status: "order_placed",
        title: "Đơn hàng được đặt",
        description: "Đơn hàng đã được xác nhận và đang chuẩn bị",
        timestamp: "2025-01-17 09:00",
        completed: true,
        location: "Kho NôngSản - TP.HCM",
      },
      {
        id: "2",
        status: "preparing",
        title: "Đang chuẩn bị hàng",
        description: "Nhân viên đang kiểm tra và đóng gói sản phẩm",
        timestamp: "2025-01-17 10:30",
        completed: true,
        location: "Kho NôngSản - TP.HCM",
      },
      {
        id: "3",
        status: "picked_up",
        title: "Đã lấy hàng",
        description: "Tài xế đã nhận hàng và bắt đầu vận chuyển",
        timestamp: "2025-01-17 14:00",
        completed: true,
        location: "Kho NôngSản - TP.HCM",
      },
      {
        id: "4",
        status: "in_transit",
        title: "Đang vận chuyển",
        description: "Hàng đang trên đường giao đến địa chỉ của bạn",
        timestamp: "2025-01-18 08:00",
        completed: true,
        location: "Đang di chuyển",
        isActive: true,
      },
      {
        id: "5",
        status: "out_for_delivery",
        title: "Đang giao hàng",
        description: "Tài xế đang giao hàng đến địa chỉ của bạn",
        timestamp: "Dự kiến 14:30",
        completed: false,
        location: "Gần địa chỉ giao hàng",
      },
      {
        id: "6",
        status: "delivered",
        title: "Đã giao hàng",
        description: "Đơn hàng đã được giao thành công",
        timestamp: "Dự kiến 15:30",
        completed: false,
        location: "123 Đường ABC, Q1, TP.HCM",
      },
    ],
  }

  // Simulate real-time location updates
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLocation((prev) => ({
        lat: prev.lat + (Math.random() - 0.5) * 0.001,
        lng: prev.lng + (Math.random() - 0.5) * 0.001,
      }))
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const getStatusColor = (status: string) => {
    switch (status) {
      case "delivered":
        return "text-green-600"
      case "in_transit":
      case "out_for_delivery":
        return "text-blue-600"
      case "cancelled":
        return "text-red-600"
      default:
        return "text-gray-600"
    }
  }

  const getStatusBg = (status: string) => {
    switch (status) {
      case "delivered":
        return "bg-green-100"
      case "in_transit":
      case "out_for_delivery":
        return "bg-blue-100"
      case "cancelled":
        return "bg-red-100"
      default:
        return "bg-gray-100"
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/shop" className="flex items-center text-gray-600 hover:text-green-600 transition-colors">
                <ArrowLeft className="w-5 h-5 mr-2" />
                Quay lại cửa hàng
              </Link>
            </div>
            <div className="text-right">
              <h1 className="text-xl font-bold text-gray-800">Theo dõi đơn hàng</h1>
              <p className="text-sm text-gray-500">#{orderId}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Order Status Card */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">Trạng thái đơn hàng</h2>
                  <p className="text-gray-600">Cập nhật lúc: {new Date().toLocaleString("vi-VN")}</p>
                </div>
                <div className={`px-4 py-2 rounded-full ${getStatusBg(orderData.status)}`}>
                  <span className={`font-semibold ${getStatusColor(orderData.status)}`}>Đang vận chuyển</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Package className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-gray-800">Đã lấy hàng</h3>
                  <p className="text-sm text-gray-500">17/01 14:00</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Truck className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-800">Đang vận chuyển</h3>
                  <p className="text-sm text-gray-500">18/01 08:00</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <MapPin className="w-8 h-8 text-gray-400" />
                  </div>
                  <h3 className="font-semibold text-gray-400">Sẽ giao hàng</h3>
                  <p className="text-sm text-gray-400">Dự kiến 15:30</p>
                </div>
              </div>

              {/* Estimated Delivery */}
              <div className="bg-green-50 rounded-lg p-4 flex items-center">
                <Clock className="w-6 h-6 text-green-600 mr-3" />
                <div>
                  <h4 className="font-semibold text-green-800">Dự kiến giao hàng</h4>
                  <p className="text-green-700">Hôm nay, 18/01/2025 lúc 15:30</p>
                </div>
              </div>
            </div>

            {/* Live Map */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-6 border-b">
                <h3 className="text-xl font-bold text-gray-800 flex items-center">
                  <Navigation className="w-5 h-5 mr-2 text-green-600" />
                  Vị trí hiện tại
                </h3>
                <p className="text-gray-600">Cập nhật thời gian thực</p>
              </div>

              {/* Mock Map */}
              <div className="h-80 bg-gradient-to-br from-green-100 to-blue-100 relative flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                    <Truck className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-gray-700 font-medium">Xe đang di chuyển</p>
                  <p className="text-sm text-gray-500">
                    Tọa độ: {currentLocation.lat.toFixed(4)}, {currentLocation.lng.toFixed(4)}
                  </p>
                </div>

                {/* Route indicators */}
                <div className="absolute top-4 left-4 bg-white rounded-lg p-3 shadow-md">
                  <div className="flex items-center text-sm">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                    <span>Điểm xuất phát</span>
                  </div>
                </div>

                <div className="absolute bottom-4 right-4 bg-white rounded-lg p-3 shadow-md">
                  <div className="flex items-center text-sm">
                    <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                    <span>Điểm giao hàng</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Lịch sử vận chuyển</h3>

              <div className="space-y-6">
                {orderData.timeline.map((event, index) => (
                  <div key={event.id} className="flex items-start">
                    <div className="flex-shrink-0 mr-4">
                      {event.completed ? (
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center ${
                            event.isActive ? "bg-blue-600" : "bg-green-600"
                          }`}
                        >
                          <CheckCircle className="w-5 h-5 text-white" />
                        </div>
                      ) : (
                        <div className="w-8 h-8 rounded-full border-2 border-gray-300 flex items-center justify-center">
                          <Circle className="w-5 h-5 text-gray-300" />
                        </div>
                      )}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h4
                          className={`font-semibold ${
                            event.completed ? (event.isActive ? "text-blue-600" : "text-green-600") : "text-gray-400"
                          }`}
                        >
                          {event.title}
                        </h4>
                        <span className="text-sm text-gray-500">{event.timestamp}</span>
                      </div>
                      <p className="text-gray-600 text-sm mt-1">{event.description}</p>
                      <p className="text-xs text-gray-500 mt-1 flex items-center">
                        <MapPin className="w-3 h-3 mr-1" />
                        {event.location}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Driver Info */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Thông tin tài xế</h3>

              <div className="flex items-center mb-4">
                <Image
                  src={orderData.driver.avatar || "/placeholder.svg"}
                  alt={orderData.driver.name}
                  width={60}
                  height={60}
                  className="rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-800">{orderData.driver.name}</h4>
                  <div className="flex items-center text-sm text-gray-600">
                    <Star className="w-4 h-4 text-yellow-400 mr-1" />
                    <span>{orderData.driver.rating}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">Số xe:</span>
                  <span className="font-medium">{orderData.driver.vehicleNumber}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Loại xe:</span>
                  <span className="font-medium">{orderData.driver.vehicleType}</span>
                </div>
              </div>

              <div className="flex space-x-2 mt-4">
                <a
                  href={`tel:${orderData.driver.phone}`}
                  className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg text-center text-sm font-medium transition-colors flex items-center justify-center"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Gọi
                </a>
                <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-center text-sm font-medium transition-colors flex items-center justify-center">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Chat
                </button>
              </div>
            </div>

            {/* Shipping Company */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Đơn vị vận chuyển</h3>

              <div className="flex items-center mb-4">
                <Image
                  src={orderData.shipper.logo || "/placeholder.svg"}
                  alt={orderData.shipper.company}
                  width={120}
                  height={40}
                  className="mr-4"
                />
              </div>

              <p className="text-gray-600 text-sm mb-4">{orderData.shipper.company}</p>

              <a
                href={`tel:${orderData.shipper.phone}`}
                className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-4 rounded-lg text-center text-sm font-medium transition-colors flex items-center justify-center"
              >
                <Phone className="w-4 h-4 mr-2" />
                {orderData.shipper.phone}
              </a>
            </div>

            {/* Order Summary */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Chi tiết đơn hàng</h3>

              <div className="space-y-3 mb-4">
                {orderData.items.map((item) => (
                  <div key={item.id} className="flex items-center">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      width={40}
                      height={40}
                      className="rounded mr-3"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-800 truncate">{item.name}</p>
                      <p className="text-xs text-gray-500">SL: {item.quantity}</p>
                    </div>
                    <p className="text-sm font-semibold text-gray-800">
                      {(item.price * item.quantity).toLocaleString("vi-VN")}đ
                    </p>
                  </div>
                ))}
              </div>

              <div className="border-t pt-3">
                <div className="flex justify-between">
                  <span className="font-bold text-gray-800">Tổng cộng:</span>
                  <span className="font-bold text-green-600">{orderData.totalAmount.toLocaleString("vi-VN")}đ</span>
                </div>
              </div>
            </div>

            {/* Customer Info */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Thông tin người nhận</h3>

              <div className="space-y-3 text-sm">
                <div className="flex items-start">
                  <User className="w-4 h-4 text-gray-400 mr-2 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-800">{orderData.customer.name}</p>
                    <p className="text-gray-600">{orderData.customer.phone}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-4 h-4 text-gray-400 mr-2 mt-0.5" />
                  <p className="text-gray-600">{orderData.customer.address}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
