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

### 猜你喜欢

api 

```ts
export const getGuessApi = (data?: PageParams) => {
    // 这里的类型是 PageResult<GuessItem[]
    return http<PageResult<GuessItem[]>>({
        method: 'GET',
        url: '/home/goods/guessLike',
        data
    })
}
```

组件的类型定义

```ts
import 'vue'
import XtxGuess from "@/components/XtxGuess.vue";
declare module 'vue' {
  export interface GlobalComponents {
    // 注意这里的 typeof
    XtxGuess: typeof XtxGuess
  }
}

// 注意这里的 InstanceType
export type XtxGuessInstance = InstanceType<typeof XtxGuess>
```

数据类型
```ts
// 注意这里传进去 items 的类型
// 使用的时候是 PageResult<GuessItem>
export type PageResult<T> = {
    counts: number
    items: T
    page: number
    pageSize: number
    pages: number
}

/** 猜你喜欢数据类型 */
export type GuessItem = {
    /** 商品描述 */
    desc: string
    /** 商品折扣 */
    discount: number
    /** id */
    id: string
    /** 商品名称 */
    name: string
    /** 商品已下单数量 */
    orderNum: number
    /** 商品图片 */
    picture: string
    /** 商品价格 */
    price: number
}
```

scroll-view 的使用
```vue
<template>
  <view class="viewport">
    <CustomNavigation />
    <!-- scroll-view -->
    <scroll-view
      enable-back-to-top
      refresher-enabled
      @refresherrefresh="onRefresherrefresh"
      :refresher-triggered="isTriggered"
      @scrolltolower="onScrolltolower"
      class="scroll-view"
      scroll-y
    >
      <XtxSwiper :list="bannerList" />
      <CategoryPanel :list="categoryList" />
      <HotPanel :list="hotList" />
      <XtxGuess ref="guessRef" />
    </scroll-view>
  </view>
</template>

<script setup lang="ts">
import CustomNavigation from './components/CustomNavigation.vue'
import CategoryPanel from './components/CategoryPanel.vue'
import HotPanel from './components/HotPanel.vue'
import XtxSwiper from '@/components/XtxSwiper.vue'
import XtxGuess from '@/components/XtxGuess.vue'
import { getHomeBannerApi, getHomeCategoryApi, getHomeHotApi } from '@/services/home'
import { ref, onMounted } from 'vue'
import type { BannerItem, CategoryItem, HotItem } from '@/types/home.d.ts'
import type { XtxGuessInstance } from '@/types/component'

// 组件 ref 定义
const guessRef = ref<XtxGuessInstance>()
// 设置当前下拉刷新状态，true 表示下拉刷新已经被触发，false 表示下拉刷新未被触发
const isTriggered = ref(false)

// 触底触发
const onScrolltolower = () => {
  guessRef.value?.getMore()
}
// 自定义刷新触发
const onRefresherrefresh = async () => {
  isTriggered.value = true
  guessRef.value?.resetData()
  await Promise.all([
    getHomeBannerData(),
    getHomeCategoryData(),
    getHomeHotData(),
    guessRef.value?.getMore(),
  ])
  isTriggered.value = false
}

onMounted(async () => {
  await Promise.all([
    ...
    guessRef.value?.getMore(),
  ])
})
</script>
```


### 首页骨架屏

微信小程序分离窗口顶部可以选择 `生成骨架屏`，将生成的 `.wxml` 和 `.wxss` 文件中的内容抽成一个 `.vue` 文件，在 `loading` 时展示

### 热门推荐

```js
// 动态设置标题
uni.setNavigationBarTitle({ title: currHot!.title })
```

## 分类

相同的类型和api封装到global文件里

src\types\global.d.ts

```ts

// banner 数据类型
export type BannerItem = {
    // 跳转链接
    hrefUrl: string
    // id
    id: string
    // 图片链接
    imgUrl: string
    // 跳转类型
    type: string
}

/** 通用分页结果类型 */
export type PageResult<T> = {
    /** 列表数据 */
    items: T[]
    /** 总条数 */
    counts: number
    /** 当前页数 */
    page: number
    /** 总页数 */
    pages: number
    /** 每页条数 */
    pageSize: number
}

/** 通用分页参数类型 */
export type PageParams = {
    /** 页码：默认值为 1 */
    page?: number
    /** 页大小：默认值为 10 */
    pageSize?: number
}

/** 通用商品类型 */
export type GoodsItem = {
    /** 商品描述 */
    desc: string
    /** 商品折扣 */
    discount: number
    /** id */
    id: string
    /** 商品名称 */
    name: string
    /** 商品已下单数量 */
    orderNum: number
    /** 商品图片 */
    picture: string
    /** 商品价格 */
    price: number
}
```

src\services\global.ts

```ts
import { http } from "@/utils/https";
import type { BannerItem } from "@/types/global.d.ts";

export const getBannerApi = (distributionSite = 1) => {
    return http<BannerItem[]>({
        url: '/home/banner',
        data: {
            distributionSite,
        },
    })
}
```
