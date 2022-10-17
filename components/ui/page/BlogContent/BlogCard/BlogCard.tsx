import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

interface Props {
    blog: any,
    id?: number
}

const BlogCard = ({ blog, id = 1 }: Props) => {
    function truncate(str: any, len: any){
        return str.length <= len ? str: (str.substr(0, len)+"...");
    }
    return (
        <motion.div
            initial={{ opacity:0, y:10 }}
            animate={{ opacity:1, y:0 }}
            exit={{ opacity:0, y:10 }}
            transition={{
                delay: 0.7,
                duration: 0.5,
            }}
        >
            <div className="max-w-md mx-auto relative">
                <Link href={`/blog/${blog.id}?index=${id}`} passHref>
                    <a>
                        <div className='relative h-64 md:h-72 w-full border rounded-lg overflow-hidden'>
                            <Image className='rounded-lg  hover:scale-105 transform duration-500 ease-in-out' src={blog.thumbnail.url} alt={`thumbnail_${blog.title}`} layout="fill" objectFit='fill' />
                            <div className="absolute top-0 z-10 right-0">
                                <div className='bg-indigo-700 rounded-bl-md rounded-tr-md px-3 py-0.5'>
                                    <span className='text-white font-bold text-sm'>記事を読む</span>
                                </div>
                            </div>
                        </div>
                    </a>
                </Link>
                <div className='mt-2'>
                    <h4 className=' text-black py-1.5 font-bold text-xl md:text-2xl lg:text-3xl '>{blog.title}</h4>
                </div>
                <div className='flex items-center space-x-2'>
                    {
                        blog.catergory.map((category: any,index: number) => {
                            return <div key={index} className='border border-indigo-700 w-fit rounded-sm py-0.5 px-3'>
                                <Link href={`/blog/category/${category.id}`} passHref><a><span className='text-indigo-700 text-xs md:text-sm'>{category.category}</span></a></Link>
                        </div>;
                        })
                    }
                </div>
                <div className='flex items-center space-x-3 lg:space-x-0 lg:block py-3'>
                    <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className='ml-1 text-sm text-gray-500'>{blog.createdAt.split("T")[0]}</span>
                    </div>
                    <div className='flex items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        <span className='ml-1 text-sm text-gray-500'>{blog.writer}</span>
                    </div>
                </div>
                <div>
                    <p className='text-gray-500 text-xs md:text-sm'>{truncate(blog.text.replace(/(<([^>]+)>)/gi, ''), 80)}</p>
                </div>
            </div>
            <div className='h-[0.5px] w-full max-w-md mx-auto bg-gray-200 rounded-md my-4'> </div>
        </motion.div>
    )
}

export default BlogCard