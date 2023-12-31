import type { LoginResult } from '@/types/member'
import { http } from '@/utils/http'

type LoginParams = {
    code: string
    encryptedData: string
    iv: string
}

/**
 * 小程序登录_内测版
 * @param phoneNumber 模拟手机号码
 */
export const postLoginWxMinSimpleApi = (phoneNumber: string) => {
    return http<LoginResult>({
        method: 'POST',
        url: '/login/wxMin/simple',
        data: {
            phoneNumber,
        },
    })
}