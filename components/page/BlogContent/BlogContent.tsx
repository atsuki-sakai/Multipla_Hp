import React from 'react'
import { motion } from 'framer-motion'
import { BlogCard, CustomButton } from "@components/ui"

interface Props {
    blogData: any
}

const BlogContent = ({blogData}: Props) => {
    return (
        <div className='px-8 md:px-12 py-6 md:py-12 z-10 bg-white'>
                <div className=' max-w-6xl mx-auto'>
                    <motion.div initial={{ opacity:0.0 }} whileInView={{ opacity:1.0 }} transition={{ duration:1.0 }}>
                        <div className='w-fit my-4 md:my-8'>
                            <h3 className="text-gray-700 text-3xl md:text-4xl">Blog</h3>
                            <div className='h-[2px] w-full bg-green-300'></div>
                            <p className='text-xs md:text-sm'>ブログ</p>
                        </div>
                    </motion.div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 mt-12 md:mt-20 gap-6 max-w-6xl mx-auto">
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