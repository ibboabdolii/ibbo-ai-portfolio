import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  const isEnglishPath =
    request.nextUrl.pathname === '/en' ||
    request.nextUrl.pathname.startsWith('/en/');
  const queryLanguage = request.nextUrl.searchParams.get('lang');
  const language = isEnglishPath || queryLanguage === 'en' ? 'en' : 'sv';

  requestHeaders.set('x-portfolio-lang', language);

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)'],
};
