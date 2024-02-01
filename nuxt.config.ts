import config from './config'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // @ts-ignore
  rapidlaunch: {
    config
  },
  extends: [
    '@rapidlaunch-it/nuxt-rapidlaunch'
  ],
})
