import React from 'react'
import { GetStaticProps, GetStaticPaths, InferGetStaticPropsType } from 'next';
import Link from 'next/link';

import { microcmsClient, MICROCMS_ENDPOINT_BLOG, MICROCMS_ENDPOINT_CATEGORY } from '@service/micro-cms';
import { MetaHead } from '@components/common';
import { BlogCard, Pagination } from '@components/ui';

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
            title='MULTIPLA ブログ一覧'
        >
            <script type='application/ld+json' key={`breadcrumbJSON-pages`}  dangerouslySetInnerHTML={createBreadcrumListJsonLd(items)}/>
        </MetaHead>
        <motion.div
            initial={{ opacity:0 }}
            animate={{ opacity:1 }}
            exit={{ opacity:0 }}
            transition={{
                duration: 0.7,
            }}
        >
            <div className='pt-32 md:pt-64 xl:pt-32 py-12'>
                <div className='mx-8'>
                    <div className='max-w-lg md:max-w-4xl lg:max-w-6xl mx-auto'>
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
                                <h3 className="my-6 font-bold text-2xl md:text-3xl lg:text-4xl"><span className='text-indigo-800 text-4xl md:text-5xl lg:text-6xl'>MULTIPLA</span>ブログ</h3>
                            </div>
                            <div className='bg-gray-100 px-4 rounded-md shadow-md pt-6 md:pt-8 mb-4 mt-8'>
                                <p className='mb-4 md:mb-8 text-2xl md:text-3xl font-bold'>カテゴリー</p>
                                <div className="grid grid-cols-3 items-start gap-2 pb-4">
                                    {
                                        categories.map((category: Category, index: number) => {
                                            return <Link key={index} href={`/blog/category/${category.id}`}><a><p className=" rounded-full border text-center hover:-translate-y-1 transform duration-300 ease-in-out px-1 py-0.5 md:px-4 md:py-1 border-blue-500 text-blue-500 text-xs md:text-sm">{category.category}</p></a></Link>;
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
                </div>
            </div>
        </motion.div>
        </>
    )
}

export default BlogId