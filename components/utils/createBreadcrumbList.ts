
export interface breadcrumbItem {
    name: string
    url: string
}
export default function createBreadcrumbList(items: breadcrumbItem[]) {
    return {__html: `{
                "name": "パンくずリスト",
                "@context":"https://schema.org",
                "@type":"BreadcrumbList",
                "itemListElement":[
                    ${
                        items.map((item, index) => {
                            return {
                                "@type":"ListItem",
                                "position": index++,
                                "name": item.name,
                                "item": item.url
                            }
                        })
                    }
                ]
            }`};
}