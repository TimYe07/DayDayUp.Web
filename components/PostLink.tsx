import styled from 'styled-components'
import Link from 'next/link'
import React from 'react'

const StyledPostLink = styled.a`
  color: #999;
  margin-left: 4px;
  font-size: 10px;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    color: #bdbdbd;
    text-decoration: underline;
  }
`

const PostLink = props => {
  return (
    <Link href={props.href}>
      <StyledPostLink>{props.text}</StyledPostLink>
    </Link>
  )
}

export default PostLink
