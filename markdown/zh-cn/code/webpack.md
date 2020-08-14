# 脚手架

## 简介
项目使用gem-mine的Toolkit脚手架，文档参考：[Toolkit文档](https://gem-mine.github.io/toolkit-doc/#/)

## 安装
详细说明见toolkit文档，以下简述本项目的安装步骤

### 1. 全局安装`@gem-mine/cli`
```
npm i @gem-mine/cli -g
gem-mine-cli -V
```

### 2. 创建项目
按指令选择相关配置，本项目使用base模板
```
gmc create xxx // 项目名称
```

## 使用

### 1.启动项目
```
npm start

// 开启mock
npx gms dev --mock


```

### 2.启动文档站
```
npm run dev:doc
```


## 第三方库
以下罗列出项目所有使用的第三方库

### gem-mine内置的库
包括：@gem-mine/durex、@gem-mine/durex-router，@gem-mine/intl，@gem-mine/request，@sdp.nd/fish
相关文档：
- [gem-mine文档](https://www.yuque.com/gem-mine/util)
- [fish文档](http://fish-docs.sdp.101.com/readme)

### classnames
[classnames文档](https://www.npmjs.com/package/classnames)

### lodash
[lodash文档](https://www.lodashjs.com/)

### react-hook-form
[react-hook-form文档](https://react-hook-form.com/zh/)

### mockjs
[mockjs文档](http://mockjs.com/0.1/#)