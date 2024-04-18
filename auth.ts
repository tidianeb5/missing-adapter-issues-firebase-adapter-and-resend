
import NextAuth from "next-auth";

import authConfig from "@/auth.config";
import { FirestoreAdapter } from "@auth/firebase-adapter";

import { cert } from "firebase-admin/app";



export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  ...authConfig,
  pages: {
    signIn: "/auth/login",
    error: "/auth/error",
  },


  adapter: FirestoreAdapter({
    credential: cert({
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID!,
      clientEmail: process.env.SERVICE_ACCOUNT_CLIENT_EMAIL!,
      privateKey: process.env.SERVICE_ACCOUNT_PRIVATE_KEY!.replace(
        /\\n/g,
        "\n"
      ),
    }),
  }),
  session: { strategy: "jwt" },
 
});
