export const templateDefaults = {
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
  },
  footer: {
    disclaimer: "As an Amazon Associate, we earn from qualifying purchases. This helps fund our extensive research process at no additional cost to you.",
    lastUpdated: "Prices and availability subject to change. Last updated: {month} {year}"
  }
} as const 