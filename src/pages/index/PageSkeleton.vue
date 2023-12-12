<template name="skeleton">
  <view class="sk-container">
    <view class="viewport">
      <view is="pages/index/components/CustomNavigation">
        <view class="navbar CustomNavigation--navbar" style="padding-top: 30px">
          <view class="logo CustomNavigation--logo">
            <image class="logo-image CustomNavigation--logo-image sk-image"></image>
            <text
              class="logo-text CustomNavigation--logo-text sk-transparent sk-text-0-0000-557 sk-text"
              >新鲜 · 亲民 · 快捷</text
            >
          </view>
          <view class="search CustomNavigation--search">
            <text
              class="icon-search CustomNavigation--icon-search sk-transparent sk-text-14-2857-232 sk-text sk-pseudo sk-pseudo-circle"
              >搜索商品</text
            >
            <text class="icon-scan CustomNavigation--icon-scan sk-pseudo sk-pseudo-circle"></text>
          </view>
        </view>
      </view>
      <scroll-view
        :enable-back-to-top="true"
        :refresher-enabled="true"
        :scroll-y="true"
        class="scroll-view"
      >
        <view is="components/XtxSwiper">
          <view class="carousel XtxSwiper--carousel">
            <swiper
              :circular="true"
              :indicator-dots="true"
              :interval="3000"
              :current="0"
              :autoplay="false"
            >
              <swiper-item
                style="
                  position: absolute;
                  width: 100%;
                  height: 100%;
                  transform: translate(0%, 0px) translateZ(0px);
                "
              >
                <navigator class="navigator XtxSwiper--navigator" hover-class="none">
                  <image class="image XtxSwiper--image sk-image" mode="aspectFill"></image>
                </navigator>
              </swiper-item>
            </swiper>
          </view>
        </view>
        <view is="pages/index/components/CategoryPanel">
          <view class="category CategoryPanel--category">
            <navigator class="category-item CategoryPanel--category-item" hover-class="none">
              <image class="icon CategoryPanel--icon sk-image"></image>
              <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-431 sk-text"
                >居家</text
              >
            </navigator>
            <navigator class="category-item CategoryPanel--category-item" hover-class="none">
              <image class="icon CategoryPanel--icon sk-image"></image>
              <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-218 sk-text"
                >锦鲤</text
              >
            </navigator>
            <navigator class="category-item CategoryPanel--category-item" hover-class="none">
              <image class="icon CategoryPanel--icon sk-image"></image>
              <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-821 sk-text"
                >服饰</text
              >
            </navigator>
            <navigator class="category-item CategoryPanel--category-item" hover-class="none">
              <image class="icon CategoryPanel--icon sk-image"></image>
              <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-969 sk-text"
                >母婴</text
              >
            </navigator>
            <navigator class="category-item CategoryPanel--category-item" hover-class="none">
              <image class="icon CategoryPanel--icon sk-image"></image>
              <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-774 sk-text"
                >个护</text
              >
            </navigator>
            <navigator class="category-item CategoryPanel--category-item" hover-class="none">
              <image class="icon CategoryPanel--icon sk-image"></image>
              <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-286 sk-text"
                >严选</text
              >
            </navigator>
            <navigator class="category-item CategoryPanel--category-item" hover-class="none">
              <image class="icon CategoryPanel--icon sk-image"></image>
              <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-874 sk-text"
                >数码</text
              >
            </navigator>
            <navigator class="category-item CategoryPanel--category-item" hover-class="none">
              <image class="icon CategoryPanel--icon sk-image"></image>
              <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-569 sk-text"
                >运动</text
              >
            </navigator>
            <navigator class="category-item CategoryPanel--category-item" hover-class="none">
              <image class="icon CategoryPanel--icon sk-image"></image>
              <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-329 sk-text"
                >杂项</text
              >
            </navigator>
            <navigator class="category-item CategoryPanel--category-item" hover-class="none">
              <image class="icon CategoryPanel--icon sk-image"></image>
              <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-521 sk-text"
                >品牌</text
              >
            </navigator>
          </view>
        </view>
        <view is="pages/index/components/HotPanel">
          <view class="panel HotPanel--panel hot HotPanel--hot">
            <view class="item HotPanel--item">
              <view class="title HotPanel--title">
                <text
                  class="title-text HotPanel--title-text sk-transparent sk-text-14-2857-498 sk-text"
                  >特惠推荐</text
                >
                <text
                  class="title-desc HotPanel--title-desc sk-transparent sk-text-14-2857-553 sk-text"
                  >精选全攻略</text
                >
              </view>
              <navigator class="cards HotPanel--cards" hover-class="none">
                <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
                <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
              </navigator>
            </view>
            <view class="item HotPanel--item">
              <view class="title HotPanel--title">
                <text
                  class="title-text HotPanel--title-text sk-transparent sk-text-14-2857-316 sk-text"
                  >爆款推荐</text
                >
                <text
                  class="title-desc HotPanel--title-desc sk-transparent sk-text-14-2857-237 sk-text"
                  >最受欢迎</text
                >
              </view>
              <navigator class="cards HotPanel--cards" hover-class="none">
                <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
                <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
              </navigator>
            </view>
            <view class="item HotPanel--item">
              <view class="title HotPanel--title">
                <text
                  class="title-text HotPanel--title-text sk-transparent sk-text-14-2857-319 sk-text"
                  >一站买全</text
                >
                <text
                  class="title-desc HotPanel--title-desc sk-transparent sk-text-14-2857-685 sk-text"
                  >精心优选</text
                >
              </view>
              <navigator class="cards HotPanel--cards" hover-class="none">
                <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
                <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
              </navigator>
            </view>
            <view class="item HotPanel--item">
              <view class="title HotPanel--title">
                <text
                  class="title-text HotPanel--title-text sk-transparent sk-text-14-2857-357 sk-text"
                  >新鲜好物</text
                >
                <text
                  class="title-desc HotPanel--title-desc sk-transparent sk-text-14-2857-932 sk-text"
                  >生活加分项</text
                >
              </view>
              <navigator class="cards HotPanel--cards" hover-class="none">
                <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
                <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
              </navigator>
            </view>
          </view>
        </view>
      </scroll-view>
    </view>
  </view>
</template>

<style lang="scss">
.sk-transparent {
  color: transparent !important;
}
.sk-text-0-0000-557 {
  background-image: linear-gradient(
    transparent 0%,
    #eeeeee 0%,
    #eeeeee 100%,
    transparent 0%
  ) !important;
  background-size: 100% 25.7813rpx;
  position: relative !important;
}
.sk-text {
  background-origin: content-box !important;
  background-clip: content-box !important;
  background-color: transparent !important;
  color: transparent !important;
  background-repeat: repeat-y !important;
}
.sk-text-14-2857-232 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.0938rpx;
  position: relative !important;
}
.sk-text-14-2857-431 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.0938rpx;
  position: relative !important;
}
.sk-text-14-2857-218 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.0938rpx;
  position: relative !important;
}
.sk-text-14-2857-821 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.0938rpx;
  position: relative !important;
}
.sk-text-14-2857-969 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.0938rpx;
  position: relative !important;
}
.sk-text-14-2857-774 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.0938rpx;
  position: relative !important;
}
.sk-text-14-2857-286 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.0938rpx;
  position: relative !important;
}
.sk-text-14-2857-874 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.0938rpx;
  position: relative !important;
}
.sk-text-14-2857-569 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.0938rpx;
  position: relative !important;
}
.sk-text-14-2857-329 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.0938rpx;
  position: relative !important;
}
.sk-text-14-2857-521 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.0938rpx;
  position: relative !important;
}
.sk-text-14-2857-498 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 42.6563rpx;
  position: relative !important;
}
.sk-text-14-2857-553 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 32.8125rpx;
  position: relative !important;
}
.sk-text-14-2857-316 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 42.6563rpx;
  position: relative !important;
}
.sk-text-14-2857-237 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 32.8125rpx;
  position: relative !important;
}
.sk-text-14-2857-319 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 42.6563rpx;
  position: relative !important;
}
.sk-text-14-2857-685 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 32.8125rpx;
  position: relative !important;
}
.sk-text-14-2857-357 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 42.6563rpx;
  position: relative !important;
}
.sk-text-14-2857-932 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 32.8125rpx;
  position: relative !important;
}
.sk-image {
  background: #efefef !important;
}
.sk-pseudo::before,
.sk-pseudo::after {
  background: #efefef !important;
  background-image: none !important;
  color: transparent !important;
  border-color: transparent !important;
}
.sk-pseudo-rect::before,
.sk-pseudo-rect::after {
  border-radius: 0 !important;
}
.sk-pseudo-circle::before,
.sk-pseudo-circle::after {
  border-radius: 50% !important;
}
.sk-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: transparent;
}
</style>
