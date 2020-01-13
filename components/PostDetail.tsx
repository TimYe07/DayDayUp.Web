import Link from 'next/link'
import styled from 'styled-components'
import PostDateMeta from './PostDateMeta'
import PostTagMeta from './PostTagMeta'
import PostCategoryMeta from './PostCategoryMeta'
import React from 'react'
import 'github-markdown-css'

const PostContainer = styled.div``

const StyledPostBodyBox = styled.div``

const PostTitle = styled.h1`
  font-size: 28px;
  color: #2a2935;
  text-shadow: hsla(0, 0%, 100%, 0.75) 0 1px 0;
`

const MetaBox = styled.div`
  display: flex;
  padding: 1em 0;
  border-bottom: 1px dashed #cacaca;
  border-top: 1px dashed #cacaca;
  margin: 2em 0;
`

const StyledAsideToc = styled.div`
  position: fixed;
  top: 50%;
  right: 0;
`

const CatLog = props => {
  return (
    <StyledAsideToc>
      <h3>内容目录</h3>
      <div className="table-of-contents">
        <div className="toc">
          <ul>
            {props.toc.map(item => {
              return (
                <li key={item.id}>
                  <Link href={item.id}>
                    <a className={'toc-level-' + item.level}>{item.name}</a>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </StyledAsideToc>
  )
}
const PostDetail = props => {
  return (
    <PostContainer>
      <StyledPostBodyBox>
        <PostTitle>{props.title}</PostTitle>
        <MetaBox>
          <PostDateMeta publishOn={props.publishOn}></PostDateMeta>
          <PostCategoryMeta category={props.category} />
          <PostTagMeta tags={props.tags}></PostTagMeta>
        </MetaBox>
          <div className={'markdown-body'} dangerouslySetInnerHTML={{ __html: props.content }}></div>
      </StyledPostBodyBox>
      {/*<CatLog toc={props.toc}></CatLog>*/}
    </PostContainer>
  )
}

export default PostDetail
