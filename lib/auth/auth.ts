import NextAuth, { NextAuthConfig } from 'next-auth'
import Google from 'next-auth/providers/google'
import { DrizzleAdapter } from '@auth/drizzle-adapter'
import { db } from '@/db/schema'

export const authOptions = {
  adapter: DrizzleAdapter(db),
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      authorization: {
        params: {
          prompt: 'consent',
          access_type: 'offline',
          response_type: 'code'
        }
      }
    })
  ],
  callbacks: {
    async session ({ session, user }) {
      session.user.id = user.id
      return session
    },
    authorized ({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user
      const paths = ['/dashboard']
      const isProtected = paths.some((path) => nextUrl.pathname.startsWith(path))

      if (isProtected && !isLoggedIn) {
        const redirectUrl = new URL('/auth', nextUrl.href)
        redirectUrl.searchParams.append('callbackUrl', nextUrl.href)
        return Response.redirect(redirectUrl)
      }

      return true
    }
  }
} satisfies NextAuthConfig

export const { handlers, auth, signIn, signOut } = NextAuth(authOptions)
