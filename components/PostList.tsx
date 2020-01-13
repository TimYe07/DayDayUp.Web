import Link from 'next/link'
import styled from 'styled-components'
import React from 'react'
import PostCategoryMeta from './PostCategoryMeta'
import PostTagMeta from './PostTagMeta'
import PostDateMeta from './PostDateMeta'

const PostContainer = styled.div`
  border-bottom: 1px dotted #eee;
`
const PostTitle = styled.h2`
  font-size: 24px;
  text-shadow: hsla(0, 0%, 100%, 0.75) 0 1px 0;
  font-weight: 500;
  line-height: 1.1;

  a {
    color: #4267b2;
    text-decoration: none;
    background-color: transparent;
  }

  a:hover {
    transition: all 0.2s linear;
    text-decoration: underline;
    outline: 0;
  }
`
const PostMeta = styled.div`
  padding: 0;
  border: none;
  margin: 0.5rem 0.5rem 0.5rem 0;
  display: flex;
`
const PostDesc = styled.p`
  font-size: 15px;
  color: #333;
`

const Post = props => {
  return (
    <PostContainer>
      <PostTitle>
        <Link href={'/post/' + props.slug}>
          <a>{props.title}</a>
        </Link>
      </PostTitle>
      <PostDesc>{props.description}</PostDesc>
      <PostMeta>
        <PostDateMeta publishOn={props.publishOn}></PostDateMeta>
        <PostCategoryMeta category={props.category} />
        <PostTagMeta tags={props.tags}></PostTagMeta>
      </PostMeta>
    </PostContainer>
  )
}

const PostList = props => {
  return (
    <>
      {props.posts.map((post, i) => (
        <Post key={i} {...post} />
      ))}
    </>
  )
}

export default PostList
