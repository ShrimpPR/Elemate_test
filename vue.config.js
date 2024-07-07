const dotenv = require('dotenv');

dotenv.config();

const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/assets/styles/variables.scss";`,
        sassOptions: {
          precision: 8,
        },
        sourceMap: true,
      },
      scss: {
        additionalData: `@import "@/assets/styles/variables.scss";`,
        sassOptions: {
          precision: 8,
        },
        sourceMap: true,
      },
    },
  },
});
