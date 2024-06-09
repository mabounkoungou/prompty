import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google';
import GithubeProvider from 'next-auth/providers/github';
import { connectDB } from "@utils/database";
const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
        GithubeProvider({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET
        })
    ],
    async session({ session }){

    },
    async signIn({profile}){
        try{
            await connectDB();

        } catch(error){
            console.log(error);
            return false;

        }
    }
})

export { handler as GET, handler as POST };