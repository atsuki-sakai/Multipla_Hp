import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import { microcmsClient, MICROCMS_ENDPOINT_BLOG, MICROCMS_ENDPOINT_CATEGORY } from '@service/micro-cms'
import { MetaHead } from '@components/common'
import { motion } from 'framer-motion'
import { Container, BreadcrumbList, BlogCard, CustomButton } from '@components/ui'
import { createArticleJsonLd, createBreadcrumListJsonLd, SITE_URL }  from '@components/utils'
import { truncate } from "@components/utils"

import * as cheerio from "cheerio"
import { Link as Scroll } from "react-scroll"

import type { BreadcrumbItem } from '@components/utils/createBreadcrumbList-json-ld'
import type { Blog, Category } from '@service/micro-cms/type/Blog'


export const getStaticPaths: GetStaticPaths = async () => {

    const repos = await microcmsClient.get({ endpoint: MICROCMS_ENDPOINT_BLOG });
    const paths = repos.contents.map((blog: Blog) => `/blog/${blog.id}`)

    return { paths, fallback: false };
};


export const getStaticProps: GetStaticProps = async (context) => {

    const id = context.params?.handle;

    const blog = await microcmsClient.get({ endpoint: MICROCMS_ENDPOINT_BLOG, queries: {ids: id} });
    const pickupBlogs = await microcmsClient.get({ endpoint: MICROCMS_ENDPOINT_BLOG, queries: { filters: `id[not_equals]${id}`, limit: 3, orders: "-publishedAt" }})
    const categories = await microcmsClient.get({ endpoint: MICROCMS_ENDPOINT_CATEGORY });

    return {
        props: {
            blogData: blog.contents,
            categories: categories.contents,
            categoryBlogs: pickupBlogs.contents
        },
    };
};

// TODO: - shareできるか確認


const BlogHandle = ({blogData, categories, categoryBlogs} : InferGetStaticPropsType<typeof getStaticProps>) => {

    const router = useRouter()
    const blog: Blog = blogData[0]

    const [showShare, setShowShare] = useState(false);

    const breadcrumbItems: BreadcrumbItem[] = [
        {name: "ホーム", url: "/"},
        {name: "ブログ一覧", url: "/blog/page/1"},
        {name: `${blog.title}`, url: `/blog/${blog.id}?=index=1`}
    ]
    const blogSchemaBody = truncate(blog.text.replace(/(<([^>]+)>)/gi, ''), 120)


    const renderToc = (body: any) => {
        const $ = cheerio.load(body);
        const headings = $('h1, h2, h3').toArray();
        const headingTexts =  headings.map((element: any) => ({
            text: element.children[0].children[0].data,
            id: element.attribs.id
        }));
        return headingTexts;
    };

    const makeHeaderPadding = () => {
        const h3s = document.getElementsByTagName('h3');
        for (let i = 0; i< h3s.length; i++) {
            const element = h3s.item(i);
            element!.style.paddingTop = "15px";
        }
    }

    const share = async (title: string, url: string) =>  {
        try {
            await window.navigator.share({
            title: title,
            url: url,
            });
        } catch (e: any) {
            console.log(e.message);
        }
    }
    const headingTexts = renderToc(blog.text)

    useEffect(() => {
        makeHeaderPadding();
        if(!window.navigator.share) {
            setShowShare(false);
        }else{
            setShowShare(true);
        }
    },[])
    return (
        <>
            <MetaHead
                title={`${blog.title} | マルチプラ | 丹波篠山市のWEB制作会社`}
                description={blogSchemaBody}
                ogImgPath={blog.thumbnail.url.toString()}
                url={SITE_URL + router.asPath}
            >
                <script type='application/ld+json' dangerouslySetInnerHTML={createArticleJsonLd(blog)}/>
                <script type='application/ld+json' dangerouslySetInnerHTML={createBreadcrumListJsonLd(breadcrumbItems)}/>
            </MetaHead>
            <Container>
                <BreadcrumbList items={breadcrumbItems} />
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
                    <div className="grid grid-cols-7 gap-4 relative">
                        <div className='col-span-7 lg:col-span-5'>
                            <div className='max-w-xl md:max-2w-xl lg:max-w-4xl mx-auto'>
                                <section>
                                    <motion.div layoutId={blog.id}>
                                        <div className='relative h-64 md:h-72 lg:h-96 w-full'>
                                            <Image src={blog.thumbnail.url} layout="fill" objectFit='cover' alt={blog.title} />
                                        </div>
                                    </motion.div>
                                    <article>
                                        <div className='flex items-center justify-start space-x-3 pt-4 md:pt-8 lg:pt-12'>
                                            {
                                                blog.category.map((category,index) => {
                                                    return <div key={index} className='border border-indigo-700 w-fit rounded-sm py-0.5 px-3'>
                                                                <Link href={`/blog/category/${category.id}`} passHref><a><span className='text-indigo-700 text-xs md:text-sm'>{category.category}</span></a></Link>
                                                            </div>;
                                                })
                                            }
                                        </div>
                                        <h1 className='text-3xl md:text-3xl lg:text-4xl font-bold pb-6 pt-2 md:pt-4 lg:pt-6 md:pb-10 lg:pb-14 my-4 md:my-8 mb-4'>{blog.title}</h1>
                                        <div className="flex items-center justify-end space-x-1 mb-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <p className='text-gray-500 text-sm md:text-base lg:text-lg '>投稿日 {blog.updatedAt.split('T')[0]}</p>
                                        </div>
                                        <details className={`mb-6 md:mb-10 ${ headingTexts.length === 0 ? "hidden": "" }`}>
                                            <summary className="text-base md:text-2xl bg-gray-100 rounded-md font-bold text-gray-600 py-2 px-6">
                                                目次
                                            </summary>
                                            <ul className='bg-gray-100 rounded-md py-4 mt-2 px-6 space-y-2'>
                                                {headingTexts.map(data => (
                                                    <li key={data.id}>
                                                        <Scroll to={data.id} smooth={true}>
                                                            <p className='text-sm md:text-base cursor-pointe text-blue-500 hover:underline border-b w-fit mb-2'>
                                                            {data.text}
                                                            </p>
                                                        </Scroll>
                                                    </li>
                                                ))}
                                            </ul>
                                        </details>
                                        <div className='md:text-lg lg:text-xl' dangerouslySetInnerHTML={{ __html: blog.text }}></div>
                                        <div className='flex justify-end items-center mt-4 mb-8 pt-10 md:pt-18'>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                            </svg>
                                            <span className='ml-1 text-sm md:text-base lg:text-lg text-gray-500 font-light'>著者:{blog.writer}</span>
                                        </div>
                                        <div className={`pt-4 flex items-center space-x-2 ${ showShare ? "hidden" : ""}`}>
                                            <div className='bg-indigo-800 text-white px-3 py-1.5 text-sm font-bold rounded-md shadow-md'>
                                                <a href={`http://www.facebook.com/share.php?u=https://byte-ecommerce.com${router.asPath}`}>
                                                    Facebookでシェアする
                                                </a>
                                            </div>
                                            <div className='bg-blue-500 text-white px-3 py-1.5 text-sm font-bold rounded-md shadow-md'>
                                            <a className="twitter" href={`http://twitter.com/intent/tweet?text=${blog.title}&url=https://byte-ecommerce.com${router.asPath}`}>
                                            <p>
                                                Twitterでシェアする
                                            </p>
                                            </a>
                                            </div>
                                            <div className='bg-green-500 text-white px-3 py-1.5 text-sm font-bold rounded-md shadow-md'>
                                                <a href={`https://social-plugins.line.me/lineit/share?url=https://byte-ecommerce.com${router.asPath}`}>
                                                    LINEでシェアする
                                                </a>
                                            </div>
                                        </div>
                                            <button className='text-sm font-bold w-full' onClick={ async () => await share(blog.title, `https://byte-ecommerce.com${router.asPath}`)}>
                                                <div className={` ${ showShare ? "bg-gray-800 text-white px-3 py-1.5 mt-4 flex items-center justify-center text-center w-full rounded-md shadow-md" : "hidden" } `}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                                                    </svg>
                                                    <p className='ml-2'>Share・共有</p>
                                                </div>
                                            </button>
                                    </article>
                                </section>
                            </div>
                            <div className='bg-gray-100 px-4 rounded-md pt-6 md:pt-8 mb-8 mt-8 lg:hidden shadow-md'>
                                <p className='mb-4 md:mb-8 text-2xl md:text-3xl font-bold'>カテゴリー</p>
                                <div className="grid grid-cols-3 items-start gap-2 pb-4">
                                    {
                                        categories.map((category: Category, index: number) => {
                                            return <Link key={index} href={`/blog/category/${category.id}`}><a><p className="rounded-full border text-center px-2 py-0.5 md:px-4 md:py-1 border-blue-500 text-blue-500 text-sm md:text-base">{category.category}</p></a></Link>;
                                        })
                                    }
                                </div>
                            </div>
                            <div className='lg:hidden bg-gray-100 pt-10 px-2 rounded-md shadow-md'>
                                <p className='text-2xl md:text-3xl font-bold max-w-md md:max-w-6xl mx-auto pb-6'>人気の記事</p>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-2 max-w-6xl mx-auto">
                                    {
                                        categoryBlogs.map((blog: Blog, index: number) => {
                                            return <BlogCard key={index} blog={blog} />
                                        })
                                    }
                                </div>
                            </div>
                            <div className='flex justify-center my-10'>
                                <CustomButton text={"他のブログを見る"} href={"/blog/page/1"} />
                            </div>
                        </div>
                        <div className='hidden lg:block col-span-2 h-fit'>
                            <div className='bg-gray-100 px-4 rounded-md pt-6 md:pt-8 mb-4 shadow-md'>
                                <p className='mb-4 md:mb-8 text-xl md:text-2xl font-bold'>カテゴリー</p>
                                <div className="grid grid-cols-1 items-start gap-2 pb-4">
                                    {
                                        categories.map((category: Category, index: number) => {
                                            return <Link key={index} href={`/blog/category/${category.id}`}><a><p className="rounded-full border text-center px-4 py-1 border-blue-500 text-blue-500">{category.category}</p></a></Link>;
                                        })
                                    }
                                </div>
                            </div>
                            <div className='bg-gray-100 px-4 rounded-md pt-6 md:pt-8 shadow-md'>
                                <p className='mb-4 md:mb-8 text-xl md:text-xl font-bold'>人気の記事</p>
                                <div className="grid grid-cols-1 space-y-3">
                                    {
                                        categoryBlogs.map((blog: Blog, index: number) => {
                                            return <BlogCard key={index} blog={blog} />
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
            </Container>
        </>
    )
}

export default BlogHandle



