import React from 'react'

import { MetaHead } from '@components/common'
import { RateCalculation } from '@components/page'
import { createBreadcrumListJsonLd } from '@components/utils'
import type { BreadcrumbItem } from '@components/utils/createBreadcrumbList-json-ld'

import { motion } from 'framer-motion'

const PlanCalculation = () => {

    const items: BreadcrumbItem[] = [
        { name: "ホーム", url: "/" },
        { name: "お見積りシュミレーター", url: "/plan-calc" }
    ]

    return (
        <>
            <MetaHead
                title='簡単１分お見積りシュミレーター'
            >
                <script type='application/ld+json' dangerouslySetInnerHTML={createBreadcrumListJsonLd(items)}/>
            </MetaHead>
            <motion.div
                initial={{ opacity:0 }}
                animate={{ opacity:1 }}
                exit={{ opacity:0 }}
                transition={{
                    duration: 0.7,
                }}
            >
                    <RateCalculation />
                <div className='h-12 w-full md:hidden'></div>
            </motion.div>
        </>
    )
}

export default PlanCalculation