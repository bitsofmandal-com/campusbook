import NextAuth, { NextAuthConfig, Session } from "next-auth";
import { JWT } from "next-auth/jwt";
// import ZITADEL from "next-auth/providers/zitadel";
import GoogleProvider from "next-auth/providers/google";
import { AUTH_LOGIN_PAGE } from "./routes";

const authConfig: NextAuthConfig = {
  providers: [
    // ZITADEL({
    //   clientId: process.env.AUTH_ZITADEL_ID!,
    //   issuer: process.env.AUTH_ZITADEL_ISSUER!,
    //   authorization: {
    //     params: { scope: "openid profile email offline_access" },
    //   },
    //   checks: ["pkce", "state"],
    //   wellKnown: `${process.env.ZITADEL_ISSUER}/.well-known/openid-configuration`,
    // }),
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_ID!,
      clientSecret: process.env.AUTH_GOOGLE_SECRET!,
      authorization: {
        params: { scope: "openid profile email" },
      },
    }),
  ],
  callbacks: {
    async signIn({ account, profile }): Promise<string | boolean> {
      if (account?.provider === "zitadel") {
        return profile?.email_verified ?? "Email not verified";
      }
      return true; // Do different verification for other providers that don't have `email_verified`
    },

    async jwt({ token, user, account }): Promise<JWT> {
      console.log("🔹 JWT CALLBACK:", { token, user, account });
      const newToken: JWT = token;

      if (user) newToken.user = user;
      if (account) newToken.refreshToken = account.refresh_token;
      if (account) newToken.accessToken = account.access_token;

      if (account) newToken.expiresAt = (account?.expires_at ?? 0) * 1000;
      // Return previous token if the access token has not expired yet
      console.log(
        "🔹 EXPIRES AT:",
        newToken.expiresAt,
        Date.now(),
        account?.expires_at
      );

      if (new Date() < new Date(newToken.expiresAt)) {
        console.log(
          "======================= TOKEN NOT EXPIRED ==============================="
        );
        return newToken;
      }
      console.log(
        "======================= TOKEN HAS EXPIRED ==============================="
      );
      // Access token has expired, try to update it
      return refreshAccessToken(newToken);
    },
    async session({ session, token, user }): Promise<Session> {
      console.log("🔹 SESSION CALLBACK:", { session, token, user });

      if (user) {
        session.user = user;
      }

      return session;
    },

    async authorized({ auth }): Promise<boolean> {
      console.log("🔹 AUTHORIZED CALLBACK:", auth);
      return !!auth;
    },
  },
  pages: {
    signIn: AUTH_LOGIN_PAGE,
  },
};

async function refreshAccessToken(token: JWT): Promise<JWT> {
  try {
    const response = await fetch(
      `${process.env.AUTH_ZITADEL_ISSUER}/oauth/v2/token`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          client_id: process.env.AUTH_ZITADEL_ID ?? "",
          grant_type: "refresh_token",
          refresh_token: token.refreshToken ?? "",
        }),
      }
    );

    const refreshedTokens: ZitadelRefreshedTokens = await response.json();

    if (!response.ok) {
      throw refreshedTokens;
    }

    console.log("🔹 Refreshed access token from Zitadel", refreshedTokens);

    return {
      ...token,
      accessToken: refreshedTokens.access_token,
      expiresAt: Date.now() + refreshedTokens?.expires_in * 1000, // Expiry in milliseconds
      refreshToken: refreshedTokens.refresh_token ?? token.refreshToken, // Fall back to old refresh token if new one isn't returned
    };
  } catch (error) {
    console.error("Error refreshing access token from Zitadel", error);
    return {
      ...token,
      error: "RefreshAccessTokenError",
    };
  }
}

export const { handlers, signIn, signOut, auth } = NextAuth(authConfig);
