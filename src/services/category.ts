import { http } from "@/utils/http";
import type { CategoryTopItem } from "@/types/category.d.ts";

export const getCategoryTopApi = () => {
    return http<CategoryTopItem[]>({
        url: '/category/top',
    })
}