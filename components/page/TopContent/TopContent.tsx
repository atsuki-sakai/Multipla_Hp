import React, { useRef, useEffect, useState } from "react";
import Image from "next/image"
import { VideoPlayer } from "@components/ui";
import { motion } from "framer-motion"

const TopContent = () => {

    const [scrollY, setScrollY] = useState<number>(0)
    let progress = 0

    const ref = useRef<HTMLDivElement>(null!);
    const { current } = ref
    if(current){
        //視差効果を計算
        progress = Math.min(1, scrollY / current.clientHeight);
    }

    const handleScrollY = () => {
        setScrollY(window.scrollY);
    }

    useEffect(() => {
        document.addEventListener('scroll', handleScrollY);
        return () => document.removeEventListener('scroll', handleScrollY);
    }, [scrollY]);

    return (
        <>
            <div className="h-screen w-full sticky top-0 overflow-hidden -z-20">
                <div style={{
                                transform:`translateY(-${scrollY > 1400 ? 0.0 : progress * 30 }vh)`,
                            }} ref={ref} className='h-full w-full -z-20' >
                    <VideoPlayer
                        mp4={"https://res.cloudinary.com/fdsfmsadlfmaslkdmfalksk/video/upload/v1666118009/%E5%90%8D%E7%A7%B0%E6%9C%AA%E8%A8%AD%E5%AE%9A%E3%81%AE%E3%83%86%E3%82%99%E3%82%B5%E3%82%99%E3%82%A4%E3%83%B3_3_ye5s54.mp4"}
                        webm={"https://res.cloudinary.com/fdsfmsadlfmaslkdmfalksk/video/upload/v1666118752/%E5%90%8D%E7%A7%B0%E6%9C%AA%E8%A8%AD%E5%AE%9A%E3%81%AE%E3%83%86%E3%82%99%E3%82%B5%E3%82%99%E3%82%A4%E3%83%B3-_3__1_dfdju8.webm"}
                    />
                    <div className={`absolute flex flex-col justify-around items-center w-full h-full`}>
                        <motion.div 
                            initial={{ scale: 1.0 }} 
                            animate={{ scale: progress == 1 ? 1.0 : 1.0 + (1.01 * progress), opacity: 1 + (-progress) }} 
                            className='flex flex-col items-center pt-24 lg:pt-40'
                        >
                            <div>
                                <motion.div 
                                    initial={{ opacity: 0, y:30 }} 
                                    animate={{ opacity: 1.0, y:0 }} 
                                    transition={{ duration: 0.8, delay: 0.8 }} 
                                    className="visible relative w-[120px] h-[120px] md:w-[220px] md:h-[220px] lg:w-[280px] lg:h-[280px] flex items-center"
                                >
                                    <Image className="w-full h-full" src={"/images/test-logo.png"} layout="fill" alt="logo" />
                                </motion.div>
                            </div>
                            <motion.div 
                                initial={{ opacity: 0, y:30 }} 
                                animate={{ opacity: 1.0, y:0 }} 
                                transition={{ duration:0.9, delay: 0.9 }} 
                                className='text-3xl md:text-6xl lg:text-7xl text-left w-fit h-fit -translate-x-1/2 font-bold tracking-wide mt-12'
                            >
                                <p>WEBの力で<br/>ビジネスを加速させる</p>
                                <p className="text-sm md:text-base lg:text-lg text-gray-600 mt-1">Multipla Web Developer</p>
                            </motion.div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0.0, y:-60 }} 
                            animate={{ opacity: 1.0, y:-40 }} 
                            transition={{ duration:1.0, delay: 1.0 }} 
                            className={`mt-20 text-black ${ progress == 1 ? "hidden": "" }`}
                        >
                            <motion.div 
                                initial={{ y:-10 }} 
                                animate={{ y:10 }} 
                                transition={{ duration:1.2, repeat: Infinity, repeatType:"reverse" }}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 md:h-12 md:w-12 lg:w-16 lg:h-16 text-purple-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TopContent;
