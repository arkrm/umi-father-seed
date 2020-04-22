<h1 align='center'>@arkrm/umi-father-seed</h1>

<div align='center'>

[![Build Status](https://travis-ci.org/arkrm/umi-father-seed.svg?branch=master)](https://travis-ci.org/arkrm/umi-father-seed)
[![GitHub package.json version](https://img.shields.io/github/package-json/v/arkrm/umi-father-seed)](https://github.com/arkrm/umi-father-seed/blob/master/package.json)
[![Coveralls github](https://img.shields.io/coveralls/github/arkrm/umi-father-seed)](https://coveralls.io/github/arkrm/umi-father-seed)
[![GitHub issues](https://img.shields.io/github/issues/arkrm/umi-father-seed)](https://github.com/arkrm/umi-father-seed/issues)
[![GitHub forks](https://img.shields.io/github/forks/arkrm/umi-father-seed)](https://github.com/arkrm/umi-father-seed/network)
[![GitHub stars](https://img.shields.io/github/stars/arkrm/umi-father-seed)](https://github.com/arkrm/umi-father-seed/stargazers)
[![GitHub license](https://img.shields.io/github/license/arkrm/umi-father-seed)](https://github.com/arkrm/umi-father-seed/blob/master/License)

</div>

> 基于[umi father](https://github.com/umijs/father) 构建的[react](https://reactjs.org)组件库的示例工程。

[REACT 组件库开发指南](https://www.yuque.com/vdfor/blog/zb667p)

## 开始

> 建议通过 `yarn link` 的方式进行本地调试

```bash
git clone https://github.com/arkrm/umi-father-seed.git
```

### 开发模式

> 开发模式下，会监听文件的变更，实时构建。

```bash
yarn start
```

需要注意的是，开发模式生成目录与生产模式不同，而`package.json` 里的 `main` `types` `module` 均是针对生产模式构建的包进行指定的，如果在开发模式本地调试，引用方式如下:

```tsx
import { Hello } from '@arkrm/umi-father-seed/dist';
// 全量引入css文件
import '@arkrm/umi-father-seed/dist/entry.css';
```

### 生产模式

```bash
yarn build
```

生产模式本地调试，引用方式如下：

#### 全量引入方式

> 默认支持基于 ES Module 的摇树优化，不使用插件[babel-plugin-import](https://github.com/ant-design/babel-plugin-import)也会有按需加载的效果。但是，css 文件仍然需要全量引入或手动按需引入。

```tsx
import { Hello } from '@arkrm/umi-father-seed';
import '@arkrm/umi-father-seed/dist/index.min.css';
```

#### 按需引入方式

```js
// babel plugin config
{
  plugins: [
    ...otherPlugins,
    [
      'import',
      {
        libraryName: '@arkrm/umi-father-seed',
        style: true,
        libraryDirectory: 'es', // 或 lib
      },
      '@arkrm/umi-father-seed',
    ],
  ];
}
```

```tsx
import { Hello } from '@arkrm/umi-father-seed';
```

#### 手动按需引入

```tsx
import Hello from '@arkrm/umi-father-seed/es/hello';
import '@arkrm/umi-father-seed/es/hello/style';
```

### 单元测试

```bash
yarn test
```

## 特性

- 同时生成 `umd` `cjs` `ems` 格式的构建包
- 基于[jest](https://jestjs.io)的单元测试配置与示例
- 基于 css 变量的主题定制
- 支持全量引入和使用[babel-plugin-import](https://github.com/ant-design/babel-plugin-import)按需引入

## TODO

[1.0 ROADMAP](#1)
