import NextAuth, {NextAuthOptions} from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github"
import { PrismaAdapter } from "@auth/prisma-adapter";

import prisma from '@/app/libs/prismadb'
import { Adapter } from "next-auth/adapters";

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
    ]
}