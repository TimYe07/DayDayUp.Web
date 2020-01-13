import { useRouter } from 'next/router'
import WebLayout from '../components/Layout'
import PostListTitle from '../components/ContentHeader'
import PostList from '../components/PostList'
import Pagination from '../components/Pagination'
import React, { useState } from 'react'
import Error from 'next/error'
import BlogApi from '../api/blogApi'
import PagingQuery from '../models/PagingQuery'
import Post from '../models/Post'

const Index = ({ errorCode, data }: { errorCode: number; data: PagingQuery<Post> }) => {
  const router = useRouter()
  const [offset, setOffset] = useState(0)

  const onPageChange = (event: object, offset: number, page: number) => {
    setOffset(offset)
    router.push(`/?page=${page}`)
  }

  if (errorCode) {
    return <Error statusCode={errorCode} />
  }

  return (
    <WebLayout>
      <PostListTitle title="全部笔记" />
      <PostList posts={data.values} />
      <Pagination total={data.total} offset={offset} limit={data.limit} onChange={onPageChange} />
    </WebLayout>
  )
}

Index.getInitialProps = async function({ query: { page = 1 } }) {
  const res = await BlogApi.GetPostsAsync(page)
  const errorCode = res.status > 200 ? res.status : false
  const data = (await res.data) as PagingQuery<Post>

  return {
    errorCode: errorCode,
    data: data
  }
}

export default Index
