import { NextResponse } from "next/server"

export function middleware(request) {
    // console.log('middleware ran')
    if (request.nextUrl.pathname !== '/login'){
      return NextResponse.redirect(new URL('/loginsMiddleware',request.url))
    }
    // return NextResponse.json({success:'Successful'})
}
export const config = {
    matcher : ["/userlist/:path*"]
}; 