import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "@/lib/prisma";
import { NextAuthOptions } from "next-auth";
import { credentialsProvider } from "./providers";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    credentialsProvider
  ],
  pages: {
    signIn: "/auth/signin",     // custom sign in page
    error: "/auth/error",       // Error code passed in query string as ?error=
    verifyRequest: "/auth/verify-request", // (for email provider)
    //newUser: "/auth/signup",    // Redirect here after registration (optional)
    //signOut: "/auth/signout",   // optional
  },
  session: {
    strategy: "jwt",
    //maxAge: 30 * 24 * 60 * 60,
  },
  callbacks: {
    jwt({ token, user }: any) {
      if (user) {
        token.id = user.id;
        token.username = user.name; // Store username in token
        token.email = user.email;
        token.role = user.role;
      }
      return token;
    },
    session({ session, token }: any) {
      if (token) {
        session.user.id = token.id;
        session.user.username = token.username; // Add username to session
        session.user.email = token.email;
        session.user.name = token.name;
        session.user.role = token.role;
      }
      return session;
    },
  },
  // events 
  events: {
    signIn: async ({ user, account, profile, isNewUser }) => {
      console.log("Sign in success:", user.name);
    },
    signOut: async ({ session, token }) => {
      console.log("User signed out");
    },
    async createUser({ user }) {
      if (user.email) {
        //await sendWelcomMessage(user.email);
      }
    },
     
  },
};