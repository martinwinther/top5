export const siteConfig = {
  siteMetadata: {
    pageTitle: "Top 5 Switch 2 Controllers",
    currentMonth: "June",
    currentYear: "2025",
    topic: "Switch 2 Controllers",
    metaDescription: "Top 5 product recommendations and reviews. Unbiased affiliate marketing template for product comparisons.",
    siteTitle: "Top 5 Products - Affiliate Marketing Template"
  },
  heroSection: {
    valueProposition: "Handpicked from thousands of reviews to save you time and money",
    trustIndicators: [
      {
        icon: "🔍",
        title: "100+ Hours",
        subtitle: "Research"
      },
      {
        icon: "⭐",
        title: "1,000+",
        subtitle: "Reviews"
      },
      {
        icon: "✓",
        title: "Unbiased",
        subtitle: "No Sponsors"
      }
    ]
  },
  introSection: {
    heading: "How We Choose Our Recommendations",
    description: "We spend 100+ hours researching and analyzing thousands of real user reviews, expert opinions, and detailed product comparisons. Our carefully curated list represents the absolute best {topic} based on verified customer experiences, performance data, and value analysis from trusted sources across the web.",
    methodologyCards: [
      {
        icon: "📋",
        title: "Curated Research",
        description: "Handpicked from extensive research"
      },
      {
        icon: "👥",
        title: "Real User Reviews",
        description: "Based on verified customer feedback"
      },
      {
        icon: "⚡",
        title: "Always Current",
        description: "Updated with latest releases"
      }
    ]
  },
  ctaSection: {
    heading: "Transparent & Honest Curation",
    description: "We research extensively and handpick products based on real customer reviews and expert analysis. No products, no bias - just honest recommendations.",
    badges: [
      {
        icon: "🔍",
        text: "Research-Based Selection"
      },
      {
        icon: "💯",
        text: "Unbiased Curation"
      }
    ]
  },
  footer: {
    disclaimer: "As an Amazon Associate, we earn from qualifying purchases. This helps fund our extensive testing process at no additional cost to you.",
    lastUpdated: "Prices and availability subject to change. Last updated: {month} {year} • All recommendations based on independent testing and analysis."
  },
  products: [
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
      pros: [
        "Exceptional 40-hour battery life",
        "Premium build quality",
        "Advanced haptic feedback",
        "Highly customizable buttons"
      ],
      cons: [
        "Higher price point",
        "Slightly heavier than standard controllers"
      ]
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
      pros: [
        "Great value for money",
        "Stunning RGB lighting effects",
        "Programmable macros",
        "Comfortable ergonomic design"
      ],
      cons: [
        "RGB can drain battery faster",
        "Macro setup can be complex for beginners"
      ]
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
      pros: [
        "Excellent grip texture",
        "Fast USB-C charging",
        "Great value for money",
        "Adjustable trigger sensitivity"
      ],
      cons: [
        "Basic design aesthetic",
        "No advanced features like RGB"
      ]
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
      pros: [
        "Tournament-grade precision",
        "Mechanical buttons feel amazing",
        "Hall effect sticks prevent drift",
        "Includes premium accessories"
      ],
      cons: [
        "Most expensive option",
        "Can be overwhelming for casual gamers"
      ]
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
      pros: [
        "Unique modular design",
        "Cross-platform compatibility",
        "Adaptive triggers work great",
        "Future-proof with swappable parts"
      ],
      cons: [
        "Modular system can feel loose",
        "Learning curve for customization"
      ]
    }
  ]
} as const 