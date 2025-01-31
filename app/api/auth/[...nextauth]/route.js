import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google";
import connectDB from "@/db/connectDB";
import User from '@/models/User'
import Payment from '@/models/Payment'

export const authOptions = NextAuth({
    // Configure one or more authentication providers
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        })
        // ...add more providers here
    ],
    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
            if (account.provider == "github") {

                //connect to database
                await connectDB();

                //check if user already exists
                const currentUser = await User.findOne({ email: email })

                if (!currentUser) {
                    const newUser = await User.create({
                        email: user.email,
                        username: (user.email.split('@')[0]).replace((/[0-9]/g), ''),
                    })
                }
                return true
            }

            if (account.provider === "google") {
                //connect to database
                await connectDB();

                //check if user already exists
                const currentUser = await User.findOne({ email: email })

                if (!currentUser) {
                    const newUser = await User.create({
                        email: user.email,
                        username: (user.email.split('@')[0]).replace((/[0-9]/g), ''),
                    })
                }
                return true
            }
        },
        async session({ session, user, token }) {
            const dbUser = await User.findOne({ email: session.user.email })
            session.user.name = dbUser.username;
            return session
        },
    }
})

export { authOptions as GET, authOptions as POST }
