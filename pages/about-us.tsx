import React from "react";

import { MetaHead } from "@components/common";
import { createBreadcrumListJsonLd } from "@components/utils";
import type { BreadcrumbItem } from "@components/utils/createBreadcrumbList-json-ld";

import { motion } from "framer-motion";
import { BreadcrumbList, Container } from "@components/ui";

const AboutUs = () => {
  const items: BreadcrumbItem[] = [
    { name: "ホーム", url: "/" },
    { name: "私たちについて", url: "/about-us" },
  ];
  return (
    <>
      <MetaHead
        title={"私たちについて | マルチプラ | 丹波篠山市のWEB制作会社"}
        description={
          "マルチプラ/Multiplaは丹波篠山市を拠点にWEBサイト・ECサイトの制作から集客・収益化までを一貫してサポートする会社です。WEBサイトのお困り事がございましたらお気軽にお問い合わせください。"
        }
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={createBreadcrumListJsonLd(items)}
        />
      </MetaHead>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{
            delay: 0.3,
            duration: 0.7,
          }}
          className={"font-noto_sans"}
        >
          <BreadcrumbList items={items} />
          <h1 className="lg:text-3xl text-2xl text-gray-700 font-bold text-center title-font">
            私たちについて
          </h1>
          <h2 className="text-gray-700 font-bold text-center title-font mb-4 uppercase">
            / about
          </h2>
          <div className="w-full">
            <div className="font-bold text-xl lg:text-3xl text-center tracking-wide max-w-4xl mx-auto">
              <p className="pt-8 mx-8">
                『 <span className="text-2xl lg:text-5xl">構築</span>
                だけじゃない<span className="text-2xl lg:text-5xl">集客</span>
              </p>
              <p className="mx-8">
                <span className="text-2xl lg:text-5xl">収益化</span>
                まで徹底サポート 』
              </p>
            </div>
          </div>
          <div className="mx-auto w-2/3 my-8 text-gray-500 mb-6 text-xs lg:text-sm max-w-xl">
            マルチプラは最新技術を利用してお客さまのビジネスにフィットしたWEBサイト・ECサイトの構築を心がけています。
            様々な外部サービスと連携し、コストを抑えて開発いたします。
          </div>
          <div className="max-w-3xl mx-auto my-6">
            <div className="mx-2">
              <p className="mt-8 text-left ml-8 text-lg lg:text-2xl  font-bold">
                会社概要
              </p>
              <div className="mx-8 h-0.5  bg-black rounded-full"></div>
              <p className="mb-2 text-left ml-8 text-lg lg:text-2xl  font-bold">
                Company
              </p>
            </div>
          </div>
          <div className="max-w-3xl mx-auto mt-12">
            <div className="flex items-center space-x-4 lg:space-x-8 p-2 mx-8">
              <h5 className="text-left w-32 inline-block lg:text-xl font-bold">
                会社名
              </h5>
              <span className="text-left lg:text-xl w-full font-bold">
                マルチプラ/Multipla
              </span>
            </div>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center space-x-4 lg:space-x-8 p-2 mx-8">
              <h5 className="text-left w-32 inline-block lg:text-xl font-bold">
                所在地
              </h5>
              <p className="text-left lg:text-xl w-full font-bold">
                兵庫県丹波篠山市今田町下小野原59-45
              </p>
            </div>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center space-x-4 lg:space-x-8 p-2 mx-8">
              <h5 className="text-left w-32 inline-block lg:text-xl font-bold">
                アドレス
              </h5>
              <p className="text-left lg:text-xl w-full overflow-hidden font-bold">
                suport@multipla.io
              </p>
            </div>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center space-x-4 lg:space-x-8 p-2 mx-8">
              <h5 className="text-left w-32 inline-block lg:text-xl font-bold">
                設立日
              </h5>
              <p className="text-left lg:text-xl w-full font-bold">
                2022月2月12日
              </p>
            </div>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center space-x-4 lg:space-x-8 p-2 mx-8">
              <h5 className="text-left w-32 inline-block lg:text-xl font-bold">
                代表
              </h5>
              <p className="text-left lg:text-xl w-full font-bold">数元伸哉</p>
            </div>
          </div>
          <div className="max-w-3xl mx-auto pb-12 md:pb-24">
            <div className="flex items-center space-x-4 lg:space-x-8 p-2 mx-8">
              <h5 className="text-left w-32 inline-block lg:text-xl font-bold">
                資本金
              </h5>
              <p className="text-left lg:text-xl w-full font-bold">30万円</p>
            </div>
          </div>
        </motion.div>
      </Container>
    </>
  );
};

export default AboutUs;
