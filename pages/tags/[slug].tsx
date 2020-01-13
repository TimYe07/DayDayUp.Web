import WebLayout from '../../components/Layout'
import PostListTitle from '../../components/ContentHeader'
import PostList from '../../components/PostList'
import Pagination from '../../components/Pagination'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import Head from 'next/head'
import BlogApi from '../../api/blogApi'
import PagingQuery from '../../models/PagingQuery'
import Post from '../../models/Post'
import Error from 'next/error'
import PostInTag from '../../models/PostInTag'

const Index = ({ errorCode, tag, data }: { errorCode: number;tag: PostInTag; data: PagingQuery<Post> }) => {

  const router = useRouter()
  const [offset, setOffset] = useState(0)

  const onPageChange = (event: object, offset: number, page: number) => {
    setOffset(offset)
    router.push(`/tags/${router.query.slug}?page=${page}`)
  }

  if (errorCode) {
    return <Error statusCode={errorCode} />
  }

  return (
    <WebLayout>
      <Head>
        <title>{tag.name} 的文章 - 标签 - Tim'Blog</title>
      </Head>
      <PostListTitle title={'标签 / ' + tag.name} />
      <PostList posts={data.values} />
      <Pagination total={data.total} offset={offset} limit={data.limit} onChange={onPageChange} />
    </WebLayout>
  )
}

Index.getInitialProps = async function({ query: { slug, page = 1 } }) {
  const res = await BlogApi.GetPostsByTagAsync(slug, page)
  const tagRes = await BlogApi.GetTagAsync(slug)
  const errorCode = res.status > 200 || tagRes.status > 200 ? res.status : false
  const queryPosts = res.data as PagingQuery<Post>
  const tag = tagRes.data as PostInTag

  return {
    errorCode: errorCode,
    tag: tag,
    queryPosts: queryPosts
  }
}

export default Index
