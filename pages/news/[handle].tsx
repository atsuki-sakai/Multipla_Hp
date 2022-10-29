import React from 'react'
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'

import { SITE_URL, truncate } from '@components/utils';
import { microcmsClient, MICROCMS_ENDPOINT_NEWS } from '@service/micro-cms';
import { Container, BreadcrumbList } from "@components/ui"
import { createBreadcrumListJsonLd } from '@components/utils';
import type { BreadcrumbItem } from '@components/utils/createBreadcrumbList-json-ld';
import { MetaHead } from '@components/common';
import { News } from '@service/micro-cms/type/News';

import { motion } from 'framer-motion';

export const getStaticPaths: GetStaticPaths = async () => {

    const repos = await microcmsClient.get({ endpoint: MICROCMS_ENDPOINT_NEWS });
    const paths = repos.contents.map((news: News) => `/news/${news.id}`)
    return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {

    const handle = context.params?.handle;
    const data = await microcmsClient.get({ endpoint: MICROCMS_ENDPOINT_NEWS, queries: { ids: handle } })
    return {
        props: {
            news: data.contents
        }
    }
}

const NewsHandle = ({ news }: InferGetStaticPropsType<typeof getStaticProps>) => {


    const _news: News = news[0];

    console.log(_news)
    const items: BreadcrumbItem[] = [
        {name:"ホーム", url:"/"},
        {name:"ニュース一覧", url:"/news/page/1"},
        {name:`ニュース記事 - ${truncate(_news.title, 14)}`, url:`news/${_news.id}`}
    ]

    return (
        <>
            <MetaHead
                title="ニュース記事 | マルチプラ | 丹波篠山市のWEB制作会社"
                description={truncate(_news.body, 80)}
                url={`${SITE_URL}/news/${_news.id}`}
            >
                <script type='application/ld+json' dangerouslySetInnerHTML={createBreadcrumListJsonLd(items)}/>
            </MetaHead>
            <Container>
                <BreadcrumbList items={items} />
                <motion.div
                initial={{ opacity:0 }}
                animate={{ opacity:1 }}
                exit={{ opacity:0 }}
                transition={{
                    duration: 0.7,
                }}
            >
                <motion.div
                        initial={{ opacity:0, y:10 }}
                        animate={{ opacity:1, y:0 }}
                        exit={{ opacity:0, y:10 }}
                        transition={{
                            delay:0.3,
                            duration: 0.7,
                        }}
                >
                    <div className="md:h-[600px] max-w-xl mx-auto">
                        <div className='flex items-center justify-around mb-8'>
                            <p className='border-2 border-blue-600 text-blue-600 px-6 py-1'>{_news.category}</p>
                            <p className='text-sm text-gray-500'>投稿日: {_news.createdAt.split('T')[0]}</p>
                        </div>
                        <h1 className='text-xl '>{_news.title}</h1>
                        <p className='mt-4 p-2 text-gray-500 mb-12'>{_news.body}</p>
                    </div>
                </motion.div>
            </motion.div>
            </Container>
        </>
    )
}

export default NewsHandle