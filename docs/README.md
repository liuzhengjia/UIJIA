# 快速开始

#### 安装组件库

```bash
npm i ui-jia
```

#### 引用组件库
> 在 main.js 中引用组件库

```js
// 全部引入
import 'ui-jia/dist/css/index.css';
import UIJIA from 'ui-jia';
Vue.use(UIJIA);

// 按需引入
import 'ui-jia/dist/css/demo.css';
import { Demo } from 'ui-jia';
Vue.use(Demo);
```

