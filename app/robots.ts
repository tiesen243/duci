import { getBaseUrl } from '@/lib/site'

export default function robots() {
  return {
    rules: [{ userAgent: '*' }],
    sitemap: `${getBaseUrl()}/sitemap.xml`,
    host: getBaseUrl(),
  }
}
