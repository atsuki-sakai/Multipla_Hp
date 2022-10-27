import React from 'react'
import { motion } from 'framer-motion'
import { BlogCard } from "@components/ui"
import Link from 'next/link';

interface Props {
    blogData: any
}

const BlogContent = ({blogData}: Props) => {
    return (
        <div className='px-8 py-6 md:py-12 z-10 bg-white'>
                <div className=' max-w-6xl mx-auto'>
                    <motion.div initial={{ opacity:0.0 }} whileInView={{ opacity:1.0 }} transition={{ duration:1.0 }}>
                    <h3 className="text-center text-gray-700 my-6 font-bold text-2xl md:text-3xl lg:text-4xl">ブログ</h3>
                    </motion.div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 py-12">
                    {
                        blogData.map((blog: any, index: number) => (
                            <motion.div key={index} initial={{ opacity:0.0 }} whileInView={{ opacity:1.0 }} transition={{ duration:0.3 }}>
                            <BlogCard blog={blog} />
                            </motion.div>
                        ))
                    }
                </div>
                    <div className='flex justify-center pb-12'>
                    <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1.0, y:0 }} transition={{ duration:0.7 }} className='text-center mx-auto py-8 md:py-12 lg:py-16 pb-6 md:pb-12'>
                        <Link href={"/blog/page/1"}>
                            <a>
                                <button className="relative inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm md:text-lg lg:text-xl rounded-full px-12 py-3 transition-all ease-in duration-500 border border-purple-700 bg-white text-purple-700 font-noto_sans">
                                    <span className="">
                                        他のブログを見る
                                    </span>
                                </button>
                            </a>
                        </Link>
                    </motion.div>
                </div>
            </div>
    )
}

export default BlogContent