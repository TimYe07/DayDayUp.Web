import Head from 'next/head'
import React from 'react'
import WebLayout from '../../components/Layout'
import LinksTitle from '../../components/ContentHeader'
import FriendLinks from '../../components/FriendLinks'
import FriendLink from '../../models/FriendLink'


const links : FriendLink[] = [
    {
        name: 'Jerry',
        homePage: 'https://gianthard.rocks/',
        desc: '网上冲浪指南'
    }
] 
const Index = () => {
  return (
    <WebLayout>
      <Head>
        <title>友链 - Tim'Blog</title>
      </Head>
      <LinksTitle title="我的朋友们" />
      <FriendLinks links={links} />
    </WebLayout>
  )
}

export default Index
