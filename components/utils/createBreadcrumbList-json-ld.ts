

export interface BreadcrumbItem {
    name: string
    url: string
}

export default function createBreadcrumbList_JSON_LD(items: BreadcrumbItem[]) {
    return {__html: `{
                "name": "BreadcrumbList",
                "@context":"https://schema.org",
                "@type":"BreadcrumbList",
                "itemListElement":[
                    ${
                        items.map((item, index) => {
                            return (
                                    `{
                                        "@type":"ListItem",
                                        "position": ${index++},
                                        "name": "${item.name}",
                                        "item": "https://multipla.io/${item.url}"
                                    }`
                                )
                        })
                    }
                ]
            }`};
}