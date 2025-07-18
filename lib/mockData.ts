// Mock data cho website nông sản (cập nhật với nhiều nội dung hơn)
export const MOCK_PRODUCTS = [
  {
    id: "prod_001",
    name: "Cà chua Đà Lạt tươi sạch",
    nameEn: "Fresh Dalat Tomatoes",
    price: 35000,
    oldPrice: 40000,
    imageUrl: "/placeholder.svg?height=300&width=300",
    images: ["/placeholder.svg?height=400&width=400", "/placeholder.svg?height=400&width=400"],
    category: "Rau củ",
    categoryEn: "Vegetables",
    stock: 50,
    rating: 4.8,
    reviewsCount: 125,
    description:
      "Cà chua được trồng hữu cơ tại Đà Lạt, đảm bảo tươi ngon và an toàn. Thích hợp cho các món salad, súp hoặc nước ép.",
    descriptionEn:
      "Organically grown tomatoes from Dalat, ensuring freshness and safety. Perfect for salads, soups, or juices.",
    details: {
      origin: "Đà Lạt, Việt Nam",
      originEn: "Dalat, Vietnam",
      weight: "1kg/túi",
      weightEn: "1kg/bag",
      storage: "Bảo quản nơi thoáng mát, tránh ánh nắng trực tiếp.",
      storageEn: "Store in a cool, dry place, away from direct sunlight.",
      benefits: "Giàu vitamin C, lycopene, tốt cho tim mạch và da.",
      benefitsEn: "Rich in vitamin C, lycopene, good for cardiovascular health and skin.",
    },
    relatedProducts: ["prod_002", "prod_003"],
  },
  {
    id: "prod_002",
    name: "Dâu tây Mộc Châu loại 1",
    nameEn: "Premium Moc Chau Strawberries",
    price: 120000,
    imageUrl: "/placeholder.svg?height=300&width=300",
    images: ["/placeholder.svg?height=400&width=400", "/placeholder.svg?height=400&width=400"],
    category: "Trái cây",
    categoryEn: "Fruits",
    stock: 30,
    rating: 4.9,
    reviewsCount: 210,
    description: "Dâu tây Mộc Châu trái to, đỏ mọng, ngọt thanh, được hái tận vườn và đóng gói cẩn thận.",
    descriptionEn: "Large, juicy, sweet Moc Chau strawberries, hand-picked from the garden and carefully packaged.",
    details: {
      origin: "Mộc Châu, Sơn La",
      originEn: "Moc Chau, Son La",
      weight: "500g/hộp",
      weightEn: "500g/box",
      storage: "Giữ lạnh trong tủ mát.",
      storageEn: "Keep refrigerated.",
      benefits: "Giàu chất chống oxy hóa, vitamin C.",
      benefitsEn: "Rich in antioxidants and vitamin C.",
    },
    relatedProducts: ["prod_001", "prod_004"],
  },
  {
    id: "prod_003",
    name: "Rau muống hữu cơ",
    nameEn: "Organic Water Spinach",
    price: 25000,
    imageUrl: "/placeholder.svg?height=300&width=300",
    images: ["/placeholder.svg?height=400&width=400", "/placeholder.svg?height=400&width=400"],
    category: "Rau củ",
    categoryEn: "Vegetables",
    stock: 80,
    rating: 4.6,
    reviewsCount: 89,
    description: "Rau muống được trồng theo phương pháp hữu cơ, không sử dụng thuốc trừ sâu.",
    descriptionEn: "Water spinach grown using organic methods, without pesticides.",
    details: {
      origin: "Đồng bằng sông Cửu Long",
      originEn: "Mekong Delta",
      weight: "500g/bó",
      weightEn: "500g/bunch",
      storage: "Bảo quản trong tủ lạnh.",
      storageEn: "Store in refrigerator.",
      benefits: "Giàu sắt, vitamin A, tốt cho mắt.",
      benefitsEn: "Rich in iron, vitamin A, good for eyes.",
    },
    relatedProducts: ["prod_001", "prod_005"],
  },
  {
    id: "prod_004",
    name: "Cam sành Hòa Bình",
    nameEn: "Hoa Binh Sweet Oranges",
    price: 45000,
    oldPrice: 50000,
    imageUrl: "/placeholder.svg?height=300&width=300",
    images: ["/placeholder.svg?height=400&width=400", "/placeholder.svg?height=400&width=400"],
    category: "Trái cây",
    categoryEn: "Fruits",
    stock: 60,
    rating: 4.7,
    reviewsCount: 156,
    description: "Cam sành Hòa Bình ngọt thanh, nhiều nước, giàu vitamin C.",
    descriptionEn: "Sweet and juicy Hoa Binh oranges, rich in vitamin C.",
    details: {
      origin: "Hòa Bình, Việt Nam",
      originEn: "Hoa Binh, Vietnam",
      weight: "1kg/túi",
      weightEn: "1kg/bag",
      storage: "Bảo quản nơi khô ráo, thoáng mát.",
      storageEn: "Store in a dry, cool place.",
      benefits: "Tăng cường miễn dịch, đẹp da.",
      benefitsEn: "Boosts immunity, good for skin.",
    },
    relatedProducts: ["prod_002", "prod_006"],
  },
  {
    id: "prod_005",
    name: "Khoai lang tím Nhật Bản",
    nameEn: "Japanese Purple Sweet Potato",
    price: 55000,
    imageUrl: "/placeholder.svg?height=300&width=300",
    images: ["/placeholder.svg?height=400&width=400", "/placeholder.svg?height=400&width=400"],
    category: "Rau củ",
    categoryEn: "Vegetables",
    stock: 40,
    rating: 4.8,
    reviewsCount: 98,
    description: "Khoai lang tím Nhật Bản ngọt tự nhiên, giàu chất chống oxy hóa.",
    descriptionEn: "Naturally sweet Japanese purple sweet potato, rich in antioxidants.",
    details: {
      origin: "Nhật Bản",
      originEn: "Japan",
      weight: "1kg/túi",
      weightEn: "1kg/bag",
      storage: "Bảo quản nơi khô ráo.",
      storageEn: "Store in a dry place.",
      benefits: "Chống lão hóa, tốt cho tiêu hóa.",
      benefitsEn: "Anti-aging, good for digestion.",
    },
    relatedProducts: ["prod_003", "prod_001"],
  },
  {
    id: "prod_006",
    name: "Xoài cát Hòa Lộc",
    nameEn: "Hoa Loc Cat Mango",
    price: 80000,
    imageUrl: "/placeholder.svg?height=300&width=300",
    images: ["/placeholder.svg?height=400&width=400", "/placeholder.svg?height=400&width=400"],
    category: "Trái cây",
    categoryEn: "Fruits",
    stock: 25,
    rating: 4.9,
    reviewsCount: 187,
    description: "Xoài cát Hòa Lộc thơm ngon, ngọt đậm đà, không xơ.",
    descriptionEn: "Fragrant and sweet Hoa Loc cat mango, fiber-free.",
    details: {
      origin: "Tiền Giang, Việt Nam",
      originEn: "Tien Giang, Vietnam",
      weight: "1kg/túi",
      weightEn: "1kg/bag",
      storage: "Bảo quản nơi thoáng mát.",
      storageEn: "Store in a cool place.",
      benefits: "Giàu vitamin A, C, tốt cho mắt.",
      benefitsEn: "Rich in vitamin A, C, good for eyes.",
    },
    relatedProducts: ["prod_004", "prod_002"],
  },
]

export const MOCK_NEWS_ARTICLES = [
  {
    id: "news_001",
    title: "5 Lợi Ích Bất Ngờ Của Rau Hữu Cơ Bạn Nên Biết",
    titleEn: "5 Surprising Benefits of Organic Vegetables You Should Know",
    thumbnailUrl: "/placeholder.svg?height=200&width=300",
    publishDate: "2025-07-10",
    shortDescription: "Rau hữu cơ không chỉ an toàn mà còn mang lại nhiều lợi ích sức khỏe đáng kinh ngạc.",
    shortDescriptionEn: "Organic vegetables are not only safe but also bring amazing health benefits.",
    content: `
      <h2>Tại sao nên chọn rau hữu cơ?</h2>
      <p>Rau hữu cơ đang ngày càng được ưa chuộng bởi những lợi ích tuyệt vời mà chúng mang lại. Dưới đây là 5 lợi ích bất ngờ mà bạn có thể chưa biết:</p>
      
      <h3>1. Giàu chất dinh dưỡng hơn</h3>
      <p>Nghiên cứu cho thấy rau hữu cơ chứa nhiều vitamin, khoáng chất và chất chống oxy hóa hơn so với rau thông thường.</p>
      
      <h3>2. Không chứa hóa chất độc hại</h3>
      <p>Rau hữu cơ được trồng không sử dụng thuốc trừ sâu, phân bón hóa học, đảm bảo an toàn cho sức khỏe.</p>
      
      <h3>3. Tốt cho môi trường</h3>
      <p>Canh tác hữu cơ giúp bảo vệ đất, nước và không khí, góp phần vào việc bảo vệ môi trường.</p>
      
      <h3>4. Hương vị tự nhiên</h3>
      <p>Rau hữu cơ có hương vị đậm đà, tự nhiên hơn nhờ được trồng theo phương pháp truyền thống.</p>
      
      <h3>5. Hỗ trợ nông dân địa phương</h3>
      <p>Mua rau hữu cơ giúp hỗ trợ các nông dân địa phương và phát triển nền nông nghiệp bền vững.</p>
    `,
    contentEn: `
      <h2>Why choose organic vegetables?</h2>
      <p>Organic vegetables are increasingly popular due to the great benefits they bring. Here are 5 surprising benefits you may not know:</p>
      
      <h3>1. More nutritious</h3>
      <p>Studies show that organic vegetables contain more vitamins, minerals and antioxidants than conventional vegetables.</p>
      
      <h3>2. No harmful chemicals</h3>
      <p>Organic vegetables are grown without pesticides and chemical fertilizers, ensuring health safety.</p>
      
      <h3>3. Good for the environment</h3>
      <p>Organic farming helps protect soil, water and air, contributing to environmental protection.</p>
      
      <h3>4. Natural flavor</h3>
      <p>Organic vegetables have a richer, more natural flavor thanks to traditional growing methods.</p>
      
      <h3>5. Support local farmers</h3>
      <p>Buying organic vegetables helps support local farmers and develop sustainable agriculture.</p>
    `,
    author: "Admin",
    category: "Sức khỏe",
    categoryEn: "Health",
  },
  {
    id: "news_002",
    title: "Cách Bảo Quản Trái Cây Tươi Lâu Hơn",
    titleEn: "How to Keep Fruits Fresh Longer",
    thumbnailUrl: "/placeholder.svg?height=200&width=300",
    publishDate: "2025-07-08",
    shortDescription: "Những mẹo hay giúp bạn bảo quản trái cây tươi ngon trong thời gian dài.",
    shortDescriptionEn: "Useful tips to help you keep fruits fresh for a long time.",
    content: `
      <h2>Bí quyết bảo quản trái cây tươi lâu</h2>
      <p>Việc bảo quản trái cây đúng cách không chỉ giúp giữ được độ tươi ngon mà còn tiết kiệm chi phí. Dưới đây là những mẹo hữu ích:</p>
      
      <h3>1. Phân loại trái cây</h3>
      <p>Chia trái cây thành các nhóm: cần bảo quản lạnh, bảo quản ở nhiệt độ phòng, và những loại cần chín thêm.</p>
      
      <h3>2. Sử dụng túi giấy</h3>
      <p>Đối với trái cây cần chín thêm như chuối, xoài, hãy bọc trong túi giấy để tăng tốc quá trình chín.</p>
      
      <h3>3. Tách riêng trái cây dễ hỏng</h3>
      <p>Một số trái cây như táo, chuối tạo ra khí ethylene làm chín nhanh các loại khác, nên bảo quản riêng.</p>
      
      <h3>4. Kiểm tra thường xuyên</h3>
      <p>Loại bỏ những trái đã hỏng để tránh lây lan cho các trái khác.</p>
    `,
    contentEn: `
      <h2>Secrets to keeping fruits fresh longer</h2>
      <p>Proper fruit storage not only helps maintain freshness but also saves costs. Here are useful tips:</p>
      
      <h3>1. Categorize fruits</h3>
      <p>Divide fruits into groups: need refrigeration, room temperature storage, and those that need to ripen.</p>
      
      <h3>2. Use paper bags</h3>
      <p>For fruits that need to ripen like bananas and mangoes, wrap them in paper bags to speed up the ripening process.</p>
      
      <h3>3. Separate easily spoiled fruits</h3>
      <p>Some fruits like apples and bananas produce ethylene gas that ripens others quickly, so store them separately.</p>
      
      <h3>4. Check regularly</h3>
      <p>Remove spoiled fruits to prevent spreading to others.</p>
    `,
    author: "Admin",
    category: "Mẹo hay",
    categoryEn: "Tips",
  },
  {
    id: "news_003",
    title: "Xu Hướng Nông Nghiệp Sạch 2025",
    titleEn: "Clean Agriculture Trends 2025",
    thumbnailUrl: "/placeholder.svg?height=200&width=300",
    publishDate: "2025-07-05",
    shortDescription: "Tìm hiểu về những xu hướng mới trong nông nghiệp sạch năm 2025.",
    shortDescriptionEn: "Learn about new trends in clean agriculture in 2025.",
    content: `
      <h2>Nông nghiệp sạch - Xu hướng tương lai</h2>
      <p>Năm 2025 đánh dấu một bước ngoặt quan trọng trong ngành nông nghiệp với nhiều xu hướng mới:</p>
      
      <h3>1. Công nghệ IoT trong nông nghiệp</h3>
      <p>Ứng dụng cảm biến thông minh để theo dõi độ ẩm đất, nhiệt độ, và tình trạng cây trồng.</p>
      
      <h3>2. Nông nghiệp thẳng đứng</h3>
      <p>Mô hình trồng trọt trong nhà kính cao tầng giúp tối ưu hóa không gian và năng suất.</p>
      
      <h3>3. Sử dụng AI và Big Data</h3>
      <p>Phân tích dữ liệu để dự đoán thời tiết, bệnh tật và tối ưu hóa quy trình canh tác.</p>
      
      <h3>4. Nông nghiệp tuần hoàn</h3>
      <p>Tái sử dụng phế phẩm nông nghiệp để tạo ra phân bón hữu cơ và năng lượng sinh học.</p>
    `,
    contentEn: `
      <h2>Clean agriculture - Future trends</h2>
      <p>2025 marks an important turning point in agriculture with many new trends:</p>
      
      <h3>1. IoT technology in agriculture</h3>
      <p>Application of smart sensors to monitor soil moisture, temperature, and plant conditions.</p>
      
      <h3>2. Vertical farming</h3>
      <p>Multi-story greenhouse cultivation model helps optimize space and productivity.</p>
      
      <h3>3. Using AI and Big Data</h3>
      <p>Data analysis to predict weather, diseases and optimize farming processes.</p>
      
      <h3>4. Circular agriculture</h3>
      <p>Reusing agricultural waste to create organic fertilizers and bioenergy.</p>
    `,
    author: "Admin",
    category: "Công nghệ",
    categoryEn: "Technology",
  },
]

export const MOCK_STORY_CONTENT = {
  vi: {
    title: "Câu Chuyện Nông Sản Của Chúng Tôi",
    subtitle: "Hành trình từ hạt giống đến bàn ăn",
    sections: [
      {
        title: "Khởi Nguồn",
        content:
          "Câu chuyện của chúng tôi bắt đầu từ năm 2015, khi những người sáng lập nhận ra tầm quan trọng của việc cung cấp thực phẩm sạch, an toàn cho cộng đồng. Với niềm đam mê về nông nghiệp và mong muốn mang lại sức khỏe tốt nhất cho mọi gia đình Việt Nam.",
        image: "/placeholder.svg?height=400&width=600",
      },
      {
        title: "Phát Triển",
        content:
          "Từ những cánh đồng nhỏ đầu tiên, chúng tôi đã không ngừng mở rộng quy mô và nâng cao chất lượng. Hiện tại, chúng tôi hợp tác với hơn 500 nông hộ trên khắp cả nước, áp dụng các tiêu chuẩn canh tác hữu cơ nghiêm ngặt.",
        image: "/placeholder.svg?height=400&width=600",
      },
      {
        title: "Cam Kết",
        content:
          "Chúng tôi cam kết mang đến những sản phẩm tươi ngon nhất, từ khâu gieo trồng đến thu hoạch, đóng gói và vận chuyển. Mỗi sản phẩm đều được kiểm tra kỹ lưỡng để đảm bảo chất lượng cao nhất.",
        image: "/placeholder.svg?height=400&width=600",
      },
    ],
  },
  en: {
    title: "Our Agricultural Story",
    subtitle: "Journey from seed to table",
    sections: [
      {
        title: "Origin",
        content:
          "Our story began in 2015, when the founders realized the importance of providing clean, safe food for the community. With a passion for agriculture and a desire to bring the best health to every Vietnamese family.",
        image: "/placeholder.svg?height=400&width=600",
      },
      {
        title: "Development",
        content:
          "From the first small fields, we have continuously expanded our scale and improved quality. Currently, we cooperate with more than 500 farming households across the country, applying strict organic farming standards.",
        image: "/placeholder.svg?height=400&width=600",
      },
      {
        title: "Commitment",
        content:
          "We are committed to bringing the freshest products, from planting to harvesting, packaging and transportation. Each product is carefully inspected to ensure the highest quality.",
        image: "/placeholder.svg?height=400&width=600",
      },
    ],
  },
}

export const MOCK_CONTACT_INFO = {
  vi: {
    title: "Liên Hệ Với Chúng Tôi",
    subtitle: "Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn",
    address: "123 Đường Nông Nghiệp, Phường 1, Quận 1, TP.HCM",
    phone: "0123 456 789",
    email: "info@nongsan.vn",
    workingHours: "Thứ 2 - Thứ 6: 8:00 - 18:00, Thứ 7 - CN: 8:00 - 17:00",
    formTitle: "Gửi Tin Nhắn Cho Chúng Tôi",
    nameLabel: "Họ và tên",
    emailLabel: "Email",
    phoneLabel: "Số điện thoại",
    messageLabel: "Tin nhắn",
    sendButton: "Gửi tin nhắn",
  },
  en: {
    title: "Contact Us",
    subtitle: "We are always ready to listen and support you",
    address: "123 Agriculture Street, Ward 1, District 1, Ho Chi Minh City",
    phone: "0123 456 789",
    email: "info@nongsan.vn",
    workingHours: "Mon - Fri: 8:00 - 18:00, Sat - Sun: 8:00 - 17:00",
    formTitle: "Send Us a Message",
    nameLabel: "Full name",
    emailLabel: "Email",
    phoneLabel: "Phone number",
    messageLabel: "Message",
    sendButton: "Send message",
  },
}

// Add this export that was missing
export const MOCK_CART_ITEMS = [
  {
    productId: "prod_001",
    name: "Cà chua Đà Lạt tươi sạch",
    price: 35000,
    imageUrl: "/placeholder.svg?height=80&width=80",
    quantity: 2,
  },
  {
    productId: "prod_002",
    name: "Dâu tây Mộc Châu loại 1",
    price: 120000,
    imageUrl: "/placeholder.svg?height=80&width=80",
    quantity: 1,
  },
]

// Also add the missing WHY_CHOOSE_US_FEATURES export
export const WHY_CHOOSE_US_FEATURES = [
  {
    icon: "🌱",
    title: "Sản Phẩm Hữu Cơ",
    description: "Tất cả sản phẩm đều được trồng theo phương pháp hữu cơ, không sử dụng hóa chất độc hại.",
  },
  {
    icon: "🚚",
    title: "Giao Hàng Nhanh",
    description: "Giao hàng trong ngày tại TP.HCM và Hà Nội, đảm bảo sản phẩm luôn tươi ngon.",
  },
  {
    icon: "✅",
    title: "Chất Lượng Đảm Bảo",
    description: "Cam kết 100% hoàn tiền nếu sản phẩm không đạt chất lượng như mong đợi.",
  },
  {
    icon: "💰",
    title: "Giá Cả Hợp Lý",
    description: "Giá trực tiếp từ nông dân, không qua trung gian, tiết kiệm chi phí cho khách hàng.",
  },
]

export const MOCK_TESTIMONIALS = [
  {
    id: "test_001",
    name: "Nguyễn Thị Hoa",
    avatarUrl: "/placeholder.svg?height=60&width=60",
    feedback: "Nông sản ở đây luôn tươi ngon và đảm bảo chất lượng. Tôi rất hài lòng!",
    date: "2025-07-15",
    rating: 5,
  },
  {
    id: "test_002",
    name: "Trần Văn Mạnh",
    avatarUrl: "/placeholder.svg?height=60&width=60",
    feedback: "Dịch vụ giao hàng nhanh chóng, sản phẩm đóng gói cẩn thận. Tuyệt vời!",
    date: "2025-07-12",
    rating: 5,
  },
  {
    id: "test_003",
    name: "Lê Thị Mai",
    avatarUrl: "/placeholder.svg?height=60&width=60",
    feedback: "Giá cả hợp lý, chất lượng tuyệt vời. Sẽ tiếp tục ủng hộ!",
    date: "2025-07-10",
    rating: 4,
  },
]

export const MOCK_PARTNERS = [
  {
    id: "partner_001",
    name: "VietFarm Alliance",
    logoUrl: "/placeholder.svg?height=80&width=120",
    websiteUrl: "https://vietfarm.vn",
  },
  {
    id: "partner_002",
    name: "GreenHarvest Logistics",
    logoUrl: "/placeholder.svg?height=80&width=120",
    websiteUrl: "#",
  },
  {
    id: "partner_003",
    name: "Organic Vietnam",
    logoUrl: "/placeholder.svg?height=80&width=120",
    websiteUrl: "#",
  },
  {
    id: "partner_004",
    name: "Fresh Market Co.",
    logoUrl: "/placeholder.svg?height=80&width=120",
    websiteUrl: "#",
  },
]

export const MOCK_CATEGORIES = [
  { id: "cat_001", name: "Rau củ" },
  { id: "cat_002", name: "Trái cây" },
  { id: "cat_003", name: "Thực phẩm chế biến" },
  { id: "cat_004", name: "Đặc sản vùng miền" },
]
