import React from 'react'

interface Props {
    functionsList?: string[]
    addPlanText?: string
    priceText?: string
    planText?: string
    planDescription?: string
    isShopifyPlan?: boolean
    showSiteFunc?: boolean
    showCheckMark?: boolean
    hideShopifyLogo?: boolean
}

const PlanCard = ({
    functionsList = [],
    addPlanText = "",
    priceText = "",
    planText = "",
    planDescription = "",
    isShopifyPlan = false,
    showSiteFunc = true,
    showCheckMark = true,
    hideShopifyLogo = false
}: Props) => {

    return (
        <div className=' rounded-xl p-4 shadow-md max-w-md mt-3 mx-auto bg-white'>
            <div className='flex items-center'>
                <h5 className='font-bold text-left text-2xl md:text-3xl mb-2'> {planText}<span className='text-sm md:text-base text-gray-500'>プラン</span></h5>
                {
                    isShopifyPlan ? hideShopifyLogo ? " " : <p className='text-xs bg-green-500 px-1.5 py-0.5 rounded-full mb-4 ml-2 text-white shadow-md'>Shopify</p> : ""
                }
            </div>
            <p className='text-xs md:text-sm text-left text-gray-800'>{planDescription}</p>
            <div className='flex space-x-4 mb-2'>
                <h5 className='text-gray-500 text-sm tracking-wider'><span className='text-black text-3xl font-bold'>{isShopifyPlan ? hideShopifyLogo ? "" : "$" : ""}{priceText}</span>{isShopifyPlan ? hideShopifyLogo ? "万円から" : "/月" : "万円から"}</h5>
            </div>
            <div className='h-[1px] bg-gray-300 mx-8 w-full' />
            <div>
                <h5 className={`${showSiteFunc === false ? "hidden" : ""} uppercase font-bold text-sm text-left mt-3 mb-2`}>{isShopifyPlan ? "利用可能なサービス" : "サイトで使える機能"}</h5>
                {
                    addPlanText ? <div className='mt-2'>
                        <div className='bg-green-500 text-center w-auto mx-auto px-1 rounded-md shadow-md '>
                            <p className='text-white text-sm  px-1'>{addPlanText}プランのサービス{!isShopifyPlan ? "と機能" : ""}全て</p>
                        </div>
                        <div className='flex justify-center my-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path d="M12 4v16m8-8H4" />
                            </svg>
                        </div>
                    </div> : ""
                }
                {
                    functionsList ?
                        functionsList.map((funcText: string, index: number) =>
                            <div className='flex items-center mt-1' key={index}>
                                <svg xmlns="http://www.w3.org/2000/svg" className={`${showCheckMark === true ? "" : "hidden"} h-4 w-auto text-green-500`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path d="M5 13l4 4L19 7" />
                                </svg>
                                <p className='text-xs md:text-sm text-left text-gray-700 ml-1'>{funcText}</p>
                            </div>
                        ) : ""
                }
            </div>
        </div>
    )
}

export default PlanCard