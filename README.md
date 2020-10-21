### 环境准备

- nodejs 10+

建议将npm源指向taobao源，否则容易产生依赖安装错误。执行如下命令：
```bash
npm config set registry https://registry.npm.taobao.org
```

### 开发指南

``` bash
# install dependencies
npm install / yarn

# serve with hot reload at localhost:8000
npm run dev / yarn dev / npm start / yarn start

# build for dll production with minification
npm run build:dll / yarn build:dll

# build for production with minification
npm run build / yarn build
```
