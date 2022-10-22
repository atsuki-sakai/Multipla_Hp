import React from 'react'
import Image from 'next/image'
import Lottie from 'react-lottie'
import KnotLoader from "../../../public/lottie/knot-loader.json"

const LoadingView = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: KnotLoader
    }
    return (
        <div className="bg-gradient-to-bl to-purple-200 from-red-100 h-full w-full flex justify-center items-center">
            <div className='text-center'>
                <div className="flex items-center">
                <div className="relative h-10 w-10 mr-1">
                    <Image src={"/images/test-logo.png"} layout="responsive" height={80} width={80} alt={"Logo"}></Image>
                </div>
                <div className='text-gray-700 font-noto_sans'>
                    <h3 className="text-2xl font-bold text-left">MULTIPLA</h3>
                    <p className="text-sm text-left">マルチプラ</p>
                </div>
                </div>
                <Lottie options={defaultOptions} height={200} width={200} />
            </div>
        </div>
    )
}

export default LoadingView