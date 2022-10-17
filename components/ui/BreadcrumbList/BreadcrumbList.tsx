import React from 'react'
import Link from 'next/link'
import type { breadcrumbItem } from '@components/utils'

const BreadcrumbList = (items: breadcrumbItem[]) => {
    return (
        <div className='flex items-center text-left text-xs md:text-sm text-gray-600'>
            {
                items.map((item, index) => {
                    if(items.length === index){
                        return <p key={index}>{item.name}</p>
                    }else{
                        return <>
                                <Link href={item.url} passHref><a>{item.name}</a></Link>
                                <p className='px-1'>{' > '}</p>
                            </>
                    }
                })
            }
        </div>
    )
}

export default BreadcrumbList