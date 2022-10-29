import React from 'react'
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'

import { microcmsClient, MICROCMS_ENDPOINT_BLOG, MICROCMS_ENDPOINT_CATEGORY } from '@service/micro-cms'

import { BlogCard, BreadcrumbList, Container } from '@components/ui'
import { createBreadcrumListJsonLd } from '@components/utils'
import { BreadcrumbItem } from '@components/utils/createBreadcrumbList-json-ld'
import { MetaHead } from '@components/common'
import type { Category, Blog } from '@service/micro-cms/type/Blog'


export const getStaticPaths: GetStaticPaths = async () => {
  const categoryContents = await microcmsClient.get({ endpoint: MICROCMS_ENDPOINT_CATEGORY  });
  const paths = categoryContents.contents.map((category: Category) => `/blog/category/${category.id}`)
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.category;
  const searchWord = await microcmsClient.get({endpoint: MICROCMS_ENDPOINT_CATEGORY , queries: { ids: id }});
  const blogs = await microcmsClient.get({endpoint: MICROCMS_ENDPOINT_BLOG});
  const categoryBlogs = blogs.contents.map((blog: Blog) => {
      for(var i = 0; i < blog.category.length; i++) {
          if(blog.category[i].id == id){
              return blog;
          }
      }
  })
  let result = categoryBlogs.filter(function (x:any) {
      return !(x === null || x === undefined || x === "");
  })
  return {
      props: {
          blogs: result,
          id: id,
          searchWord: searchWord.contents[0].category
      },
  };
};



const Category = ({blogs, id, searchWord}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const items: BreadcrumbItem[] = [
    {name: "ホーム", url:"/"},
    {name: "ブログ一覧", url:"/blog/page/1"},
    {name:  searchWord + "- 関連記事", url:"/"}
  ]
  return (
    <>
      <MetaHead
        title={`${searchWord} - 記事一覧 | マルチプラ | 丹波篠山市のWEB制作会社 `}
        description={`マルチプラ/Multiplaのブログのカテゴリーページです。カテゴリー - ${searchWord} で検索しました。${ blogs.length === 0 ? "お探しのカテゴリーの記事はまだ公開されていません。。。" : `${blogs.length}件見つかりました。` }`}
      >
        <script type='application/ld+json' dangerouslySetInnerHTML={createBreadcrumListJsonLd(items)}></script>
      </MetaHead>
        <Container>
            <div className='py-8'>
              <BreadcrumbList items={items}/>
                <div className='max-w-lg md:max-w-4xl lg:max-w-6xl mx-auto'>
                    <div>
                        <h1 className="my-6 font-bold text-xl md:text-2xl lg:text-3xl"><span className='text-3xl md:text-4xl lg:text-5xl'>マルチプラ</span>ブログ</h1>
                    </div>
                    <div className={`${ blogs.length !== 0 ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 py-12" : "grid grid-cols-1 gap-6 py-12" }`}>
                        {
                            blogs.length !==0 ? blogs.map((blog: Blog, index: number) => (
                                <BlogCard key={index} blog={blog} />
                            )) : <p className='py-16 md:py-32 lg:py-42  text-center text-2xl font-bold text-gray-500'>お探しのカテゴリー記事は<br/>見つかりませんでした...</p>
                        }
                    </div>
                </div>
            </div>
        </Container>
    </>
  )
}

export default Category