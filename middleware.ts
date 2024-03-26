import { auth } from '@/server/auth'
import { NextResponse, type NextRequest } from 'next/server'

export const middleware = async (req: NextRequest) => {
  const session = await auth()
  const url = req.nextUrl
  const path = url.pathname

  // Redirect to sign in if user is not signed in and not on the sign in page
  if (!path.startsWith('/auth') && !session) return NextResponse.redirect(new URL('/auth/signin', url))

  // Redirect to dashboard if user is already signed in
  if (path.startsWith('/auth') && session) return NextResponse.redirect(new URL('/', url))

  // Redirect to homepage if user is not admin
  if (path.startsWith('/dashboard') && session && session.user.role !== 'ADMIN')
    return NextResponse.redirect(new URL('/', url))

  return NextResponse.next()
}

export const config = {
  matcher: ['/auth/:path*', '/dashboard/:path*'],
}
