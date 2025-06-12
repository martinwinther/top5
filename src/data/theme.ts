export const theme = {
  // Primary brand colors
  primary: {
    50: 'rgb(239 246 255)', // blue-50
    100: 'rgb(219 234 254)', // blue-100
    500: 'rgb(59 130 246)', // blue-500
    600: 'rgb(37 99 235)', // blue-600
    700: 'rgb(29 78 216)', // blue-700
  },
  
  // Secondary accent colors
  secondary: {
    500: 'rgb(168 85 247)', // purple-500
    600: 'rgb(147 51 234)', // purple-600
    700: 'rgb(126 34 206)', // purple-700
  },
  
  // Success/positive colors (for pros, ratings, etc.)
  success: {
    50: 'rgb(240 253 244)', // green-50
    200: 'rgb(187 247 208)', // green-200
    500: 'rgb(34 197 94)', // green-500
    700: 'rgb(21 128 61)', // green-700
    800: 'rgb(22 101 52)', // green-800
  },
  
  // Error/negative colors (for cons)
  error: {
    50: 'rgb(254 242 242)', // red-50
    200: 'rgb(254 202 202)', // red-200
    500: 'rgb(239 68 68)', // red-500
    700: 'rgb(185 28 28)', // red-700
    800: 'rgb(153 27 27)', // red-800
  },
  
  // Warning/highlight colors (for badges, special elements)
  warning: {
    400: 'rgb(251 146 60)', // orange-400
    500: 'rgb(249 115 22)', // orange-500
  },
  
  // Neutral/gray scale
  neutral: {
    50: 'rgb(249 250 251)', // gray-50
    100: 'rgb(243 244 246)', // gray-100
    200: 'rgb(229 231 235)', // gray-200
    300: 'rgb(209 213 219)', // gray-300
    500: 'rgb(107 114 128)', // gray-500
    600: 'rgb(75 85 99)', // gray-600
    700: 'rgb(55 65 81)', // gray-700
    800: 'rgb(31 41 55)', // gray-800
    900: 'rgb(17 24 39)', // gray-900
  },
  
  // Special elements
  yellow: {
    300: 'rgb(253 224 71)', // yellow-300 for inactive stars
    400: 'rgb(250 204 21)', // yellow-400 for active stars
  },
  
  // Background gradients
  backgrounds: {
    main: 'from-gray-50 via-blue-50 to-purple-50',
    hero: 'from-slate-50 via-blue-50 to-indigo-100',
    card: 'bg-white/80',
    primaryButton: 'from-blue-600 to-purple-600',
    primaryButtonHover: 'from-blue-700 to-purple-700',
    badge: 'from-orange-400 to-red-500',
    rankBadge: 'from-blue-500 to-purple-600',
    featureTag: 'from-blue-50 to-purple-50',
  },
  
  // Blur orbs for hero section
  blurOrbs: {
    blue: 'bg-blue-400/20',
    purple: 'bg-purple-400/20',
    center: 'from-blue-300/10 to-purple-300/10',
  },
  
  // Border colors
  borders: {
    light: 'border-gray-200/50',
    medium: 'border-gray-300/50',
    feature: 'border-blue-200',
    success: 'border-green-200',
    error: 'border-red-200',
  }
} as const

// Helper function to get Tailwind class from theme
export const getThemeClass = (path: string): string => {
  const keys = path.split('.')
  let current: any = theme
  
  for (const key of keys) {
    current = current[key]
    if (!current) return ''
  }
  
  return current
} 