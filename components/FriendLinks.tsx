import Link from 'next/link'
import styled from 'styled-components'
import React from 'react'
import FriendLink from '../models/FriendLink'

const StyledFriendLinkContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const StyledFriendLink = styled.a`
  color: #4267b2;
  text-decoration: none;
  background-color: transparent;
  font-size: 16px;
  padding: 1rem 1rem 1rem 0;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`
const FriendLinks = ({ links }: { links: FriendLink[] }) => {
    return (
        <StyledFriendLinkContainer>
            {links.map((link, i) => (
                <Link href={link.homePage} key={i}>
                    <StyledFriendLink>
                        {link.name} - {link.desc}
                    </StyledFriendLink>
                </Link>

            ))}
        </StyledFriendLinkContainer>
    )
}

export default FriendLinks
