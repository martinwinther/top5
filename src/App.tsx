import React from 'react'

interface Product {
  id: number
  name: string
  description: string
  affiliateUrl: string
  reviewUrl: string
  price: string
  originalPrice?: string
  rating: number
  features: string[]
  imageUrl: string
  pros: string[]
  cons: string[]
}

function App() {
  // Sample data - easily customizable for different niches
  const pageTitle = "Top 5 Switch 2 Controllers"
  const currentMonth = "June"
  const currentYear = "2025"
  const topic = "Switch 2 Controllers"

  const products: Product[] = [
    {
      id: 1,
      name: "Pro Controller Elite X2",
      description: "The ultimate wireless controller featuring advanced haptic feedback, customizable buttons, and an incredible 40-hour battery life. Engineered for competitive gaming with ultra-responsive triggers and premium build quality.",
      affiliateUrl: "https://amazon.com/product-1",
      reviewUrl: "https://example-review-site.com/pro-controller-elite-review",
      price: "$79.99",
      originalPrice: "$99.99",
      rating: 4.9,
      features: ["40h Battery", "Haptic Feedback", "Customizable Buttons", "Ultra-Responsive"],
      imageUrl: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=400&h=300&fit=crop&crop=center",
      pros: ["Exceptional 40-hour battery life", "Premium build quality", "Advanced haptic feedback", "Highly customizable buttons"],
      cons: ["Higher price point", "Slightly heavier than standard controllers"]
    },
    {
      id: 2,
      name: "GameMaster Pro Switch Controller",
      description: "Ergonomic masterpiece with RGB lighting, programmable macros, and precision analog sticks. Features built-in gyroscope for motion controls and seamless wireless connectivity.",
      affiliateUrl: "https://amazon.com/product-2",
      reviewUrl: "https://example-review-site.com/gamemaster-pro-review",
      price: "$64.99",
      rating: 4.8,
      features: ["RGB Lighting", "Programmable Macros", "Gyroscope", "Wireless"],
      imageUrl: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=300&fit=crop&crop=center",
      pros: ["Great value for money", "Stunning RGB lighting effects", "Programmable macros", "Comfortable ergonomic design"],
      cons: ["RGB can drain battery faster", "Macro setup can be complex for beginners"]
    },
    {
      id: 3,
      name: "Ultra Grip Wireless Controller",
      description: "Premium textured grip surface with dual vibration motors and lightning-fast USB-C charging. Compatible with all Switch 2 games and features adjustable trigger sensitivity.",
      affiliateUrl: "https://amazon.com/product-3",
      reviewUrl: "https://example-review-site.com/ultra-grip-review",
      price: "$54.99",
      rating: 4.7,
      features: ["Textured Grip", "Fast Charging", "Dual Vibration", "Adjustable Triggers"],
      imageUrl: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop&crop=center",
      pros: ["Excellent grip texture", "Fast USB-C charging", "Great value for money", "Adjustable trigger sensitivity"],
      cons: ["Basic design aesthetic", "No advanced features like RGB"]
    },
    {
      id: 4,
      name: "PowerPlay Controller Pro",
      description: "Tournament-grade controller with mechanical buttons, hall effect joysticks, and professional-level precision. Includes premium carrying case and extra thumbsticks.",
      affiliateUrl: "https://amazon.com/product-4",
      reviewUrl: "https://example-review-site.com/powerplay-review",
      price: "$89.99",
      rating: 4.9,
      features: ["Mechanical Buttons", "Hall Effect Sticks", "Tournament Grade", "Carrying Case"],
      imageUrl: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=400&h=300&fit=crop&crop=center",
      pros: ["Tournament-grade precision", "Mechanical buttons feel amazing", "Hall effect sticks prevent drift", "Includes premium accessories"],
      cons: ["Most expensive option", "Can be overwhelming for casual gamers"]
    },
    {
      id: 5,
      name: "Flex Controller Deluxe",
      description: "Revolutionary modular controller system with swappable components, adaptive triggers, and cross-platform compatibility. Perfect for both casual and competitive gaming experiences.",
      affiliateUrl: "https://amazon.com/product-5",
      reviewUrl: "https://example-review-site.com/flex-controller-review",
      price: "$74.99",
      rating: 4.6,
      features: ["Modular Design", "Adaptive Triggers", "Cross-Platform", "Swappable Parts"],
      imageUrl: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=400&h=300&fit=crop&crop=center",
      pros: ["Unique modular design", "Cross-platform compatibility", "Adaptive triggers work great", "Future-proof with swappable parts"],
      cons: ["Modular system can feel loose", "Learning curve for customization"]
    }
  ]

  const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
    return (
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            className={`w-4 h-4 ${star <= rating ? 'text-yellow-400' : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
        <span className="ml-2 text-sm font-medium text-gray-600">{rating}</span>
      </div>
    )
  }

  const ProductCard: React.FC<{ product: Product; rank: number }> = ({ product, rank }) => (
    <div className="group relative bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 p-6 sm:p-8 lg:p-12 border border-gray-200/50 hover:border-gray-300/50 hover:-translate-y-2 max-w-6xl mx-auto w-full">
      {/* Rank Badge */}
      <div className="absolute -top-4 -left-4 w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
        <span className="text-white text-xl lg:text-2xl font-bold">{rank}</span>
      </div>
      
      {/* Best Choice Badge for #1 */}
      {rank === 1 && (
        <div className="absolute -top-3 right-8 bg-gradient-to-r from-orange-400 to-red-500 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
          🏆 Best Choice
        </div>
      )}

      <div className="mt-4">
        {/* Main Content with Image */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          {/* Product Image */}
          <div className="flex-shrink-0 flex items-center">
            <div className="w-full lg:w-64 h-48 lg:h-64 rounded-2xl overflow-hidden shadow-lg bg-gray-100">
              <img 
                src={product.imageUrl} 
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6 gap-4">
              <div className="flex-1">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {product.name}
                </h3>
                <StarRating rating={product.rating} />
              </div>
              <div className="text-left lg:text-right">
                <div className="text-3xl lg:text-4xl font-bold text-gray-900">{product.price}</div>
                {product.originalPrice && (
                  <div className="text-lg text-gray-500 line-through">{product.originalPrice}</div>
                )}
              </div>
            </div>

            <p className="text-gray-600 mb-6 leading-relaxed text-lg lg:text-xl">{product.description}</p>

            {/* Features */}
            <div className="flex flex-wrap gap-2 mb-6 justify-start">
              {product.features.map((feature, index) => (
                <span
                  key={index}
                  className="bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 px-4 py-2 rounded-full text-sm lg:text-base font-medium border border-blue-200"
                >
                  {feature}
                </span>
              ))}
            </div>

            {/* Pros and Cons */}
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {/* Pros */}
              <div className="bg-green-50 rounded-2xl p-4 border border-green-200">
                <h4 className="font-semibold text-green-800 mb-3 flex items-center">
                  <span className="mr-2">✓</span>
                  Pros
                </h4>
                <ul className="space-y-2">
                  {product.pros.map((pro, index) => (
                    <li key={index} className="text-green-700 text-sm flex items-start">
                      <span className="text-green-500 mr-2 mt-0.5">•</span>
                      {pro}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Cons */}
              <div className="bg-red-50 rounded-2xl p-4 border border-red-200">
                <h4 className="font-semibold text-red-800 mb-3 flex items-center">
                  <span className="mr-2">✕</span>
                  Cons
                </h4>
                <ul className="space-y-2">
                  {product.cons.map((con, index) => (
                    <li key={index} className="text-red-700 text-sm flex items-start">
                      <span className="text-red-500 mr-2 mt-0.5">•</span>
                      {con}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={product.affiliateUrl}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 text-center text-lg lg:text-xl shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Check Price →
              </a>
              <a
                href={product.reviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-4 px-8 rounded-2xl transition-all duration-300 text-center text-lg lg:text-xl border-2 border-gray-200 hover:border-gray-300"
              >
                Read Review
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden w-full">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 w-full"></div>
        <div className="relative w-full px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center max-w-7xl mx-auto">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-gray-900 mb-6 leading-tight">
              {pageTitle}
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-4 max-w-4xl mx-auto">
              {currentMonth} {currentYear} • Expertly Curated & Tested
            </p>
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-gray-200/50">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-gray-700 font-medium">Updated Daily</span>
            </div>
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="w-full px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto">
        <div className="bg-white/60 backdrop-blur-xl rounded-3xl shadow-xl p-12 border border-gray-200/50 mb-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">How We Choose Our Recommendations</h2>
            <p className="text-xl leading-relaxed text-gray-700 mb-8">
              We spend 100+ hours researching and analyzing thousands of real user reviews, expert opinions, and detailed product comparisons. 
              Our carefully curated list represents the absolute best {topic.toLowerCase()} based on verified customer experiences, 
              performance data, and value analysis from trusted sources across the web.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">📋</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Curated Research</h3>
                <p className="text-gray-600">Handpicked from extensive research</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">👥</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Real User Reviews</h3>
                <p className="text-gray-600">Based on verified customer feedback</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Always Current</h3>
                <p className="text-gray-600">Updated with latest releases</p>
              </div>
            </div>
          </div>
        </div>

                         {/* Products Grid */}
        <div className="space-y-12">
          {products.map((product, index) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              rank={index + 1} 
            />
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-20 text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white shadow-2xl max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Transparent & Honest Curation</h2>
          <p className="text-lg sm:text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            We research extensively and handpick products based on real customer reviews and expert analysis. No products, no bias - just honest recommendations.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
              <span className="font-semibold">🔍 Research-Based Selection</span>
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
              <span className="font-semibold">💯 Unbiased Curation</span>
            </div>
          </div>
        </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white/80 backdrop-blur-xl border-t border-gray-200/50 mt-20 w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-gray-600 mb-4 text-sm sm:text-base">
              <strong>Transparency Notice:</strong> As an Amazon Associate, we earn from qualifying purchases. 
              This helps fund our extensive testing process at no additional cost to you.
            </p>
            <p className="text-xs sm:text-sm text-gray-500">
              Prices and availability subject to change. Last updated: {currentMonth} {currentYear} • 
              All recommendations based on independent testing and analysis.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
