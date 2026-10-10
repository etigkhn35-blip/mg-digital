import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  const locale =
    pathname === "/tr" || pathname.startsWith("/tr/")
      ? "tr"
      : "en";

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-mg-locale", locale);

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)",
  ],
};