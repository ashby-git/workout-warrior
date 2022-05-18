import NextAuth from "next-auth";
import FacebookProvider from "next-auth/providers/facebook";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_ID,
      clientSecret: process.env.FACEBOOK_SECRET,
    }),
  ],

  //   database: process.env.DATABASE_URL,

  secret: process.env.SECRET,

  session: {
    strategy: "jwt",
  },
  jwt: {
    secret: process.env.SECRET,
  },
  pages: {},
  callbacks: {},
  events: {},
  debug: false,
});
