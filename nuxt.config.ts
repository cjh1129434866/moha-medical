// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    "/assets/style/iconfont.css",
    "/assets/style/common.css",
    "element-plus/dist/index.css",
    "element-plus/theme-chalk/display.css",
     "/assets/style/library.css",
  ],
  vite: {
    // css: {
    //   preprocessorOptions: {
    //     scss: {
    //       additionalData: '@use "@/assets/style/common.scss" as *;',
    //     }
    //   },
    // },
  },
  app: {
    head: {
      htmlAttrs: {
        class: "moha-medical"
      },
      bodyAttrs: {
        style: 'margin: 0; padding: 0;outline: none;border: none;'
      },
    }
  },
  modules: ['@element-plus/nuxt', "@nuxt/eslint", "@vant/nuxt"],
  devServer: {
    host: '0.0.0.0',
    port: 3000
  }
})