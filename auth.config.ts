
import type { NextAuthConfig } from "next-auth";

import Google from "next-auth/providers/google"; 
import Resend from "next-auth/providers/Resend"; 


export default {
  providers: [
   Resend
  ],
} satisfies NextAuthConfig;
