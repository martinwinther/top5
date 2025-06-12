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
  footer: {
    disclaimer: "As an Amazon Associate, we earn from qualifying purchases. This helps fund our extensive research process at no additional cost to you.",
    lastUpdated: "Prices and availability subject to change. Last updated: {month} {year}"
  }
} as const 