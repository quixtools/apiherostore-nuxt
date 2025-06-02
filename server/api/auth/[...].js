import { NuxtAuthHandler } from '#auth';
import CredentialsProvider from "next-auth/providers/credentials";

export default NuxtAuthHandler({
  secret: useRuntimeConfig().apiSecret,
  providers: [
    CredentialsProvider.default({
      name : 'Credentials',
      async authorize(credentials) {
        try {
          const response = await $fetch('https://apihero-api.quixtools.com/api/v1/authentication/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: {
              email: credentials?.email,
              password: credentials?.password,
            },
          });
          if (response?.success) {
            return {
              id: response.data.id,
              name: response.data.name,
              email: response.data.email,
              accessToken: response.data.token,
            };
          } else {
            return null;
          }
        } catch {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
        token.accessToken = user.accessToken;
      }
      return token;
    },

    async session({ session, token }) {
      session.user.id = token.id;
      session.user.name = token.name;
      session.user.email = token.email;
      session.user.accessToken = token.accessToken;
      return session;
    },
  },
});
