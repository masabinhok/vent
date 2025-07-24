import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest){
  const token = request.cookies.get('access_token')?.value;

  const isLoggedIn = !!token;
  const pathname = request.nextUrl.pathname;

  if(!isLoggedIn && pathname.startsWith('/dashboard')){
    return NextResponse.redirect(new URL('/login', request.url));
  }

  if(isLoggedIn && pathname === '/login' || pathname === '/register'){
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  return NextResponse.next();

}

export const config = {
  matcher: ['/dashboard/:path*', '/login', '/register']
}