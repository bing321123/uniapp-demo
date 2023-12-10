// banner 数据类型
export type BannerItem = {
    // 跳转链接
    hrefUrl: string
    // id
    id: string
    // 图片链接
    imgUrl: string
    // 跳转类型
    type: string
}

// 分类数据类型
export type CategoryItem = {
    icon: string
    id: string
    name: string
}

/** 首页-热门推荐数据类型 */
export type HotItem = {
    /** 说明 */
    alt: string
    /** id */
    id: string
    /** 图片集合[ 图片路径 ] */
    pictures: string[]
    /** 跳转地址 */
    target: string
    /** 标题 */
    title: string
    /** 推荐类型 */
    type: string
}
// 分页数据类型
export type PageResult<T> = {
    counts: number
    items: T
    page: number
    pageSize: number
    pages: number
}

/** 猜你喜欢数据类型 */
export type GuessItem = {
    /** 商品描述 */
    desc: string
    /** 商品折扣 */
    discount: number
    /** id */
    id: string
    /** 商品名称 */
    name: string
    /** 商品已下单数量 */
    orderNum: number
    /** 商品图片 */
    picture: string
    /** 商品价格 */
    price: number
}

/** 通用分页参数类型 */
export type PageParams = {
    /** 页码：默认值为 1 */
    page?: number
    /** 页大小：默认值为 10 */
    pageSize?: number
  }
  