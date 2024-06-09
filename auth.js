import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import Facebook from "next-auth/providers/facebook";
import Google from "next-auth/providers/google";
import clientPromise from "./lib/clientPromise";

export const {
  auth,
  signIn,
  signOut,
  handlers: { GET, POST },
} = NextAuth({
  adapter: MongoDBAdapter(clientPromise),
  session: {
    strategy: "jwt",
  },

  trustHost: true,
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    Facebook({
      clientId: "991797515912171",
      clientSecret: "afaa08d2b3114e319585e8ace1da4a6e",
    }),
    Google({
      clientId:
        "37752210176-tbhc7uror3v9laa7bdtsn99il7sjje0i.apps.googleusercontent.com",
      clientSecret: "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",
    }),
    CredentialsProvider({
      async authorize(credentials, req) {
        return credentials;
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) token.id = user.id;
      return token;
    },
    async session({ session, token }) {
      session.user.id = token?.id;
      return session;
    },
  },
});
