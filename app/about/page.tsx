import Image from "next/image"
import { Users, Award, Leaf, Heart } from "lucide-react"

export default function AboutPage() {
  const values = [
    {
      icon: <Leaf className="w-8 h-8 text-green-600" />,
      title: "Bền Vững",
      description: "Cam kết bảo vệ môi trường và phát triển bền vững trong mọi hoạt động.",
    },
    {
      icon: <Heart className="w-8 h-8 text-green-600" />,
      title: "Tận Tâm",
      description: "Luôn đặt sức khỏe và sự hài lòng của khách hàng lên hàng đầu.",
    },
    {
      icon: <Award className="w-8 h-8 text-green-600" />,
      title: "Chất Lượng",
      description: "Không ngừng nâng cao chất lượng sản phẩm và dịch vụ.",
    },
    {
      icon: <Users className="w-8 h-8 text-green-600" />,
      title: "Cộng Đồng",
      description: "Xây dựng mối quan hệ bền vững với nông dân và cộng đồng.",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-green-800 to-green-600 flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: "url('/placeholder.svg?height=400&width=1200')",
          }}
        />
        <div className="relative container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Về Chúng Tôi</h1>
          <p className="text-xl md:text-2xl text-green-100">Hành trình mang nông sản sạch đến mọi gia đình Việt</p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Câu Chuyện Của Chúng Tôi</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Bắt đầu từ năm 2015 với mong muốn mang đến những sản phẩm nông sản sạch, an toàn cho người tiêu dùng
                  Việt Nam, chúng tôi đã không ngừng nỗ lực xây dựng một hệ thống cung ứng nông sản chất lượng cao.
                </p>
                <p>
                  Từ những cánh đồng nhỏ ở vùng ngoại ô, chúng tôi đã mở rộng mạng lưới hợp tác với hàng trăm nông hộ
                  trên khắp cả nước, áp dụng các tiêu chuẩn canh tác hữu cơ nghiêm ngặt để đảm bảo chất lượng sản phẩm.
                </p>
                <p>
                  Ngày nay, chúng tôi tự hào là một trong những đơn vị hàng đầu trong lĩnh vực cung cấp nông sản sạch,
                  phục vụ hàng nghìn gia đình trên toàn quốc.
                </p>
              </div>
            </div>
            <div>
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Câu chuyện của chúng tôi"
                width={600}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Sứ Mệnh</h3>
              <p className="text-gray-600 leading-relaxed">
                Mang đến những sản phẩm nông sản tươi ngon, sạch sẽ và an toàn nhất, góp phần nâng cao chất lượng cuộc
                sống và sức khỏe của người tiêu dùng Việt Nam.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Leaf className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Tầm Nhìn</h3>
              <p className="text-gray-600 leading-relaxed">
                Trở thành thương hiệu nông sản hàng đầu Việt Nam, tiên phong trong việc phát triển nông nghiệp bền vững
                và xây dựng hệ sinh thái nông sản sạch toàn diện.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Giá Trị Cốt Lõi</h2>
            <p className="text-lg text-gray-600">Những giá trị định hướng mọi hoạt động của chúng tôi</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Đội Ngũ Của Chúng Tôi</h2>
            <p className="text-lg text-gray-600">Những con người tận tâm đằng sau thành công của chúng tôi</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Nguyễn Văn An", position: "Giám đốc điều hành", image: "/placeholder.svg?height=300&width=300" },
              {
                name: "Trần Thị Bình",
                position: "Trưởng phòng Chất lượng",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Lê Văn Cường",
                position: "Trưởng phòng Kinh doanh",
                image: "/placeholder.svg?height=300&width=300",
              },
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  width={300}
                  height={300}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{member.name}</h3>
                  <p className="text-green-600 font-medium">{member.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "10+", label: "Năm kinh nghiệm" },
              { number: "500+", label: "Nông hộ hợp tác" },
              { number: "10,000+", label: "Khách hàng tin tưởng" },
              { number: "50+", label: "Loại sản phẩm" },
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-green-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
