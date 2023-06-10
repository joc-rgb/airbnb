import NextAuth, {NextAuthOptions} from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github"
import { PrismaAdapter } from "@auth/prisma-adapter";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from '@/app/libs/prismadb'
import { Adapter } from "next-auth/adapters";
import bcrypt from 'bcrypt';

export const authOptions: NextAuthOptions = {
    adapter:PrismaAdapter(prisma) as Adapter,
    providers:[
        GithubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string,
          }),
          GoogleProvider({
            clientId: process.env.GOOGLE_ID as string,
            clientSecret: process.env.GOOGLE_SECRET as string,
          }),
          CredentialsProvider({
            credentials:{
              email: {label: "Email", type:"email", placeholder: "john@gmail.com"},
              password: {label: "Password", type: "password"}
            },

            async authorize(credentials) {
                if (!credentials?.email || !credentials.password){
                  throw new Error('Invalid credentials')
                }

                const user = await prisma.user.findUnique({
                  where:{
                    email: credentials.email
                  }
                })

                if (!user || !user?.hashedPassword){
                  throw new Error('Invalid credentials')
                }

                const isCorrectPassword = await bcrypt.compare(
                  credentials.password,
                  user.hashedPassword
                )

                if (!isCorrectPassword){
                  throw new Error('Invalid credentials')
                }

                return user;
            }
          })
    ],

    pages:{
      signIn:'/',
    },
    debug: process.env.NODE_ENV === 'development',
    session: {
      // The default is `"jwt"`, an encrypted JWT (JWE) stored in the session cookie.
      strategy: 'jwt',
      // Seconds - How long until an idle session expires and is no longer valid.
      maxAge: 30 * 24 * 60 * 60, // 30 days

    },
    secret: process.env.NEXTAUTH_SECRET
}

export default NextAuth(authOptions)