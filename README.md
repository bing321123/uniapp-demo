## 首页

自定义导航栏
page.json
```json
{
    "path": "pages/index/index",
    "style": {
    "navigationStyle": "custom"
    }
},
```

顶部区域适配

顶部给一个padding-top，值为屏幕边界到安全区域距离

```html
<view class="navbar" :style="{ paddingTop: safeAreaInsets!.top + 10 + 'px' }">
    ...
</view>
```

```js
const { safeAreaInsets } = uni.getSystemInfoSync()
```

### 轮播图

组件自动引入

```json
// pages.json
// 组件自动引入规则
  "easycom": {
    "autoscan": true,
    "custom": {
      // uni-ui 规则如下配置
      "^uni-(.*)": "@dcloudio/uni-ui/lib/uni-$1/uni-$1.vue",
      "Xtx(.*)": "@/component/Xtx$1.vue"
    }
  },
```

defineProps 的类型编写

```js
import type { BannerItem } from '@/types/home.d.ts'

defineProps<{
  list: BannerItem[]
}>()
```
