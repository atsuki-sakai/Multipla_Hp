
type Thumbnail = {
    url: string
    height: number
    width: number
}

export type Category = {
    id: string
    createdAt: string
    updatedAt: string
    publishedAt: string
    revisedAt: string
    category: string
}


export type Blog = {
    id: string
    createdAt: string
    updatedAt: string
    keyword: string
    publishedAt: string
    revisedAt: string
    title: string
    thumbnail: Thumbnail
    text: string
    writer: string
    category: Category[]
}