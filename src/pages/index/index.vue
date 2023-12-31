<template>
  <view class="viewport">
    <CustomNavigation />
    <scroll-view
      enable-back-to-top
      refresher-enabled
      @refresherrefresh="onRefresherrefresh"
      :refresher-triggered="isTriggered"
      @scrolltolower="onScrolltolower"
      class="scroll-view"
      scroll-y
    >
      <PageSkeleton v-if="isLoading" />
      <template v-else>
        <XtxSwiper :list="bannerList" />
        <CategoryPanel :list="categoryList" />
        <HotPanel :list="hotList" />
        <XtxGuess ref="guessRef" />
      </template>
    </scroll-view>
  </view>
</template>

<script setup lang="ts">
import PageSkeleton from './PageSkeleton.vue'
import CustomNavigation from './components/CustomNavigation.vue'
import CategoryPanel from './components/CategoryPanel.vue'
import HotPanel from './components/HotPanel.vue'
import XtxSwiper from '@/components/XtxSwiper.vue'
import XtxGuess from '@/components/XtxGuess.vue'
import { getHomeCategoryApi, getHomeHotApi } from '@/services/home'
import { getBannerApi } from '@/services/global'
import { ref, onMounted } from 'vue'
import type { CategoryItem, HotItem } from '@/types/home.d.ts'
import type { BannerItem } from '@/types/global.d.ts'
import type { XtxGuessInstance } from '@/types/component'

const isLoading = ref(false)

const bannerList = ref<BannerItem[]>([])
const getHomeBannerData = async () => {
  const { result } = await getBannerApi()
  bannerList.value = result
}

const categoryList = ref<CategoryItem[]>([])
const getHomeCategoryData = async () => {
  const { result } = await getHomeCategoryApi()
  categoryList.value = result
}

const hotList = ref<HotItem[]>([])
const getHomeHotData = async () => {
  const { result } = await getHomeHotApi()
  hotList.value = result
}

const guessRef = ref<XtxGuessInstance>()
const isTriggered = ref(false)

const onScrolltolower = () => {
  guessRef.value?.getMore()
}
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
  // TODO 失败？
  isLoading.value = true
  await Promise.all([
    getHomeBannerData(),
    getHomeCategoryData(),
    getHomeHotData(),
    guessRef.value?.getMore(),
  ])
  isLoading.value = false
})
</script>

<style lang="scss">
page {
  background-color: #f7f7f7;
  height: 100%;
  overflow: hidden;
}

.viewport {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.scroll-view {
  flex: 1;
  overflow: hidden;
}
</style>
