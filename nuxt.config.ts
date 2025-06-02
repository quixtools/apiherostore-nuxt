// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  css: ['~/assets/css/style.css'],
  modules: ['@nuxt/eslint', '@pinia/nuxt', '@vueuse/nuxt', '@sidebase/nuxt-auth'],
  runtimeConfig: {
    apiSecret: '1ggYh775.fasPeBvz!',
    public: {
      apiBase: process.env.NUXT_API_BASE_URL,
      apiTimeout: process.env.NUXT_API_TIMEOUT,
      titleBaseText: 'apihero - ',
    },
  },
  auth: {
    enableGlobalAppMiddleware: true,
    origin: process.env.NUXT_PUBLIC_SITE_URL,
    baseURL: process.env.NUXT_PUBLIC_SITE_URL,
    provider: {
      type: 'authjs',
      trustHost: false,
      defaultProvider: 'credentials',
    },
    token: {
      maxAgeInSeconds: 60 * 60 * 24 * 7,
      type: 'Bearer',
    },
    session: {
      strategy: 'jwt',
    },
    sessionDataType: {
      userId: 'string',
      userEmail: 'string',
      userName: 'string',
      iat: 'number',
      exp: 'number',
    },
    login: {
      url: '/login',
    },
  },
});
