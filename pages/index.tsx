import React, { useEffect, useState } from "react";
import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import { microcmsClient, MICROCMS_ENDPOINT_BLOG, MICROCMS_ENDPOINT_NEWS }  from "@service/micro-cms";
import {
  TopContent,
  ServiceContent,
  SalesContent,
  ActualSite,
  StrongPointContent,
  BlogContent
} from "@components/page"
import { MetaHead } from "@components/common";
import { NewsLatter } from "@components/ui";

const dataLimit = 3;

export const getStaticProps: GetStaticProps = async () => {
  const blogData = await microcmsClient.get({
    endpoint: MICROCMS_ENDPOINT_BLOG,
    queries: { limit: dataLimit }
  });
  const newsData = await microcmsClient.get({ endpoint: MICROCMS_ENDPOINT_NEWS, queries: { limit: dataLimit } })
  return {
      props: {
          blog: blogData.contents,
          news: newsData.contents
      },
      revalidate: 4 * 60 * 60
  }
}

export default function Index({blog, news}: InferGetStaticPropsType<typeof getStaticProps>){

  return (
  <>
    <MetaHead/>
    <div className="">
      <TopContent />
      <SalesContent/>
      <NewsLatter news={news} />
      <ServiceContent/>
      <ActualSite/>
      <StrongPointContent/>
      <BlogContent blogData={blog} />
    </div>
  </>
  );
};

