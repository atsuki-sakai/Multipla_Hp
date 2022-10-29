
import React from 'react'
import type { News } from '@service/micro-cms/type/News'

interface Props {
    news: News[]
}

const NewsLatter = ({ news }: Props) => {
    return (
        <div className='w-full h-full bg-gray-100 py-8'>
            <div className='px-8 md:px-12 max-w-6xl mx-auto font-noto_sans'>
                <div className='w-fit my-2 md:my-4'>
                    <h5 className='text-3xl md:text-4xl'>News</h5>
                    <div className='h-[2px] w-full bg-green-300'></div>
                    <p className='text-xs'>ニュース</p>
                </div>
                <div className='mt-12'>
                    {
                        news.map((_news) => {
                            return (
                                <div key={_news.id} className='bg-white shadow-md rounded-md py-1 md:py-3 px-2 md:px-5 mb-3 text-gray-500'>
                                    <div className='md:flex items-center space-x-4 md:space-x-12 text-sm md:text-base'>
                                        <p className='text-blue-600'>{_news.createdAt.split("T")[0]}</p><p>{_news.title}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

            </div>
        </div>
    )
}

export default NewsLatter