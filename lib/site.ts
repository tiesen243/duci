export const getBaseUrl = () => {
  if (typeof window !== 'undefined') return window.location.origin
  if (process.env.APP_URL) return `https://${process.env.APP_URL}`
  return `http://localhost:${process.env.PORT ?? 3000}`
}

const title = {
  default: 'Duci',
  template: '%s | Duci',
}
const description = 'E-commerce platform for the future built with Next.js and Elysiajs'

export const siteConfig = {
  metadataBase: new URL(getBaseUrl()),
  title,
  description,
  applicationName: title.default,
  keywords: ['next.js', 'elysiajs', 'ecommerce', 'react', 'typescript', 'tailwindcss', 'tiesen243'],
  authors: { name: 'Tiesen', url: 'https://tiesen.id.vn/' },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title,
    description,
    type: 'website',
    url: getBaseUrl(),
    siteName: title.default,
    locale: 'vi_VN',
  },
  twitter: {
    title,
    description,
    card: 'summary_large_image',
    site: '@duci',
    creator: 'Tiesen',
    creatorId: '@tiesen243',
  },
  alternates: {
    canonical: getBaseUrl(),
  },
}
