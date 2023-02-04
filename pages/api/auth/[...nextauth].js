import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import prisma from "../../../lib/prismadb"
import CredentialsProvider from "next-auth/providers/credentials";

import { validateUserCredentials } from "../../../lib/utils";

export const authOptions = {
  // Configure one or more authentication providers
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      profile(profile) {
        return {
          // Return all the profile information you need.
          // The only truly required field is `id`
          // to be able identify the account when added to a database
        }
      },
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: {
          label: 'Username',
          type: 'text',
          placeholder: 'username'
        },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials, req) {
        const { email, password } = credentials
        const user = await validateUserCredentials(email, password)
 
        if (user) {
          return user
        } else {
          return null
        }
      }
    })
  ],
  session: {
    strategy: "jwt",
    
  },
  pages: {
    signIn: '/pages/LogIn',
    newUser: '/pages/SignUp'
  }
}

export default NextAuth(authOptions)