import Link from 'next/link'
import styled from 'styled-components'
import React from 'react'

const TagListBox = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const TagTitle = styled.a`
  color: #4267b2;
  text-decoration: none;
  background-color: transparent;
  font-size: 14px;
  padding: 1rem 1rem 1rem 0;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`

const TagList = props => {
  return (
    <TagListBox>
      {props.tags.map((tag, i) => (
        <Link href={'/tags/' + tag.slug} key={i}>
          <TagTitle>
            {tag.name}({tag.count})
          </TagTitle>
        </Link>
      ))}
    </TagListBox>
  )
}

export default TagList
