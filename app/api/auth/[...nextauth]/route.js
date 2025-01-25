import NextAuth from 'next-auth'
// import AppleProvider from 'next-auth/providers/apple'
// import FacebookProvider from 'next-auth/providers/facebook'
import GoogleProvider from 'next-auth/providers/google'
// import EmailProvider from 'next-auth/providers/email'
import GitHubProvider from "next-auth/providers/github";
import dbConnect from '@/db/dbConnect';
import mongoose from 'mongoose';
import User from '@/models/User';


export const authoptions = NextAuth({
  providers: [
    // OAuth authentication providers...
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      debug: true,
    }),
    //   AppleProvider({
    //     clientId: process.env.APPLE_ID,
    //     clientSecret: process.env.APPLE_SECRET
    //   }),
    //   FacebookProvider({
    //     clientId: process.env.FACEBOOK_ID,
    //     clientSecret: process.env.FACEBOOK_SECRET
    //   }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET
    }),
    //   // Passwordless / email sign in
    //   EmailProvider({
    //     server: process.env.MAIL_SERVER,
    //     from: 'NextAuth.js <no-reply@example.com>'
    //   }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      try {
        await dbConnect();
        if (account.provider === "github") {
          let existingUser = await User.findOne({ 
            email: user.email,
            provider : "github",
          });
          if (!existingUser) {
            existingUser = await User.create({
              name: user.name,
              email: user.email,
              provider: "github",
              username: user.email.split('@')[0],
            });
        }
        }
        if (account.provider === "google") {
          let existingUser = await User.findOne({ 
            email: user.email,
            provider : "google",
          });
  
          if (!existingUser) {
            existingUser = await User.create({
              name: user.name,
              email: user.email,
              provider: "google",
              username: user.email.split('@')[0],
            });
        }
      }
      return true;
      } catch (error) {
        console.error('Sign in error:', error);
        if (error.code === 11000) {
          // Handle duplicate key error
          console.error('Duplicate user attempted');
        }
        return false;
      }
    },
    async session({ session, user, token }) {
      const gitUser = await User.findOne({email: session.user.email , provider : "github" });
      const googleUser = await User.findOne({email : session.user.email , provider : "google" });
      if (gitUser) {
        session.user.name = gitUser.name;
        session.user.username = gitUser.username;
        session.user.provider = "github";
      } 
      if(googleUser) {
        session.user.name = googleUser.name
        session.user.username = googleUser.username;
        session.user.provider = "google";
      }
      // console.log(session);
      return session
    },
  }
})

export { authoptions as GET, authoptions as POST } 