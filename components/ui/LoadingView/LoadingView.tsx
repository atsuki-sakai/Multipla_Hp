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
        <div className="bg-gradient-to-bl to-purple-400 from-red-300 h-full w-full flex justify-center items-center">
            <div className='animate-pulse'>
                <div className="flex items-center justify-center mb-12">
                    <div className="relative h-10 w-10">
                        <Image src={"/images/test-logo.png"} layout="responsive" height={80} width={80} alt={"Logo"}></Image>
                    </div>
                    <div className='text-gray-700 font-noto_sans'>
                        <h3 className="text-sm">MULTIPLA</h3>
                        <p className="text-[10px] scale-75 -translate-x-2">マルチプラ</p>
                    </div>
                </div>
                <Lottie options={defaultOptions} height={200} width={200} />
            </div>
        </div>
    )
}

export default LoadingView