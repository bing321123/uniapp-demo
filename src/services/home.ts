import { http } from "@/utils/https";

import type { BannerItem } from "@/types/home.d.ts";

export const getHomeBannerApi = (distributionSite = 1) => {
    return http<BannerItem[]>({
        url: '/home/banner',
        data: {
            distributionSite,
        },
    })
}