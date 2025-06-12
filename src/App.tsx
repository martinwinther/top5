import React from 'react'
import { siteConfig } from './data/siteConfig'
import { theme } from './data/theme'

interface Product {
  readonly id: number
  readonly name: string
  readonly description: string
  readonly affiliateUrl: string
  readonly reviewUrl: string
  readonly price: string
  readonly originalPrice?: string
  readonly rating: number
  readonly features: readonly string[]
  readonly imageUrl: string
  readonly pros: readonly string[]
  readonly cons: readonly string[]
}

function App() {
  // All data now comes from JSON config
  const { siteMetadata, heroSection, introSection, ctaSection, footer, products } = siteConfig
  
  // Helper function to replace template variables
  const replaceVariables = (text: string): string => {
    return text
      .replace(/{pageTitle}/g, siteMetadata.pageTitle)
      .replace(/{month}/g, siteMetadata.currentMonth)
      .replace(/{year}/g, siteMetadata.currentYear)
      .replace(/{topic}/g, siteMetadata.topic.toLowerCase())
  }

  const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
    return (
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            className={`w-4 h-4`}
            style={{ color: star <= rating ? theme.yellow[400] : theme.neutral[300] }}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
        <span className="ml-2 text-sm font-medium" style={{ color: theme.neutral[600] }}>{rating}</span>
      </div>
    )
  }

  const ProductCard: React.FC<{ product: Product; rank: number }> = ({ product, rank }) => (
    <div 
      className={`group relative ${theme.backgrounds.card} backdrop-blur-xl rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 p-6 sm:p-8 lg:p-12 ${theme.borders.light} hover:${theme.borders.medium} hover:-translate-y-2 max-w-6xl mx-auto w-full`}
    >
      {/* Rank Badge */}
      <div 
        className={`absolute -top-4 -left-4 w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br ${theme.backgrounds.rankBadge} rounded-2xl flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300`}
      >
        <span className="text-white text-xl lg:text-2xl font-bold">{rank}</span>
      </div>
      
      {/* Best Choice Badge for #1 */}
      {rank === 1 && (
        <div 
          className={`absolute -top-3 right-8 bg-gradient-to-r ${theme.backgrounds.badge} text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg`}
        >
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
                <h3 
                  className="text-2xl lg:text-3xl font-bold mb-2 transition-colors duration-300"
                  style={{ 
                    color: theme.neutral[900],
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = theme.primary[600]}
                  onMouseLeave={(e) => e.currentTarget.style.color = theme.neutral[900]}
                >
                  {product.name}
                </h3>
                <StarRating rating={product.rating} />
              </div>
              <div className="text-left lg:text-right">
                <div className="text-3xl lg:text-4xl font-bold" style={{ color: theme.neutral[900] }}>{product.price}</div>
                {product.originalPrice && (
                  <div className="text-lg line-through" style={{ color: theme.neutral[500] }}>{product.originalPrice}</div>
                )}
              </div>
            </div>

            <p className="mb-6 leading-relaxed text-lg lg:text-xl" style={{ color: theme.neutral[600] }}>{product.description}</p>

            {/* Features */}
            <div className="flex flex-wrap gap-2 mb-6 justify-start">
              {product.features.map((feature, index) => (
                <span
                  key={index}
                  className={`bg-gradient-to-r ${theme.backgrounds.featureTag} px-4 py-2 rounded-full text-sm lg:text-base font-medium ${theme.borders.feature}`}
                  style={{ color: theme.primary[700] }}
                >
                  {feature}
                </span>
              ))}
            </div>

            {/* Pros and Cons */}
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {/* Pros */}
              <div 
                className={`rounded-2xl p-4 ${theme.borders.success}`}
                style={{ backgroundColor: theme.success[50] }}
              >
                <h4 className="font-semibold mb-3 flex items-center" style={{ color: theme.success[800] }}>
                  <span className="mr-2">✓</span>
                  Pros
                </h4>
                <ul className="space-y-2">
                  {product.pros.map((pro, index) => (
                    <li key={index} className="text-sm flex items-start" style={{ color: theme.success[700] }}>
                      <span className="mr-2 mt-0.5" style={{ color: theme.success[500] }}>•</span>
                      {pro}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Cons */}
              <div 
                className={`rounded-2xl p-4 ${theme.borders.error}`}
                style={{ backgroundColor: theme.error[50] }}
              >
                <h4 className="font-semibold mb-3 flex items-center" style={{ color: theme.error[800] }}>
                  <span className="mr-2">✕</span>
                  Cons
                </h4>
                <ul className="space-y-2">
                  {product.cons.map((con, index) => (
                    <li key={index} className="text-sm flex items-start" style={{ color: theme.error[700] }}>
                      <span className="mr-2 mt-0.5" style={{ color: theme.error[500] }}>•</span>
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
                className={`flex-1 bg-gradient-to-r ${theme.backgrounds.primaryButton} hover:${theme.backgrounds.primaryButtonHover} text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 text-center text-lg lg:text-xl shadow-lg hover:shadow-xl transform hover:scale-105`}
              >
                Check Price →
              </a>
              <a
                href={product.reviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 font-semibold py-4 px-8 rounded-2xl transition-all duration-300 text-center text-lg lg:text-xl border-2"
                style={{
                  backgroundColor: theme.neutral[100],
                  color: theme.neutral[800],
                  borderColor: theme.neutral[200]
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = theme.neutral[200]
                  e.currentTarget.style.borderColor = theme.neutral[300]
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = theme.neutral[100]
                  e.currentTarget.style.borderColor = theme.neutral[200]
                }}
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
    <div className={`min-h-screen w-full bg-gradient-to-br ${theme.backgrounds.main}`}>
      {/* Hero Section */}
      <div className={`relative overflow-hidden w-full bg-gradient-to-br ${theme.backgrounds.hero}`}>
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className={`absolute top-20 left-10 w-72 h-72 ${theme.blurOrbs.blue} rounded-full blur-3xl`}></div>
          <div className={`absolute bottom-20 right-10 w-96 h-96 ${theme.blurOrbs.purple} rounded-full blur-3xl`}></div>
          <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r ${theme.blurOrbs.center} rounded-full blur-3xl`}></div>
        </div>
        
        <div className="relative w-full px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="text-center max-w-7xl mx-auto">
            {/* Small badge */}
            <div className={`inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg ${theme.borders.light} mb-6`}>
              <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: theme.success[500] }}></div>
              <span className="font-medium text-sm" style={{ color: theme.neutral[700] }}>
                Updated {siteMetadata.currentMonth} {siteMetadata.currentYear}
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight tracking-tight" style={{ color: theme.neutral[900] }}>
              {siteMetadata.pageTitle}
            </h1>
            
            {/* Value proposition */}
            <p className="text-lg sm:text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-light leading-relaxed" style={{ color: theme.neutral[700] }}>
              {heroSection.valueProposition}
            </p>
            
            {/* Trust indicators */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              {heroSection.trustIndicators.map((indicator, index) => (
                <div key={index} className={`flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-xl shadow-md ${theme.borders.light}`}>
                  <div className={`w-8 h-8 bg-gradient-to-br ${theme.backgrounds.rankBadge} rounded-lg flex items-center justify-center`}>
                    <span className="text-white text-sm">{indicator.icon}</span>
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-sm" style={{ color: theme.neutral[900] }}>{indicator.title}</div>
                    <div className="text-xs" style={{ color: theme.neutral[600] }}>{indicator.subtitle}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="w-full px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto">
          <div className={`bg-white/60 backdrop-blur-xl rounded-3xl shadow-xl p-12 ${theme.borders.light} mb-16`}>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6" style={{ color: theme.neutral[900] }}>{introSection.heading}</h2>
              <p className="text-xl leading-relaxed mb-8" style={{ color: theme.neutral[700] }}>
                {replaceVariables(introSection.description)}
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                {introSection.methodologyCards.map((card, index) => (
                  <div key={index} className="text-center">
                    <div className={`w-16 h-16 bg-gradient-to-br ${theme.backgrounds.rankBadge} rounded-2xl mx-auto mb-4 flex items-center justify-center`}>
                      <span className="text-2xl">{card.icon}</span>
                    </div>
                    <h3 className="font-bold mb-2" style={{ color: theme.neutral[900] }}>{card.title}</h3>
                    <p style={{ color: theme.neutral[600] }}>{card.description}</p>
                  </div>
                ))}
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
          <div className={`mt-20 text-center bg-gradient-to-r ${theme.backgrounds.primaryButton} rounded-3xl p-12 text-white shadow-2xl max-w-6xl mx-auto`}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">{ctaSection.heading}</h2>
            <p className="text-lg sm:text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              {ctaSection.description}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              {ctaSection.badges.map((badge, index) => (
                <div key={index} className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
                  <span className="font-semibold">{badge.icon} {badge.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className={`bg-white/80 backdrop-blur-xl border-t ${theme.borders.light} mt-20 w-full`}>
        <div className="w-full px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-7xl mx-auto text-center">
            <p className="mb-4 text-sm sm:text-base" style={{ color: theme.neutral[600] }}>
              <strong>Transparency Notice:</strong> {footer.disclaimer}
            </p>
            <p className="text-xs sm:text-sm" style={{ color: theme.neutral[500] }}>
              {replaceVariables(footer.lastUpdated)}
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
