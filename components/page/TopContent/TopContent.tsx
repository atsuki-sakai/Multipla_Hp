import React, { useRef, useEffect, useState } from "react";
import Image from "next/image"
import { VideoPlayer } from "@components/ui";
import Link from "next/link"
import { motion } from "framer-motion"


const TopContent = () => {

    const [ isLoaded, setIsLoaded ] = useState<boolean>(false)
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

    const endAnimation = () => {
        if(!isLoaded){
            setTimeout(() => {
                console.log('movie is loaded. to end opening animation.')
                setIsLoaded(true)
            }, 1500)
        }
    }

    useEffect(() => {
        document.addEventListener('scroll', handleScrollY);
        return () => document.removeEventListener('scroll', handleScrollY);
    }, [scrollY]);

    return (
        <>
            <motion.div initial={{ x:0 }} animate={{ x: isLoaded ? "-100%": "0" }} transition={{ duration:2, ease: "easeInOut" }} className="absolute top-0 left-0 h-screen w-screen">
                <div className="bg-black h-full w-full flex justify-center items-center py-auto">
                    <div className="flex justify-center text-white font-bold font-noto_sans text-3xl">MULTIPLA/マルチプラ</div>
                </div>
            </motion.div>
            <div className="h-screen w-full sticky top-0 overflow-hidden -z-10">
                <div style={{
                                transform:`translateY(-${scrollY > 1400 ? 0.0 : progress * 30 }vh)`
                            }} ref={ref} className='h-full w-full -z-20' >
                    <VideoPlayer
                        webm={"https://res.cloudinary.com/fdsfmsadlfmaslkdmfalksk/video/upload/v1666118752/%E5%90%8D%E7%A7%B0%E6%9C%AA%E8%A8%AD%E5%AE%9A%E3%81%AE%E3%83%86%E3%82%99%E3%82%B5%E3%82%99%E3%82%A4%E3%83%B3-_3__1_dfdju8.webm"}
                        mp4={"https://res.cloudinary.com/fdsfmsadlfmaslkdmfalksk/video/upload/v1666118009/%E5%90%8D%E7%A7%B0%E6%9C%AA%E8%A8%AD%E5%AE%9A%E3%81%AE%E3%83%86%E3%82%99%E3%82%B5%E3%82%99%E3%82%A4%E3%83%B3_3_ye5s54.mp4"}
                        onPlay={() => endAnimation()}
                    />
                    <div className={`absolute flex flex-col justify-around items-center w-full h-full `}>
                        <motion.div initial={{ scale: 1.0 }} animate={{ scale: progress == 1 ? 1.0 : 1.0 + (1.01 * progress), opacity: 1 + (-progress) }} className='flex flex-col items-center pt-24'>
                        <div>
                            <motion.div initial={{ opacity: 0, y:30 }} animate={{ opacity: 1.0, y:0 }} transition={{ duration: 0.8, delay: 0.8 }} className="visible relative w-[120px] h-[120px] md:w-[220px] md:h-[220px] lg:w-[260px] lg:h-[260px] flex items-center">
                                <Image className="w-full h-full" src={"/images/test-logo.png"} layout="fill" alt="logo" />
                            </motion.div>
                        </div>
                        <motion.p initial={{ opacity: 0, y:30 }} animate={{ opacity: 1.0, y:0 }} transition={{ duration:0.8, delay: 0.8 }} className='text-shadow-xl text-shadow-black text-3xl md:text-5xl lg:text-6xl w-fit h-fit -translate-x-1/2 text-left font-bold tracking-wide'>
                            ビジネスにWEBの力を<br/>PLUS +
                        </motion.p>
                        <motion.div initial={{ opacity:0  }} animate={{ opacity: 1.0 }}  transition={{ duration:0.8, delay: 0.8}} className='drop-shadow-2xl mt-20 transform duration-300 px-6 py-2  md:px-12 md:py-4 text-white text-xl md:text-2xl shadow-md rounded-md bg-gradient-to-tr to-orange-600 from-purple-700  hover:-translate-y-1' >
                            <Link href={"/contact"} passHref>
                                <a>
                                お問合せ・相談はこちら
                                </a>
                            </Link>
                        </motion.div>
                        </motion.div>
                        <motion.div  initial={{ opacity: 0.0, y:-60 }} animate={{ opacity: 1.0, y:-40 }} transition={{ duration:1.0, delay: 0.8 }} className={`mt-20 text-black ${ progress == 1 ? "hidden": "" }`}>
                            <motion.div  initial={{ y:-10 }} animate={{ y:10 }} transition={{ duration:1.2, repeat: Infinity, repeatType:"reverse" }}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 md:h-12 md:w-12 lg:w-20 lg:h-20 text-purple-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
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
