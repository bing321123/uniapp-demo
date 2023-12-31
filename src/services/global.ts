import { http } from "@/utils/http";
import type { BannerItem } from "@/types/global.d.ts";

export const getBannerApi = (distributionSite = 1) => {
    return http<BannerItem[]>({
        url: '/home/banner',
        data: {
            distributionSite,
        },
    })
}