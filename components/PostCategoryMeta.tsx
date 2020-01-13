import BookIcon from '@material-ui/icons/Book'
import React from 'react'
import styled from 'styled-components'
import PostLink from './PostLink'

const StyledCategoryContainer = styled.span`
  color: #999;
  font-size: 10px;
  display: flex;
  flex-direction: row;
  align-items: end;
  margin-left: 16px;
`

const PostCategory = props => {
  let postCategory: JSX.Element = <></>
  if (props.category != null) {
    postCategory = (
      <StyledCategoryContainer>
        <BookIcon style={{ color: '#999', fontSize: 16 }} />
        <PostLink href={'/categories/' + props.category.slug} text={props.category.name} />
      </StyledCategoryContainer>
    )
  }
  return postCategory
}

export default PostCategory
