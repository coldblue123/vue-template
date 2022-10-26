## 简介
```
一个简单的vue项目配置模板
vue2 单页

1. cdn 引入大文件  vue.js  vuex vueRouter element-ui tailwindcss g2plot
2. eslint 保存自动格式化代码
3. sass 
4. vuex 命名空间模块化管理 文件: store/*
5. axios 二次封装, 适配当前接口规范 文件: utils/request.js
6. 全局路由拦截 文件: permission.js
7. 全局环境变量在 .env 两个文件中, 分别对应正式服和测试服
8. 图表组件使用 G2Plot 优点是文档简洁易懂, 组件适应性强, 贴近项目设计风格 
   链接: https://g2plot.antv.vision/zh

```

## 安装

```
正常启动流程
npm install
npm run dev
npm run build

全局格式化代码
npm run lint:fix
```

