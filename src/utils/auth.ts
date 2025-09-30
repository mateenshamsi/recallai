import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  
  // CRITICAL: Add baseURL
  baseURL: process.env.BETTER_AUTH_URL || "http://localhost:3000",
  
  // Add trusted origins
  trustedOrigins: ["http://localhost:3000"],
  
  emailAndPassword: {
    enabled: true,
  },
  
  socialProviders: {
    google: {
      enabled: true,
      prompt: "select_account",
      // Remove NEXT_PUBLIC_ prefix - these should be server-only
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    },
    github: {
      enabled: true,
      clientId: process.env.GITHUB_CLIENT_ID || "",
      clientSecret: process.env.GITHUB_CLIENT_SECRET || "",
    },
  },
});