import GoogleProvider from "next-auth/providers/google";
import type { AuthOptions } from "next-auth";

export const authOptions: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: import.meta.env.VITE_GOOGLE_CLIENT_ID ?? "",
      clientSecret: import.meta.env.VITE_GOOGLE_CLIENT_SECRET ?? "",
    }),
  ],
  pages: {
    signIn: "/",
  },
  callbacks: {
    async session({ session }) {
      return session;
    },
  },
};