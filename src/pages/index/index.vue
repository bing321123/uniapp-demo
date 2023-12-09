<template>
  <view>
    <CustomNavigation />
    <XtxSwiper :list="bannerList" />
  </view>
</template>

<script setup lang="ts">
import CustomNavigation from './components/CustomNavigation.vue'
import XtxSwiper from '@/components/XtxSwiper.vue'
import { onLoad } from '@dcloudio/uni-app'
import { getHomeBannerApi } from '@/services/home'
import { ref, onMounted } from 'vue'
import type { BannerItem } from '@/types/home.d.ts'

const bannerList = ref<BannerItem[]>([])
const getHomeBannerData = async () => {
  const { result } = await getHomeBannerApi()
  bannerList.value = result
}

onMounted(async () => {
  await Promise.all([getHomeBannerData()])
})
</script>

<style lang="scss"></style>
