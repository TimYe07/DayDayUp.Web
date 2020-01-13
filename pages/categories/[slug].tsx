import WebLayout from '../../components/Layout'
import PostListTitle from '../../components/ContentHeader'
import PostList from '../../components/PostList'
import Pagination from '../../components/Pagination'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import BlogApi from '../../api/blogApi'
import PagingQuery from '../../models/PagingQuery'
import Post from '../../models/Post'
import Error from 'next/error'
import PostInCategory from '../../models/PostInCategory'
import Head from 'next/head'


const Index = ({ errorCode, category, queryPosts }: { errorCode: number; category: PostInCategory, queryPosts: PagingQuery<Post> }) => {
  const router = useRouter()
  const [offset, setOffset] = useState(0)

  const onPageChange = (event: object, offset: number, page: number) => {
    setOffset(offset)
    router.push(`/categories/${router.query.slug}?page=${page}`)
  }

  if (errorCode) {
    return <Error statusCode={errorCode} />
  }

  return (
    <WebLayout>
      <Head>
        <title>{category.name} 的文章 - 分类 - Tim'Blog</title>
      </Head>
      <PostListTitle title={'分类 / ' + category.name} />
      <PostList posts={queryPosts.values} />
      <Pagination total={queryPosts.total} offset={offset} limit={queryPosts.limit} onChange={onPageChange} />
    </WebLayout>)
}


Index.getInitialProps = async function ({ query: { slug, page = 1 } }) {
  const res = await BlogApi.GetPostsByCategoryAsync(slug, page)
  const categoryRes = await BlogApi.GetCategoryAsync(slug)
  const errorCode = res.status > 200 || categoryRes.status > 200 ? res.status : false
  const queryPosts = res.data as PagingQuery<Post>
  const category = categoryRes.data as PostInCategory

  return {
    errorCode: errorCode,
    category: category,
    queryPosts: queryPosts
  }
}

export default Index

