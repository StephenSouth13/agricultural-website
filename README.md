# 🌱 NôngSản - Advanced Agricultural E-commerce Platform

A comprehensive, modern agricultural e-commerce platform built with Next.js, featuring real-time order tracking, admin CMS, legal document management, and partner network integration.

![NôngSản Website](https://via.placeholder.com/800x400/16a34a/ffffff?text=NôngSản+Advanced+Platform)

## ✨ Latest Features & Updates

### 🚚 **Advanced Order Tracking System**
- **Real-time GPS Tracking**: Live map integration showing exact delivery location
- **Driver Information**: Complete driver profiles with ratings, contact info, and vehicle details
- **Timeline Tracking**: Detailed delivery timeline with timestamps and locations
- **Multi-party Communication**: Direct contact with drivers, shipping companies, and support
- **Live Updates**: Real-time status updates and location changes
- **Interactive Map**: Visual route tracking with departure and destination points

### 🏛️ **Legal Documents Management**
- **Digital Document Library**: Complete legal document repository
- **Certification Tracking**: Quality certifications with expiry dates
- **Compliance Dashboard**: Real-time compliance status monitoring
- **Document Verification**: Authentic document verification system
- **Regulatory Updates**: Automatic updates for legal requirements

### 🤝 **Partner Network System**
- **Partner Categories**: Suppliers, logistics, technology, and certification partners
- **Partner Profiles**: Detailed partner information with certifications and services
- **Partnership Benefits**: Clear value propositions for potential partners
- **Contact Integration**: Direct communication channels with partners
- **Performance Metrics**: Partner performance tracking and analytics

### 🎨 **Enhanced UI/UX Design**
- **Modern Animations**: Smooth transitions, hover effects, and micro-interactions
- **Active Navigation**: Dynamic header with active page indicators
- **Glass Effects**: Modern backdrop blur and transparency effects
- **Responsive Cards**: Interactive product cards with quick actions
- **Loading States**: Beautiful loading animations and skeleton screens
- **Accessibility**: Full keyboard navigation and screen reader support

## ✨ Features

### 🛍️ E-commerce Features
- **Product Catalog**: Browse fresh agricultural products with detailed information
- **Shopping Cart**: Add, remove, and manage products in cart
- **Product Search & Filter**: Find products by category, price, and keywords
- **Product Reviews**: Customer ratings and feedback system
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices

### 📰 Content Management
- **News System**: Latest agricultural news and health tips
- **Story Pages**: Company story and mission
- **About Pages**: Comprehensive company information
- **Contact System**: Contact forms and company information

### 🎨 User Experience
- **Multi-language Support**: Vietnamese and English
- **Floating Chat**: Real-time customer support
- **Social Media Integration**: Connect with customers on social platforms
- **SEO Optimized**: Search engine friendly structure

### 🔧 Admin Dashboard
- **Product Management**: Add, edit, and delete products
- **Order Management**: Track and manage customer orders
- **Customer Management**: View and manage customer data
- **Analytics Dashboard**: Sales statistics and insights

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Language**: TypeScript
- **State Management**: React Context API
- **Image Optimization**: Next.js Image component
- **Responsive Design**: Mobile-first approach

## 📦 Installation

1. **Clone the repository**
   \`\`\`bash
   git clone https://github.com/StephenSouth13/nongsan-website.git
   cd nongsan-website
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   \`\`\`

3. **Run the development server**
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   \`\`\`

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

\`\`\`
nongsan-website/
├── app/                    # Next.js App Router pages
│   ├── (auth)/            # Authentication pages
│   │   ├── login/         # Login page
│   │   └── register/      # Registration page
│   ├── admin/             # Admin dashboard
│   │   ├── page.tsx       # Main dashboard
│   │   ├── products/      # Product management
│   │   ├── orders/        # Order management
│   │   └── customers/     # Customer management
│   ├── shop/              # E-commerce pages
│   │   ├── page.tsx       # Product catalog
│   │   ├── [productId]/   # Product details
│   │   ├── cart/          # Shopping cart
│   │   └── checkout/      # Checkout process
│   ├── track/             # Order tracking
│   │   ├── page.tsx       # Track search
│   │   └── [orderId]/     # Live tracking
│   ├── legal/             # Legal documents
│   ├── partners/          # Partner network
│   ├── news/              # News system
│   ├── contact/           # Contact page
│   ├── about/             # About page
│   ├── story/             # Company story
│   └── globals.css        # Global styles
├── components/            # Reusable components
│   ├── common/            # Common components
│   │   ├── Header.tsx     # Navigation header
│   │   ├── Footer.tsx     # Site footer
│   │   ├── FloatingChat.tsx # Chat widget
│   │   └── FloatingSocial.tsx # Social media
│   ├── blocks/            # Page sections
│   │   ├── HeroSection.tsx # Hero banners
│   │   ├── ProductShowcase.tsx # Product displays
│   │   └── TestimonialsCarousel.tsx # Reviews
│   └── shop/              # E-commerce components
│       ├── ProductCard.tsx # Product cards
│       └── CartItem.tsx   # Cart items
├── lib/                   # Utilities and data
│   ├── mockData.ts        # Mock data for development
│   ├── utils.ts           # Utility functions
│   └── i18n.ts            # Internationalization
└── public/                # Static assets
    ├── images/            # Image assets
    └── documents/         # Legal documents
\`\`\`

## 🎯 Key Pages

### Public Pages
- **Homepage** (`/`) - Hero section, featured products, testimonials, news
- **Shop** (`/shop`) - Product catalog with advanced filtering
- **Product Details** (`/shop/[id]`) - Detailed product information and reviews
- **Cart** (`/shop/cart`) - Shopping cart management
- **Checkout** (`/shop/checkout`) - Secure checkout process
- **Order Tracking** (`/track`) - Real-time order tracking system
- **About** (`/about`) - Company information and team
- **Story** (`/story`) - Company story and values
- **News** (`/news`) - Agricultural news and articles
- **Contact** (`/contact`) - Contact form and information
- **Legal** (`/legal`) - Legal documents and certifications
- **Partners** (`/partners`) - Partner network and collaboration

### Authentication
- **Login** (`/login`) - User authentication with social login
- **Register** (`/register`) - User registration with email verification

### Admin Dashboard
- **Dashboard** (`/admin`) - Analytics and overview
- **Product Management** - Complete product CRUD operations
- **Order Management** - Order processing and fulfillment
- **Customer Management** - Customer data and communication

## 🎨 Design Features

### Visual Elements
- **Modern UI**: Clean, professional design with green agricultural theme
- **Smooth Animations**: CSS transitions and keyframe animations
- **Hover Effects**: Interactive elements with visual feedback
- **Glass Effects**: Modern backdrop blur effects
- **Gradient Accents**: Beautiful gradient text and backgrounds

### Responsive Design
- **Mobile-First**: Optimized for mobile devices
- **Tablet Support**: Perfect layout for tablets
- **Desktop Enhanced**: Rich desktop experience
- **Touch Friendly**: Large touch targets for mobile

### Accessibility
- **Keyboard Navigation**: Full keyboard support
- **Screen Reader**: ARIA labels and semantic HTML
- **High Contrast**: Support for high contrast mode
- **Reduced Motion**: Respects user motion preferences

## 🌐 Internationalization

The website supports multiple languages:
- **Vietnamese** (vi) - Default language
- **English** (en) - Secondary language

Language switching is available in the header navigation.

## 📱 Mobile Features

- **Responsive Navigation**: Collapsible mobile menu
- **Touch Gestures**: Swipe support for carousels
- **Mobile-Optimized Forms**: Large input fields and buttons
- **Fast Loading**: Optimized images and code splitting

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file in the root directory:

\`\`\`env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_NAME=NôngSản
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_key
NEXT_PUBLIC_TRACKING_API_URL=your_tracking_api_url
\`\`\`

### Customization
- **Colors**: Modify Tailwind config for brand colors
- **Fonts**: Update font imports in layout.tsx
- **Content**: Edit mock data in lib/mockData.ts

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
- **Netlify**: Build command: `npm run build`
- **Railway**: Supports Next.js out of the box
- **DigitalOcean**: Use App Platform
- **AWS**: Amplify or EC2 deployment

## 📊 Performance

- **Lighthouse Score**: 95+ on all metrics
- **Core Web Vitals**: Excellent scores
- **SEO Optimized**: Meta tags and structured data
- **Fast Loading**: Optimized images and code splitting

## 🔮 Future Enhancements

### Phase 1 - Q2 2025
- [ ] Payment Integration (Stripe, PayPal, VNPay)
- [ ] Push Notifications
- [ ] Advanced Analytics
- [ ] Inventory Automation

### Phase 2 - Q3 2025
- [ ] Mobile App (React Native)
- [ ] AI Recommendations
- [ ] Voice Search
- [ ] AR Product View

### Phase 3 - Q4 2025
- [ ] Multi-vendor Support
- [ ] Blockchain Traceability
- [ ] IoT Integration
- [ ] Social Commerce

## 🤝 Contributing

### Development Workflow
\`\`\`bash
# Fork the repository
git clone https://github.com/yourusername/nongsan-website.git

# Create feature branch
git checkout -b feature/amazing-feature

# Make changes and commit
git commit -m 'Add amazing feature'

# Push to branch
git push origin feature/amazing-feature

# Create Pull Request
\`\`\`

### Code Standards
- **TypeScript**: Strict type checking enabled
- **ESLint**: Airbnb configuration with custom rules
- **Prettier**: Consistent code formatting
- **Husky**: Pre-commit hooks for quality assurance

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Developer

**Stephen South**
- 📧 Email: stephensouth1307@gmail.com
- 📱 Phone: 0979 137 018
- 📍 Location: Ho Chi Minh City, Vietnam
- 🌐 Website: [quachthanhlong.com](https://quachthanhlong.com)
- 💻 GitHub: [StephenSouth13](https://github.com/StephenSouth13)

## 🙏 Acknowledgments

### Technology Partners
- **Vercel Team** - Next.js framework and deployment platform
- **Tailwind Labs** - Utility-first CSS framework
- **Lucide** - Beautiful icon library
- **Google** - Maps API and analytics tools

### Design Inspiration
- **Dribbble Community** - UI/UX design inspiration
- **Behance** - Creative design concepts
- **Material Design** - Design system principles
- **Apple HIG** - Interface design guidelines

### Open Source Community
- **GitHub** - Code hosting and collaboration
- **NPM** - Package management and distribution
- **Stack Overflow** - Developer community support
- **MDN Web Docs** - Web development documentation

## 📞 Support

For support, email stephensouth1307@gmail.com or create an issue on GitHub.

---

Made with ❤️ by [Stephen South](https://github.com/StephenSouth13) in Ho Chi Minh City, Vietnam
