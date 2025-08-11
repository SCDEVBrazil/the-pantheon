import NextAuth from "next-auth"

declare module "next-auth" {
  interface User {
    subscriptionStatus?: string
    userClassification?: string
  }

  interface Session {
    user: {
      id: string
      name?: string | null
      email?: string | null
      image?: string | null
      subscriptionStatus?: string
      userClassification?: string
    }
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    subscriptionStatus?: string
    userClassification?: string
  }
}