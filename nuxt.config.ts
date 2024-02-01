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
  nitro: {
    preset: 'vercel',
    output:{
      dir: '../../.vercel/output'
    }
  },
  workspaceDir: '../../',
  srcDir: 'src',
  devtools: { enabled: true },
  buildDir: '../../dist/apps/deploy-test1/.nuxt',
  devServer: {
    host: 'localhost',
    port: 4200,
  },
})
