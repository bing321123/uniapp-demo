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
