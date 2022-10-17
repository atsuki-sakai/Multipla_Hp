import React from "react";
import { microcmsClient, MICROCMS_ENDPOINT }  from "@service/micro-cms";
import {
  TopContent,
  ServiceContent,
  SalesContent,
  ActualSite,
  StrongPointContent,
  BlogContent
} from "@components/ui/page"
import { MetaHead } from "@components/common";
import type { GetStaticProps, InferGetStaticPropsType } from 'next';


const dataLimit = 4;

export const getStaticProps: GetStaticProps = async () => {
  const data = await microcmsClient.get({
    endpoint: MICROCMS_ENDPOINT,
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

export default function index({blogDatas}: InferGetStaticPropsType<typeof getStaticProps>){
  return (
  <>
    <MetaHead/>
    <div className="relative bg-transparent z-10">
      <TopContent/>
      <SalesContent/>
      <ServiceContent/>
      <ActualSite/>
      <StrongPointContent/>
      <BlogContent blogData={blogDatas} />
      {/* <div className="relative ">
        <div className="relative h-screen w-full overflow-hidden">
          <Image src={"/images/top-bg-image.jpg"} width={800} height={600} layout="fill" objectFit="cover" alt={"background image"} />
        </div>
        <div className="absolute top-1/3 left-1/2 w-full -translate-x-1/2">
          <div className="bg-gray-600 w-fit mx-auto bg-opacity-50 px-4 py-2 rounded-md">
            <p className="font-noto_sans font-bold text-4xl text-white">MALTIPLA</p>
            <p className="text-white text-sm">ITの力でビジネスを成長させる。</p>
          </div>
          <div className="w-fit mx-auto bg-gradient-to-tr to-green-400 from-lime-400 mt-12 rounded-md shadow-md">
            <p className="text-center py-2 px-6 max-w-sm mx-auto">
              <span className="text-lg font-bold text-white">お問い合せ・ご相談はこちら</span>
            </p>
          </div>
        </div>
      </div> */}
    </div>
  </>
  );
};

