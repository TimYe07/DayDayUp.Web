import Head from 'next/head'
import React from 'react'
import WebLayout from '../../components/Layout'
import CategoryListTitle from '../../components/ContentHeader'
import CategoryList from '../../components/CategoryList'
import BlogApi from '../../api/blogApi'
import PagingQuery from '../../models/PagingQuery'
import PostInCategory from '../../models/PostInCategory'
import Error from 'next/error'
import Post from '../../models/Post'

const Index = ({ errorCode, data }: { errorCode: any; data: PagingQuery<Post> }) => {
  if (errorCode) {
    return <Error statusCode={errorCode} />
  }

  return (
    <WebLayout>
      <Head>
        <title>分类 - Tim'Blog</title>
      </Head>
      <CategoryListTitle title="全部分类" />
      <CategoryList categories={data.values} />
    </WebLayout>
  )
}

Index.getInitialProps = async function() {
  const res = await BlogApi.GetAllCategories()
  const errorCode = res.status > 200 ? res.status : false
  const data = (await res.data) as PagingQuery<PostInCategory>

  return {
    errorCode: errorCode,
    data: data
  }
}

export default Index
