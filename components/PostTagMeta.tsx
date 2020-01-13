import LocalOfferIcon from '@material-ui/icons/LocalOffer'
import React from 'react'
import styled from 'styled-components'
import PostLink from './PostLink'

const StyledTagContainer = styled.span`
  display: flex;
  flex-direction: row;
  align-items: end;
  margin-left: 16px;
`

const PostTagItem = props => {
  const tagLen = props.tags.length
  return props.tags.map((tag, i) => {
    if (tagLen == i + 1) {
      return (
        <PostLink href={'/tags/' + tag.slug} text={tag.name} key={i}>
          {tag.name}
        </PostLink>
      )
    } else {
      return (
        <>
          <PostLink href={'/tags/' + tag.slug} text={tag.name} key={i}>
            {tag.name}
          </PostLink>
          <span>,</span>
        </>
      )
    }
  })
}

const PostTags = props => {
  let postTag: JSX.Element = <></>
  if (props.tags.length > 0) {
    postTag = (
      <StyledTagContainer>
        <LocalOfferIcon style={{ color: '#999', fontSize: 16 }} />
        <PostTagItem tags={props.tags} />
      </StyledTagContainer>
    )
  }
  return postTag
}

export default PostTags
