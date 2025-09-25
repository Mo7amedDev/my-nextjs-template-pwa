import { DefaultSession } from "next-auth";
import FacebookProvider from "next-auth/providers/facebook";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "../prisma";
import GoogleProvider from "next-auth/providers/google";
import bcrypt from "bcryptjs";

declare module "next-auth" {
  interface Session {
    user: {
      id: string; // add id to session.user
    } & DefaultSession["user"];
  }

  interface User {
    id: string; // make sure user also has id
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string; // also extend JWT if you use callbacks
  }
}


/* export const facebookProvider = FacebookProvider({
  id: 'facebook',
  clientId: process.env.FACEBOOK_CLIENT_ID!,
  clientSecret: process.env.FACEBOOK_CLIENT_SECRET!,
  authorization: {
    params: {
      scope: [
        "public_profile",
        "email",
        "pages_show_list",
        "pages_read_engagement",
        "pages_manage_metadata",
        "pages_manage_posts",
        "pages_manage_engagement",
        "pages_messaging",
        "business_management",
        'read_insights',
      ].join(" ")
    }
  }
}) */
/* export const instagramProvider = FacebookProvider({
  id: 'instagram',
  clientId: process.env.FACEBOOK_CLIENT_ID!,
  clientSecret: process.env.FACEBOOK_CLIENT_SECRET!,
  authorization: {
    params: {
      scope: [
        "pages_show_list",              // discover Pages
        "business_management",          // manage assets
        "instagram_basic",              // read IG account & media
        "instagram_manage_comments",    // list & reply to comments
        "instagram_manage_insights",    // insights
        "instagram_content_publish",    // publish media
      ].join(" ")
    }
  }
}) */

export const credentialsProvider = CredentialsProvider({
  name: 'credentials',
  credentials: {
    userName: { label: 'UserName', type: 'text' },
    password: { label: 'Password', type: 'password' },
    email: { label: 'Email', type: 'email' }
  },
    async authorize(credentials) {
          if (!credentials?.userName || !credentials?.password) {
            throw new Error("Username and password are required");
          }
  
          try {
            // Find user by username (case-insensitive search)
            const user = await prisma.user.findFirst({
              where: {
                name: {
                  equals: credentials.userName,
                  mode: 'insensitive' // Case-insensitive search
                }
              },
            });
  
            if (!user) {
              throw new Error("Invalid credentials");
            }
  
            // Verify password
            const passwordValid = await bcrypt.compare(
              credentials.password,
              user.password
            );
  
            if (!passwordValid) {
              throw new Error("Invalid credentials");
            }
  
            // Return user object without password
            return {
              id: user.id,
              name: user.name,
              email: user.email, // Still include email if needed for other purposes
              role: user.role,
            };
          } catch (error) {
            console.error("Authentication error:", error);
            throw new Error("Authentication failed");
          }
        },
})

export const googleProvider = GoogleProvider({
  clientId: process.env.GOOGLE_CLIENT_ID!,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET!
})
