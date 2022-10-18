import React, { useEffect, useState } from "react";
import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import { microcmsClient, MICROCMS_ENDPOINT_BLOG }  from "@service/micro-cms";
import {
  TopContent,
  ServiceContent,
  SalesContent,
  ActualSite,
  StrongPointContent,
  BlogContent
} from "@components/page"
import { MetaHead } from "@components/common";
import { useCanPlayMovie } from "@components/context"

import { motion } from "framer-motion";


const dataLimit = 4;

export const getStaticProps: GetStaticProps = async () => {
  const data = await microcmsClient.get({
    endpoint: MICROCMS_ENDPOINT_BLOG,
    queries: { limit: dataLimit }
  });
  const blogDatas = data.contents
  return {
      props: {
          blogDatas: blogDatas
      },
      revalidate: 4 * 60 * 60
  }
}

export default function Index({blogDatas}: InferGetStaticPropsType<typeof getStaticProps>){

  const { isPlaying } = useCanPlayMovie()
  const [ endAnimation, setEndAnimation ] = useState(false)
  const complated = isPlaying && endAnimation

  const handle = (e: any) => {
    e.preventDefault();
  };

  useEffect(() => {
    setTimeout(() => {
      setEndAnimation(true)
    },0.6 * 1000)
    if(!complated){
      document.addEventListener("wheel", handle, { passive: false });
      document.addEventListener("touchmove", handle, { passive: false });
    }
    return () => {
      if (!complated) {
        document.removeEventListener("wheel", handle);
        document.removeEventListener("touchmove", handle);
      }
    };
  },)
  return (
  <>
    <MetaHead/>
    <div className="relative bg-transparent z-10">
      <motion.div initial={{ x:0 }} animate={{ x: complated ? "-100%": "0" }} transition={{ duration:1, ease: "easeInOut" }} className="absolute top-0 left-0 h-screen w-screen">
          <div className="bg-black h-full w-full flex justify-center items-center py-auto">
              <div className="flex justify-center text-white font-bold font-noto_sans text-3xl">MULTIPLA/マルチプラ</div>
          </div>
      </motion.div>
      <TopContent />
      <SalesContent/>
      <ServiceContent/>
      <ActualSite/>
      <StrongPointContent/>
      <BlogContent blogData={blogDatas} />
    </div>
  </>
  );
};

