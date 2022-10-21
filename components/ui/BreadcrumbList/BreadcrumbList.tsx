import React from 'react'
import Link from 'next/link'
import { truncate } from "@components/utils";
import type { BreadcrumbItem } from '@components/utils/createBreadcrumbList-json-ld'

interface Props {
    items: BreadcrumbItem[]
}

const BreadcrumbList = ({items}: Props) => {

    const strLength = 14;
    return (
        <div className='flex items-center text-left text-xs md:text-sm text-gray-600 py-8 md:py-12'>
            {
                items.map((item, index) => {
                    if(items.length === index + 1){
                        return <p key={index}>{truncate(item.name, strLength)}</p>
                    }else{
                        return <div className='flex items-center' key={index}>
                                <Link href={item.url} passHref><a>{truncate(item.name, strLength)}</a></Link>
                                <p className='px-1'>{' > '}</p>
                            </div>
                    }
                })
            }
        </div>
    )
}

export default BreadcrumbList