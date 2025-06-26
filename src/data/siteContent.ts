export const siteContent = {
  siteMetadata: {
    pageTitle: "Top 5 [YOUR PRODUCT CATEGORY HERE]",
    currentMonth: "[CURRENT MONTH]",
    currentYear: "[CURRENT YEAR]",
    topic: "[YOUR PRODUCT CATEGORY]",
    metaDescription: "[DESCRIBE YOUR SITE IN 1-2 SENTENCES FOR SEO]",
    siteTitle: "[YOUR SITE NAME] - [TAGLINE]"
  },
  products: [
    {
      id: 1,
      name: "[PRODUCT 1 NAME]",
      description: "[DETAILED PRODUCT DESCRIPTION - 2-3 SENTENCES HIGHLIGHTING KEY FEATURES AND BENEFITS]",
      affiliateUrl: "[YOUR AFFILIATE LINK]",
      reviewUrl: "[LINK TO DETAILED REVIEW - OPTIONAL]",
      price: "[CURRENT PRICE]",
      originalPrice: "[ORIGINAL PRICE - OPTIONAL]",
      rating: 4.8,
      features: ["[FEATURE 1]", "[FEATURE 2]", "[FEATURE 3]", "[FEATURE 4]"],
      imageUrl: "[PRODUCT IMAGE URL]",
      pros: [
        "[POSITIVE POINT 1]",
        "[POSITIVE POINT 2]",
        "[POSITIVE POINT 3]",
        "[POSITIVE POINT 4]"
      ],
      cons: [
        "[NEGATIVE POINT 1]",
        "[NEGATIVE POINT 2]"
      ]
    },
    {
      id: 2,
      name: "[PRODUCT 2 NAME]",
      description: "[DETAILED PRODUCT DESCRIPTION - HIGHLIGHT WHAT MAKES THIS PRODUCT UNIQUE]",
      affiliateUrl: "[YOUR AFFILIATE LINK]",
      reviewUrl: "[LINK TO DETAILED REVIEW - OPTIONAL]",
      price: "[CURRENT PRICE]",
      rating: 4.6,
      features: ["[UNIQUE FEATURE 1]", "[UNIQUE FEATURE 2]", "[UNIQUE FEATURE 3]", "[UNIQUE FEATURE 4]"],
      imageUrl: "[PRODUCT IMAGE URL]",
      pros: [
        "[POSITIVE POINT 1]",
        "[POSITIVE POINT 2]",
        "[POSITIVE POINT 3]",
        "[POSITIVE POINT 4]"
      ],
      cons: [
        "[NEGATIVE POINT 1]",
        "[NEGATIVE POINT 2]"
      ]
    },
    {
      id: 3,
      name: "[PRODUCT 3 NAME]",
      description: "[DETAILED PRODUCT DESCRIPTION - FOCUS ON VALUE PROPOSITION]",
      affiliateUrl: "[YOUR AFFILIATE LINK]",
      reviewUrl: "[LINK TO DETAILED REVIEW - OPTIONAL]",
      price: "[CURRENT PRICE]",
      rating: 4.4,
      features: ["[FEATURE 1]", "[FEATURE 2]", "[FEATURE 3]", "[FEATURE 4]"],
      imageUrl: "[PRODUCT IMAGE URL]",
      pros: [
        "[POSITIVE POINT 1]",
        "[POSITIVE POINT 2]",
        "[POSITIVE POINT 3]"
      ],
      cons: [
        "[NEGATIVE POINT 1]",
        "[NEGATIVE POINT 2]"
      ]
    },
    {
      id: 4,
      name: "[PRODUCT 4 NAME]",
      description: "[DETAILED PRODUCT DESCRIPTION - EMPHASIZE TARGET AUDIENCE]",
      affiliateUrl: "[YOUR AFFILIATE LINK]",
      reviewUrl: "[LINK TO DETAILED REVIEW - OPTIONAL]",
      price: "[CURRENT PRICE]",
      rating: 4.9,
      features: ["[PREMIUM FEATURE 1]", "[PREMIUM FEATURE 2]", "[PREMIUM FEATURE 3]", "[PREMIUM FEATURE 4]"],
      imageUrl: "[PRODUCT IMAGE URL]",
      pros: [
        "[POSITIVE POINT 1]",
        "[POSITIVE POINT 2]",
        "[POSITIVE POINT 3]",
        "[POSITIVE POINT 4]"
      ],
      cons: [
        "[NEGATIVE POINT 1]",
        "[NEGATIVE POINT 2]"
      ]
    },
    {
      id: 5,
      name: "[PRODUCT 5 NAME]",
      description: "[DETAILED PRODUCT DESCRIPTION - HIGHLIGHT INNOVATION OR SPECIAL FEATURES]",
      affiliateUrl: "[YOUR AFFILIATE LINK]",
      reviewUrl: "[LINK TO DETAILED REVIEW - OPTIONAL]",
      price: "[CURRENT PRICE]",
      rating: 4.7,
      features: ["[INNOVATIVE FEATURE 1]", "[INNOVATIVE FEATURE 2]", "[INNOVATIVE FEATURE 3]", "[INNOVATIVE FEATURE 4]"],
      imageUrl: "[PRODUCT IMAGE URL]",
      pros: [
        "[POSITIVE POINT 1]",
        "[POSITIVE POINT 2]",
        "[POSITIVE POINT 3]",
        "[POSITIVE POINT 4]"
      ],
      cons: [
        "[NEGATIVE POINT 1]",
        "[NEGATIVE POINT 2]"
      ]
    }
  ],
  faqSection: {
    heading: "Frequently Asked Questions",
    description: "Get answers to the most common questions about {topic} and our selection process.",
    questions: [
      {
        question: "How do you choose the products on this list?",
        answer: "We spend 100+ hours researching thousands of real user reviews, expert opinions, and detailed product comparisons. Our selection is based on verified customer experiences, performance data, and value analysis from trusted sources across the web."
      },
      {
        question: "Are these products actually tested?",
        answer: "While we don't physically test every product, we rely on extensive research from verified customer reviews, expert testing, and detailed analysis from reputable sources. This gives us a comprehensive view of real-world performance and reliability."
      },
      {
        question: "How often do you update this list?",
        answer: "We regularly update our recommendations to reflect the latest releases, price changes, and customer feedback. Our goal is to ensure you always have access to the most current and relevant information."
      },
      {
        question: "Do you receive commissions from these products?",
        answer: "Yes, we may earn commissions from qualifying purchases through our affiliate links. This helps fund our extensive research process at no additional cost to you. However, our recommendations remain unbiased and based solely on product quality and value."
      },
      {
        question: "What if I'm not satisfied with my purchase?",
        answer: "We recommend checking the retailer's return policy before making a purchase. Most reputable retailers offer return windows and customer support. If you have concerns about a specific product, we encourage you to read customer reviews and reach out to the manufacturer directly."
      }
    ]
  }
} as const 