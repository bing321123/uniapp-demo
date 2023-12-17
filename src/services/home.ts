import { http } from "@/utils/https";
import type { CategoryItem, HotItem, GuessItem } from "@/types/home.d.ts";
import type { PageResult, PageParams } from "@/types/global.d.ts";

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