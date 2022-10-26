import React, { ReactNode } from 'react'
import Head from 'next/head'

interface Props {
    title?: string
    description?: string
    ogImgPath?: string
    url?: string
    type?: string
    siteName?: string
    children?: ReactNode | ReactNode[]
}

const MetaHead = ({
                    title = "マルチプラ | ECサイト・WEBサイト制作会社",
                    description = "ECサイト・WEBサイトの制作を行う、丹波篠山市にある制作会社 マルチプラ/MULTIPLA ホームページ制作・WEB広告・出版印刷物の作成などWEBの構築から集客・収益化までを一貫してサポート致します。",
                    ogImgPath = "https://multipla.io/images/test-og-image.png",
                    url = "https://multipla.io",
                    type = "website",
                    siteName = "マルチプラ | ECサイト・WEBサイト制作会社  | 丹波篠山市",
                    children
                }: Props) => {
    return (
        <Head>
            <title>{title}</title>
            <link rel="shortcut icon" href="https://multipla.io/favicon.ico"/>
            <link rel="canonical" href={url}></link>
            <meta name="viewport" content="width=device-width,initial-scale=1.0" />
            <meta name="description" content={description} />
            <meta property="og:title" content={title} />
            <meta property="og:type" content={type} />
            <meta property="og:url" content={url} />
            <meta property="og:image" content={ogImgPath} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:site_name" content={siteName} />
            <meta property="og:locale" content="ja_JP" />
            <meta property="og:description" content={description} />
            <meta name='twitter:site' content="@rKW0OxHzlwaTp3U" />
            <meta name="twitter:card" content="summary" />
            <meta name='twitter:domain' content="multipla.io" />
            <meta name='twitter:title' content={title} />
            <meta name='twitter:description' content={description} />
            <meta name='twitter:image' content={ogImgPath} />
            <meta property="fb:app_id" content="1159267118350717" />
            {children}
        </Head>
    )
}

export default MetaHead