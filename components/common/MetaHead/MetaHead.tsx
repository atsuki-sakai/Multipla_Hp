import React, { ReactNode } from 'react'
import Head from 'next/head'

interface Props {
    title?: string
    description?: string
    keyword?: string[]
    ogImgPath?: string
    url?: string
    type?: string
    siteName?: string
    children?: ReactNode | ReactNode[]
}


const MetaHead = ({
                    title = "マルチプラ | 高機能で高コスパなWEBサイトを構築",
                    description = "WEBのサイトに関する様々な悩みを解決。MALTIPLA/マルチプラ",
                    keyword = ["web", "ecサイト","ec","webサイト", "ホームページ","丹波篠山", "篠山","兵庫", "マルチプラ", "MULTIPLA"],
                    ogImgPath = "https://multipla-io/images/test-og-image.png",
                    url = "https://multipla.io",
                    type = "website",
                    siteName = "マルチプラ/MULTIPLA",
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
            <meta name="keywords" content={keyword.join()} />
            <meta property="og:url" content={url} />
            <meta property="og:image" content={ogImgPath} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:site_name" content={siteName} />
            <meta property="og:locale" content="ja_JP" />
            <meta property="fb:app_id" content="1159267118350717" />
            <meta property="og:description" content={description} />
            {children}
        </Head>
    )
}

export default MetaHead