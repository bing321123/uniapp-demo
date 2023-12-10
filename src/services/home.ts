import { http } from "@/utils/https";
import type { PageResult, BannerItem, CategoryItem, HotItem, GuessItem, PageParams } from "@/types/home.d.ts";

export const getHomeBannerApi = (distributionSite = 1) => {
    return http<BannerItem[]>({
        url: '/home/banner',
        data: {
            distributionSite,
        },
    })
}

export const getHomeCategoryApi = () => {
    return http<CategoryItem[]>({
        url: '/home/category/mutli',
    })
}

export const getHomeHotApi = () => {
    return http<HotItem[]>({
        method: 'GET',
        url: '/home/hot/mutli',
    })
}

export const getGuessApi = (data?: PageParams) => {
    return http<PageResult<GuessItem[]>>({
        method: 'GET',
        url: '/home/goods/guessLike',
        data
    })
}