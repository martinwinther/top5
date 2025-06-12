import { siteContent } from './siteContent'
import { templateDefaults } from './templateDefaults'

// Merge site content with template defaults
export const siteConfig = {
  ...siteContent,
  ...templateDefaults
} as const 