import React, { useState } from "react";
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
import type { GetStaticProps, InferGetStaticPropsType } from 'next';


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

export default function index({blogDatas}: InferGetStaticPropsType<typeof getStaticProps>){
  return (
  <>
    <MetaHead/>
    <div className="relative bg-transparent z-10">
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

