import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const res = NextResponse.next();

  // HTTPS redirect
  const proto = req.headers.get("x-forwarded-proto");
  if (proto && proto !== "https") {
    const url = new URL(req.url);
    url.protocol = "https:";
    return NextResponse.redirect(url, 301);
  }

  // HSTS
  res.headers.set("Strict-Transport-Security", "max-age=31536000; includeSubDomains; preload");

  // Diğer header’lar
  res.headers.set("X-Frame-Options", "DENY");
  res.headers.set("X-Content-Type-Options", "nosniff");
  res.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  res.headers.set("Permissions-Policy", "camera=(), microphone=(), geolocation=()");

  // CSP
  res.headers.set("Content-Security-Policy",
    "default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob:; font-src 'self'; frame-ancestors 'none';"
  );

  return res;
}
