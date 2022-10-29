import React from 'react'
import { motion } from 'framer-motion'
import { BlogCard, CustomButton } from "@components/ui"
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
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {
                        blogData.map((blog: any, index: number) => (
                            <motion.div key={index} initial={{ opacity:0.0 }} whileInView={{ opacity:1.0 }} transition={{ duration:0.3 }}>
                                <BlogCard blog={blog} />
                            </motion.div>
                        ))
                    }
                </div>
                <div className='flex justify-center'>
                    <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1.0, y:0 }} transition={{ duration:0.7 }} className='text-center mx-auto '>
                        <CustomButton text={"他のブログを見る"} href={"/blog/page/1"} />
                    </motion.div>
                </div>
            </div>
    )
}

export default BlogContent