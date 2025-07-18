"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Star, Plus, Minus, ShoppingCart, Heart, Share2, Truck, Shield, RotateCcw } from "lucide-react"
import { MOCK_PRODUCTS } from "@/lib/mockData"
import { formatCurrency } from "@/lib/utils"
import ProductCard from "@/components/shop/ProductCard"

interface ProductDetailPageProps {
  params: { productId: string }
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { productId } = params
  const [quantity, setQuantity] = useState(1)
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const [activeTab, setActiveTab] = useState("description")

  const product = MOCK_PRODUCTS.find((p) => p.id === productId)

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Không tìm thấy sản phẩm</h1>
          <Link href="/shop" className="text-green-600 hover:text-green-700">
            Quay lại cửa hàng
          </Link>
        </div>
      </div>
    )
  }

  const relatedProducts = MOCK_PRODUCTS.filter((p) => product.relatedProducts?.includes(p.id)).slice(0, 4)

  const discountPercentage = product.oldPrice
    ? Math.round(((product.oldPrice - product.price) / product.price) * 100)
    : 0

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-gray-500 hover:text-green-600">
              Trang chủ
            </Link>
            <span className="text-gray-400">/</span>
            <Link href="/shop" className="text-gray-500 hover:text-green-600">
              Cửa hàng
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-800">{product.name}</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                src={product.images[selectedImageIndex] || "/placeholder.svg"}
                alt={product.name}
                width={600}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex space-x-2 overflow-x-auto">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImageIndex(index)}
                  className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 ${
                    selectedImageIndex === index ? "border-green-600" : "border-gray-200"
                  }`}
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${product.name} ${index + 1}`}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-4">{product.name}</h1>

              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-gray-600">({product.reviewsCount} đánh giá)</span>
                <span className="text-green-600 font-medium">Còn {product.stock} sản phẩm</span>
              </div>

              <div className="flex items-center space-x-4 mb-6">
                <span className="text-3xl font-bold text-green-600">{formatCurrency(product.price)}</span>
                {product.oldPrice && (
                  <>
                    <span className="text-xl text-gray-500 line-through">{formatCurrency(product.oldPrice)}</span>
                    <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-sm font-medium">
                      -{discountPercentage}%
                    </span>
                  </>
                )}
              </div>

              <p className="text-gray-600 leading-relaxed mb-6">{product.description}</p>
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center space-x-4">
              <span className="font-medium text-gray-700">Số lượng:</span>
              <div className="flex items-center border border-gray-300 rounded-lg">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 hover:bg-gray-100 transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-4 py-2 font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                  className="p-2 hover:bg-gray-100 transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex-1 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-colors flex items-center justify-center">
                <ShoppingCart className="w-5 h-5 mr-2" />
                Thêm vào giỏ hàng
              </button>
              <button className="flex items-center justify-center border border-gray-300 hover:border-gray-400 text-gray-700 font-medium py-3 px-6 rounded-lg transition-colors">
                <Heart className="w-5 h-5 mr-2" />
                Yêu thích
              </button>
              <button className="flex items-center justify-center border border-gray-300 hover:border-gray-400 text-gray-700 font-medium py-3 px-6 rounded-lg transition-colors">
                <Share2 className="w-5 h-5" />
              </button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t">
              <div className="flex items-center space-x-3">
                <Truck className="w-6 h-6 text-green-600" />
                <div>
                  <div className="font-medium text-gray-800">Giao hàng nhanh</div>
                  <div className="text-sm text-gray-600">Trong ngày tại HCM</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Shield className="w-6 h-6 text-green-600" />
                <div>
                  <div className="font-medium text-gray-800">Chất lượng đảm bảo</div>
                  <div className="text-sm text-gray-600">100% hữu cơ</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <RotateCcw className="w-6 h-6 text-green-600" />
                <div>
                  <div className="font-medium text-gray-800">Đổi trả dễ dàng</div>
                  <div className="text-sm text-gray-600">Trong 7 ngày</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="bg-white rounded-lg shadow-md mb-16">
          <div className="border-b">
            <nav className="flex space-x-8 px-6">
              {[
                { id: "description", label: "Mô tả chi tiết" },
                { id: "nutrition", label: "Thông tin dinh dưỡng" },
                { id: "storage", label: "Bảo quản & sử dụng" },
                { id: "reviews", label: "Đánh giá" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === tab.id
                      ? "border-green-600 text-green-600"
                      : "border-transparent text-gray-500 hover:text-gray-700"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          <div className="p-6">
            {activeTab === "description" && (
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800">Mô tả sản phẩm</h3>
                <p className="text-gray-600 leading-relaxed">{product.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Xuất xứ</h4>
                    <p className="text-gray-600">{product.details.origin}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Trọng lượng</h4>
                    <p className="text-gray-600">{product.details.weight}</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "nutrition" && (
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800">Lợi ích sức khỏe</h3>
                <p className="text-gray-600 leading-relaxed">{product.details.benefits}</p>
              </div>
            )}

            {activeTab === "storage" && (
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800">Hướng dẫn bảo quản</h3>
                <p className="text-gray-600 leading-relaxed">{product.details.storage}</p>
              </div>
            )}

            {activeTab === "reviews" && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-gray-800">Đánh giá khách hàng</h3>
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${
                            i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="font-medium">{product.rating}/5</span>
                    <span className="text-gray-500">({product.reviewsCount} đánh giá)</span>
                  </div>
                </div>

                {/* Mock Reviews */}
                <div className="space-y-4">
                  {[
                    {
                      name: "Nguyễn Thị Lan",
                      rating: 5,
                      comment: "Sản phẩm rất tươi ngon, đóng gói cẩn thận. Sẽ mua lại!",
                    },
                    { name: "Trần Văn Nam", rating: 4, comment: "Chất lượng tốt, giao hàng nhanh. Giá cả hợp lý." },
                    { name: "Lê Thị Mai", rating: 5, comment: "Rất hài lòng với sản phẩm. Tươi ngon như mong đợi." },
                  ].map((review, index) => (
                    <div key={index} className="border-b pb-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-gray-800">{review.name}</span>
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < review.rating ? "text-yellow-400 fill-current" : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-600">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-8">Sản phẩm liên quan</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
