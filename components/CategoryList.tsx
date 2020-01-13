import Link from 'next/link'
import styled from 'styled-components'
import React from 'react'

const CategoryListBox = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const CategoryTitle = styled.a`
  color: #4267b2;
  text-decoration: none;
  background-color: transparent;
  font-size: 14px;
  padding: 1rem 1rem 1rem 0;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`
const CategoryList = props => {
  return (
    <CategoryListBox>
      {props.categories.map((category, i) => (
        <Link href={'/categories/' + category.slug} key={i}>
          <CategoryTitle href="post-link">
            {category.name}({category.count})
          </CategoryTitle>
        </Link>
      ))}
    </CategoryListBox>
  )
}

export default CategoryList
