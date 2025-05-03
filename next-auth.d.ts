import "next-auth";

declare module "next-auth/jwt" {
  interface JWT {
    user: User;
    accessToken?: string;
    refreshToken?: string;
    error?: "RefreshAccessTokenError";
    expiresAt: number;
  }
}

declare module "next-auth" {
  interface Session {
    accessToken?: string;
    error?: "RefreshAccessTokenError";
  }
}
