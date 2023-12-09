<template>
  <view class="carousel">
    <swiper :circular="true" :autoplay="false" :interval="3000" :indicator-dots="true">
      <swiper-item v-for="item in list" :key="item.id">
        <navigator url="/pages/index/index" hover-class="none" class="navigator">
          <image mode="aspectFill" class="image" :src="item.imgUrl"></image>
        </navigator>
      </swiper-item>
    </swiper>
  </view>
</template>

<script setup lang="ts">
import type { BannerItem } from '@/types/home.d.ts'

defineProps<{
  list: BannerItem[]
}>()
</script>

<style lang="scss">
@import './styles/XtxSwiper.scss';
</style>
