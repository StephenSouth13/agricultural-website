import Link from "next/link"
import { Facebook, Instagram, Youtube, Phone, Mail, MapPin, Clock } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">🌱</span>
              </div>
              <span className="text-xl font-bold">NôngSản</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Chúng tôi cam kết mang đến những sản phẩm nông sản tươi ngon, sạch sẽ và an toàn nhất từ nông trại đến bàn
              ăn của bạn.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Thông Tin Liên Hệ</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-sm">123 Đường Nông Nghiệp, Phường 1, Quận 1, TP.HCM</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-300 text-sm">0123 456 789</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-300 text-sm">info@nongsan.vn</span>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div className="text-gray-300 text-sm">
                  <div>Thứ 2 - Thứ 6: 8:00 - 18:00</div>
                  <div>Thứ 7 - CN: 8:00 - 17:00</div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Liên Kết Nhanh</h3>
            <div className="space-y-2">
              <Link href="/about" className="block text-gray-300 hover:text-white text-sm transition-colors">
                Về Chúng Tôi
              </Link>
              <Link href="/story" className="block text-gray-300 hover:text-white text-sm transition-colors">
                Câu Chuyện
              </Link>
              <Link href="/legal" className="block text-gray-300 hover:text-white text-sm transition-colors">
                Giấy Tờ Pháp Lý
              </Link>
              <Link href="/partners" className="block text-gray-300 hover:text-white text-sm transition-colors">
                Đối Tác
              </Link>
              <Link href="/contact" className="block text-gray-300 hover:text-white text-sm transition-colors">
                Liên Hệ
              </Link>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Đăng Ký Nhận Tin</h3>
            <p className="text-gray-300 text-sm">Nhận thông tin về sản phẩm mới và ưu đãi đặc biệt</p>
            <div className="space-y-2">
              <input
                type="email"
                placeholder="Email của bạn"
                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded text-sm font-medium transition-colors">
                Đăng Ký
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 NôngSản Website. Phát triển bởi CNTT (VMS). Tất cả quyền được bảo lưu.
          </p>
        </div>
      </div>
    </footer>
  )
}
