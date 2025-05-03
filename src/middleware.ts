import {
  AUTH_ERROR_PAGE,
  AUTH_LOGIN_PAGE,
  AUTH_RECOVERY_PAGE,
  AUTH_REGISTRATION_PAGE,
  AUTH_VERIFICATION_PAGE,
  ROOT_PAGE,
} from "@/routes";
import { NextRequest, NextResponse } from "next/server";

const AUTH_ROUTES = new Set([
  ROOT_PAGE,
  AUTH_LOGIN_PAGE,
  AUTH_ERROR_PAGE,
  AUTH_REGISTRATION_PAGE,
  AUTH_RECOVERY_PAGE,
  AUTH_VERIFICATION_PAGE,
]);

export async function middleware(req: NextRequest) {
  // const session = await auth();
  // const { pathname } = req.nextUrl;

  // console.log(`🔹 MIDDLEWARE SESSION: ${pathname}`, session);

  // // If the user is already logged in, prevent accessing auth routes
  // if (session && AUTH_ROUTES.has(pathname)) {
  //   return NextResponse.redirect(new URL(WORKSPACE_PAGE, req.url));
  // }

  // // If the user is not logged in, prevent accessing protected routes
  // if (!session && !AUTH_ROUTES.has(pathname)) {
  //   return NextResponse.redirect(new URL(ROOT_PAGE, req.url));
  // }

  return NextResponse.next();
}

export const config = {
  matcher:
    "/((?!_next|api/auth/.*|[^?]*\\.(?:html?|css|js|json|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
};
