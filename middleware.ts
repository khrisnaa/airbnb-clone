import useLoginModal from '@/app/hooks/useLoginModal';
import { auth as middleware } from '@/auth';
import { NextResponse } from 'next/server';

const protectedRoutes = [
  '/trips',
  '/reservations',
  '/properties',
  '/favorites',
];

export default middleware((req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;

  const isProtectedRoutes = protectedRoutes.includes(nextUrl.pathname);

  if (isProtectedRoutes) {
    if (!isLoggedIn) {
      return NextResponse.redirect(new URL('/', nextUrl));
    }
  }
});

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
    '/trips',
    '/reservations',
    '/properties',
    '/favorites',
  ],
};
