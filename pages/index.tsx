import React from "react";
import {
  microcmsClient,
  MICROCMS_ENDPOINT_BLOG,
  MICROCMS_ENDPOINT_NEWS
}  from "@service/micro-cms";
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
import type { GetStaticProps, InferGetStaticPropsType } from 'next';


export const getStaticProps: GetStaticProps = async () => {
  const blogData = await microcmsClient.get({ endpoint: MICROCMS_ENDPOINT_BLOG, queries: { limit: 4 } });
  const newsData = await microcmsClient.get({ endpoint: MICROCMS_ENDPOINT_NEWS, queries: { limit: 3 } });
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
      <ServiceContent/>
      <ActualSite/>
      <StrongPointContent/>
      <NewsLatter news={news} />
      <BlogContent blogData={blog} />
    </div>
  </>
  );
};

