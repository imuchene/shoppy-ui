import { NextRequest } from 'next/server';

const unAuthorizedRoutes = ['/auth/login', '/auth/signup'];

export function middleware(request: NextRequest) {
  const auth = request.cookies.get('Authentication')?.value;

  if (
    !auth &&
    !unAuthorizedRoutes.some((route) =>
      request.nextUrl.pathname.startsWith(route),
    )
  ) {
    return Response.redirect(new URL('/auth/login', request.url));
  }
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};
