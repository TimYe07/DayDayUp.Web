import WebLayout from '../../components/Layout'
import TagListTitle from '../../components/ContentHeader'
import TagList from '../../components/TagList'
import Head from 'next/head'
import React from 'react'
import BlogApi from '../../api/blogApi'
import PagingQuery from '../../models/PagingQuery'
import PostInTag from '../../models/PostInTag'
import Error from 'next/error'

const Index = ({ errorCode, data }: { errorCode: any; data: PagingQuery<PostInTag> }) => {

  if (errorCode) {
    return <Error statusCode={errorCode} />
  }

  return (
    <WebLayout>
      <Head>
        <title>标签 - Tim'Blog</title>
      </Head>
      <TagListTitle title="全部标签" />
      <TagList tags={data.values} />
    </WebLayout>
  )
}

Index.getInitialProps = async function() {
  const res = await BlogApi.GetAllTagAsync()
  const errorCode = res.status > 200 ? res.status : false
  const data = (await res.data) as PagingQuery<PostInTag>

  return {
    errorCode: errorCode,
    data: data
  }
}

export default Index
