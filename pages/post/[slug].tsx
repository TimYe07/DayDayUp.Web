import WebLayout from '../../components/Layout'
import PostDetail from '../../components/PostDetail'
import React from 'react'
import Head from 'next/head'
import BlogApi from '../../api/blogApi'
import Error from 'next/error'
import PostDetailModel from '../../models/PostDetail'

const Index = ({ errorCode, data }: { errorCode: number; data: PostDetailModel }) => {
  if (errorCode) {
    return <Error statusCode={errorCode} />
  }

  return (
    <WebLayout>
      <Head>
        <title>{data.title} - Tim'Blog</title>
        <link
          rel="Stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.15.10/styles/github-gist.min.css"
        />
      </Head>
      <PostDetail {...data}></PostDetail>
    </WebLayout>
  )
}

Index.getInitialProps = async function({ query: { slug } }) {
  const res = await BlogApi.GetPostAsync(slug)
  const errorCode = res.status > 200 ? res.status : false
  const data = (await res.data) as PostDetailModel

  return {
    errorCode: errorCode,
    data: data
  }
}

export default Index
