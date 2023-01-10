import React from "react";
import type { News } from "@service/micro-cms/type/News";
import Link from "next/link";

interface Props {
  news: News[];
}

const NewsLatter = ({ news }: Props) => {
  return (
    <div className="w-full h-full bg-gray-100 py-8">
      <div className="px-8 md:px-12 max-w-6xl mx-auto font-noto_sans">
        <div className="w-fit my-2 md:my-4">
          <h5 className="text-3xl md:text-4xl">News</h5>
          <div className="h-[2px] w-full bg-green-300"></div>
          <p className="text-xs">ニュース</p>
        </div>
        <div className="w-full flex justify-end">
          <p className="w-fit text-sm md:text-base underline text-blue-500">
            <Link href={"/news/page/1"} passHref>
              <a>ニュース一覧へ</a>
            </Link>
          </p>
        </div>
        <div className="mt-8">
          {news.map((_news) => {
            return (
              <div
                key={_news.id}
                className="bg-white shadow-sm rounded-sm py-1 md:py-3 px-2 md:px-5 mb-3 text-gray-500"
              >
                <div className="md:flex items-center  md:space-x-12 text-sm md:text-base">
                  <div className="my-2 flex items-center justify-between">
                    <p className="text-blue-600">
                      {_news.createdAt.split("T")[0]}
                    </p>
                    <p className="ml-4 border border-green-500 px-3 rounded-sm font-normal text-green-500">
                      {_news.category}
                    </p>
                  </div>
                  <p className="p-2 text-black">{_news.title}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NewsLatter;
