import Image from "next/image"
import Link from "next/link"
import { Star, ShoppingCart, Heart, Eye } from "lucide-react"
import { formatCurrency } from "@/lib/utils"

interface Product {
  id: string
  name: string
  price: number
  oldPrice?: number
  imageUrl: string
  rating: number
  reviewsCount: number
  description: string
}

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const discountPercentage = product.oldPrice
    ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
    : 0

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group card-hover">
      <div className="relative overflow-hidden">
        <Link href={`/shop/${product.id}`}>
          <Image
            src={product.imageUrl || "/placeholder.svg"}
            alt={product.name}
            width={300}
            height={300}
            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </Link>

        {/* Discount Badge */}
        {discountPercentage > 0 && (
          <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold animate-bounce-in">
            -{discountPercentage}%
          </div>
        )}

        {/* Action Buttons */}
        <div className="absolute top-3 right-3 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
          <button className="bg-white p-2 rounded-full shadow-lg hover:bg-green-50 hover:shadow-glow transition-all duration-200">
            <Heart className="w-4 h-4 text-gray-600 hover:text-red-500" />
          </button>
          <button className="bg-white p-2 rounded-full shadow-lg hover:bg-green-50 hover:shadow-glow transition-all duration-200">
            <Eye className="w-4 h-4 text-gray-600 hover:text-green-600" />
          </button>
        </div>

        {/* Quick Add to Cart */}
        <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg font-medium transition-all duration-200 flex items-center justify-center space-x-2 hover:shadow-lg">
            <ShoppingCart className="w-4 h-4" />
            <span>Thêm vào giỏ</span>
          </button>
        </div>
      </div>

      <div className="p-5">
        <Link href={`/shop/${product.id}`}>
          <h3 className="font-bold text-gray-800 mb-2 hover:text-green-600 transition-colors line-clamp-2 text-lg">
            {product.name}
          </h3>
        </Link>

        {/* Rating */}
        <div className="flex items-center mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-500 ml-2 font-medium">({product.reviewsCount})</span>
        </div>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">{product.description}</p>

        {/* Price Section */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold text-green-600">{formatCurrency(product.price)}</span>
            {product.oldPrice && (
              <span className="text-sm text-gray-500 line-through">{formatCurrency(product.oldPrice)}</span>
            )}
          </div>

          {/* Mobile Add to Cart Button */}
          <button className="md:hidden bg-green-600 hover:bg-green-700 text-white p-2 rounded-lg transition-colors">
            <ShoppingCart className="w-4 h-4" />
          </button>
        </div>

        {/* Stock Status */}
        <div className="mt-3 pt-3 border-t border-gray-100">
          <div className="flex items-center justify-between text-xs">
            <span className="text-green-600 font-medium">✓ Còn hàng</span>
            <span className="text-gray-500">Giao hàng nhanh</span>
          </div>
        </div>
      </div>
    </div>
  )
}
