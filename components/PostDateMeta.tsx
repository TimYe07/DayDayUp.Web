import React from 'react'
import EventNoteIcon from '@material-ui/icons/EventNote'
import styled from 'styled-components'

const StyledPostDate = styled.span`
  color: #999;
  font-size: 10px;
  display: flex;
  flex-direction: row;
  align-items: end;
`

const PostDateMeta = props => {
  let postPublishDate: JSX.Element = <></>
  if (props.publishOn != null) {
    postPublishDate = (
      <StyledPostDate>
        <EventNoteIcon style={{ color: '#999', fontSize: 16 }} />
        &nbsp;&nbsp;{props.publishOn.slice(0, 10)}
      </StyledPostDate>
    )
  }
  return postPublishDate
}

export default PostDateMeta
