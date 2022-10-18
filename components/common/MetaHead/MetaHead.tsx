import React, { ReactNode } from 'react'
import Head from 'next/head'

interface Props {
    title?: string
    description?: string
    keyword?: string[]
    ogImgPath?: string
    url?: string
    type?: string
    children?: ReactNode | ReactNode[]
}

// TODO: facebook app idを新しく取得

const MetaHead = ({
                    title = "MULTIPLA/マルチプラ",
                    description = "WEBのことならぜひ一度ご相談ください。遠方のお客様も全てオンライン上で全て完結いたしますので是非ご利用下さい。直接打ち合わせも可",
                    keyword = ["マルチプラ","MALTIPLA","ホームページ","ECサイト", "篠山"],
                    ogImgPath = "https://multipla-webservice/images/test-og-image.png",
                    url = "https://multipla-webservice.com",
                    type = "website",
                    children
                }: Props) => {
    return (
        <Head>
            <title>{title}</title>
            <link rel="shortcut icon" href="https://multipla-webservice.com/favicon.ico"/>
            <meta name="viewport" content="width=device-width,initial-scale=1.0" />
            <meta name="description" content={description} />
            <meta property="og:title" content={title} />
            <meta property="og:type" content={type} />
            <meta name="keywords" content={keyword.join()} />
            <meta property="og:url" content={url} />
            <meta property="og:image" content={ogImgPath} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:site_name" content={title} />
            <meta property="og:locale" content="ja_JP" />
            {/* <meta property="fb:app_id" content="3128697494014223" /> */}
            <meta property="og:description" content={description} />
            {children}
        </Head>
    )
}

export default MetaHead