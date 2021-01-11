import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'toy-poplar',
  favicon: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: '/assets/images/logo.png',
  description: '好用好玩的h5组件库',
  outputPath: 'docs-dist',
  copy: [{
    from: 'assets/images',
    to: 'assets/images'
  }]
  // more config: https://d.umijs.org/config
});