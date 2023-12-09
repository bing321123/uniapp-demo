import { http } from "@/utils/https";
import type { BannerItem, CategoryItem } from "@/types/home.d.ts";

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