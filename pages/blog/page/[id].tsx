import React from 'react'
import { GetStaticProps, GetStaticPaths, InferGetStaticPropsType } from 'next';
import Link from 'next/link';

import { microcmsClient, MICROCMS_ENDPOINT_BLOG, MICROCMS_ENDPOINT_CATEGORY } from '@service/micro-cms';
import { MetaHead } from '@components/common';
import { BlogCard, Container, Pagination } from '@components/ui';

import { motion } from 'framer-motion';
import { createBreadcrumListJsonLd } from '@components/utils';
import type { BreadcrumbItem } from '@components/utils/createBreadcrumbList-json-ld';
import { Category, Blog } from '@service/micro-cms/type/Blog';

const PER_PAGE = 6;

export const getStaticPaths: GetStaticPaths = async () => {

  const repos = await microcmsClient.get({ endpoint: MICROCMS_ENDPOINT_BLOG });
  const range = (start: number, end: number) => [...Array(end - start + 1)].map((_, i) => start + i);
  const paths = range(1, Math.ceil(repos.totalCount / PER_PAGE)).map((repo) => `/blog/page/${repo}`);
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
    const id = context.params?.id as string;
    const data = await microcmsClient.get({ endpoint: MICROCMS_ENDPOINT_BLOG, queries: { offset: (parseInt(id) - 1) * PER_PAGE, limit: PER_PAGE } });
    const categories = await microcmsClient.get({ endpoint: MICROCMS_ENDPOINT_CATEGORY });
    return {
        props: {
            blogs: data.contents,
            categories: categories.contents,
            totalCount: data.totalCount,
            id: id,
        },
    };
};

const BlogId = ({blogs, categories, totalCount, id}: InferGetStaticPropsType<typeof getStaticProps>) => {

const items: BreadcrumbItem[] = [
{ name: "ホーム", url:"/" },
{ name: "ブログ一覧", url: "/blog/page/1" }
]
return (
    <>
        <MetaHead
            title='ブログ一覧 | マルチプラ | 丹波篠山市のWEB制作会社'
            description='マルチプラ/Multiplaのブログのカテゴリーページです。主にECサイトの構築・WEBサイトの構築・WEB広告などWEBからの集客についてコンテンツを制作しています。'
        >
            <script type='application/ld+json' dangerouslySetInnerHTML={createBreadcrumListJsonLd(items)}/>
        </MetaHead>
        <Container>
            <div className='max-w-lg md:max-w-4xl lg:max-w-6xl mx-auto mb-6 md:mb-12'>
                <motion.div
                    initial={{ opacity:0, y:10 }}
                    animate={{ opacity:1, y:0 }}
                    exit={{ opacity:0, y:10 }}
                    transition={{
                        delay:0.3,
                        duration: 0.7,
                    }}
                >
                    <div className='flex items-center text-left mb-4 text-xs md:text-sm pl-1 py-3'>
                        <Link href={'/'} passHref><a>ホーム </a></Link>
                        <p className='px-1'>{'>'}</p>
                        <p>ブログ一覧</p>
                    </div>
                    <div>
                        <h1 className="my-6 font-bold text-xl md:text-2xl lg:text-3xl"><span className='text-3xl md:text-4xl lg:text-5xl'>マルチプラ</span>ブログ</h1>
                    </div>
                    <div className='bg-gray-100 px-4 rounded-md shadow-md pt-6 md:pt-8 mb-4 mt-8'>
                        <p className='mb-4 md:mb-8 text-2xl md:text-3xl font-bold'>カテゴリー</p>
                        <div className="grid grid-cols-3 items-start gap-2 pb-4">
                            {
                                categories.map((category: Category, index: number) => {
                                    return <Link key={index} href={`/blog/category/${category.id}`}><a><p className=" rounded-full border text-center hover:-translate-y-1 transform duration-300 ease-in-out px-1 py-0.5 md:px-4 md:py-1 border-blue-700 text-blue-600 text-xs md:text-sm">{category.category}</p></a></Link>;
                                })
                            }
                        </div>
                    </div>
                </motion.div>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 py-12">
                    {
                        blogs.map((blog: Blog, index: number) => (
                            <BlogCard key={index} blog={blog} id={id} />
                        ))
                    }
                </div>
                <Pagination totalCount={totalCount} pageIndex={id} perPage={PER_PAGE} />
            </div>
        </Container>
        </>
    )
}

export default BlogId