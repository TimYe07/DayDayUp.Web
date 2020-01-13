import styled from 'styled-components'
import React from 'react'

const Container = styled.div`
flex:1;
margin-top: 1rem;
`
const HeaderTitle = styled.h2`
    font-size: 20px;
    color: #333;
    border-bottom: 1px solid #eee;
    padding-bottom: 4px;
    margin: 0;
`

const ContentHeader = (props) => {
  return (
    <Container>
      <HeaderTitle>{props.title}</HeaderTitle>
    </Container>
  )
}

export default ContentHeader