export const translations = {
  vi: {
    // Navigation
    home: "Trang Chủ",
    about: "Giới Thiệu",
    story: "Câu Chuyện",
    shop: "Cửa Hàng",
    news: "Tin Tức",
    contact: "Liên Hệ",
    cart: "Giỏ Hàng",
    login: "Đăng Nhập",
    register: "Đăng Ký",

    // Hero Section
    heroTitle: "Hương Vị Tự Nhiên,",
    heroTitleHighlight: "Nâng Tầm Sức Khỏe",
    heroSubtitle: "Nông Sản Sạch Từ Nông Trại Đến Bàn Ăn Của Bạn",
    exploreProducts: "Khám Phá Sản Phẩm Ngay",
    learnMore: "Tìm Hiểu Thêm",

    // Common
    addToCart: "Thêm vào giỏ",
    viewAll: "Xem Tất Cả",
    readMore: "Đọc thêm",
    continueShopping: "Tiếp tục mua sắm",
    checkout: "Thanh toán",
    quantity: "Số lượng",
    price: "Giá",
    total: "Tổng cộng",

    // Product
    featuredProducts: "Sản Phẩm Nổi Bật",
    productDetails: "Chi tiết sản phẩm",
    relatedProducts: "Sản phẩm liên quan",
    reviews: "Đánh giá",
    description: "Mô tả",

    // Footer
    companyInfo: "Thông Tin Công Ty",
    quickLinks: "Liên Kết Nhanh",
    contactInfo: "Thông Tin Liên Hệ",
    newsletter: "Đăng Ký Nhận Tin",

    // Chat
    chatWithUs: "Chat với chúng tôi",
    howCanWeHelp: "Chúng tôi có thể giúp gì cho bạn?",
    typeMessage: "Nhập tin nhắn...",
    send: "Gửi",
  },
  en: {
    // Navigation
    home: "Home",
    about: "About",
    story: "Our Story",
    shop: "Shop",
    news: "News",
    contact: "Contact",
    cart: "Cart",
    login: "Login",
    register: "Register",

    // Hero Section
    heroTitle: "Natural Flavors,",
    heroTitleHighlight: "Enhanced Health",
    heroSubtitle: "Fresh Produce From Farm To Your Table",
    exploreProducts: "Explore Products Now",
    learnMore: "Learn More",

    // Common
    addToCart: "Add to Cart",
    viewAll: "View All",
    readMore: "Read more",
    continueShopping: "Continue Shopping",
    checkout: "Checkout",
    quantity: "Quantity",
    price: "Price",
    total: "Total",

    // Product
    featuredProducts: "Featured Products",
    productDetails: "Product Details",
    relatedProducts: "Related Products",
    reviews: "Reviews",
    description: "Description",

    // Footer
    companyInfo: "Company Info",
    quickLinks: "Quick Links",
    contactInfo: "Contact Info",
    newsletter: "Newsletter",

    // Chat
    chatWithUs: "Chat with us",
    howCanWeHelp: "How can we help you?",
    typeMessage: "Type a message...",
    send: "Send",
  },
}

export type Language = keyof typeof translations
export type TranslationKey = keyof typeof translations.vi

export function getTranslation(key: TranslationKey, lang: Language): string {
  return translations[lang][key] || translations.vi[key]
}
