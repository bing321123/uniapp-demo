<template>
  <view>
    <CustomNavigation />
    <XtxSwiper :list="bannerList" />
    <CategoryPanel :list="categoryList"/>
  </view>
</template>

<script setup lang="ts">
import CustomNavigation from './components/CustomNavigation.vue'
import CategoryPanel from './components/CategoryPanel.vue'
import XtxSwiper from '@/components/XtxSwiper.vue'
import { onLoad } from '@dcloudio/uni-app'
import { getHomeBannerApi, getHomeCategoryApi } from '@/services/home'
import { ref, onMounted } from 'vue'
import type { BannerItem, CategoryItem } from "@/types/home.d.ts";

const bannerList = ref<BannerItem[]>([])
const getHomeBannerData = async () => {
  const { result } = await getHomeBannerApi()
  bannerList.value = result
}

const categoryList = ref<CategoryItem[]>([])
const getHomeCategoryData = async () => {
  const { result } = await getHomeCategoryApi()
  categoryList.value = result
}

onMounted(async () => {
  // TODO 失败？
  await Promise.all([getHomeBannerData(), getHomeCategoryData()])
})
</script>

<style lang="scss"></style>
