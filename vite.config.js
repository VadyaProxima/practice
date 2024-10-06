import { defineConfig } from 'vite';

export default defineConfig({

  server: {
    port: 3000, 
  },
  
  // Включаем SCSS в качестве препроцессора для стилей
  css: {
    preprocessorOptions: {
      scss: {
        // Здесь можно добавить общие переменные или миксины, которые будут доступны во всех файлах
        additionalData: `@import "./variables.scss";`
      },
    },
  },


  
 
  build: {
    outDir: './dist', 
    sourcemap: true,  
  }
});
