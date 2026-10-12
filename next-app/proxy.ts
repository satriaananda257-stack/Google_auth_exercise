import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

const isPublicRoute = createRouteMatcher([
  '/sign-in(.*)',
  '/sign-up(.*)',
  '/'
])

export default clerkMiddleware(async (auth, req) => {
  if (!isPublicRoute(req)) {
    await auth.protect()
  }
})

export const config = {
  matcher: [
    // 1. Skip Next.js internals dan file statis
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    
    // 2. Menggunakan tanda titik dua (:) agar lolos validasi Next.js 16
    '/_clerk/:path*',
    
    // 3. API dan TRPC routes yang sudah disesuaikan standar baru
    '/api/:path*',
    '/trpc/:path*',
  ],
};