
const baseUrl = 'https://pcapi-xiaotuxian-front-devtest.itheima.net'
import { useMemberStore } from "@/stores/modules/member";

interface Data<T> {
    code: number
    msg: string
    result: T
}

/* 
 * 封装一个请求函数，包含一个拦截器，以及对于响应的处理
 *  - 拦截器
 *      - 拼接url
 *      - 添加app标识
 *      - 添加token
 *      - 超时处理
 * 
 *  - 响应处理
 *      - 200
 *      - 401
 *      - 401
 **/
const httpInterceptor = {
    invoke(options: any) {
        if (!options.url?.startsWith('http')) {
            options.url = baseUrl + options.url
        }
        options.timeout = 10000
        console.log(options?.header);
        options.header = {
            ...options.header,
            'source-client': 'miniapp'
        }
        const memberStore = useMemberStore()
        const token = memberStore?.profile?.token
        // 
        if (token) {
            options.header.Authorization = token
        }
        console.log(options);

    },
}

uni.addInterceptor('request', httpInterceptor)
uni.addInterceptor('uploadFile', httpInterceptor)

export const http = <T>(options: UniApp.RequestOptions) => {
    return new Promise<Data<T>>((resolve, reject) => {
        uni.request({
            ...options,
            success(res) {
                // 2xx
                if (res.statusCode >= 200 && res.statusCode < 300) {
                    resolve(res.data as Data<T>)
                } else if (res.statusCode === 401) {
                    // 401
                    const memberStore = useMemberStore()
                    memberStore.clearProfile()
                    uni.navigateTo({url: '/pages/login/login'})
                } else {
                    // 其他错误 -> 根据后端错误信息轻提示
                    uni.showToast({
                        icon: 'none',
                        title: (res.data as Data<T>).msg || '请求错误'
                    })
                }
            },
            fail(err) {
                uni.showToast({
                    icon: 'none',
                    title: '网络错误，换个网络试试'
                })
                reject(err)
            },
        })
    })
}