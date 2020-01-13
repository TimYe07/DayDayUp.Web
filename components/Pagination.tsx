import React from "react";
import styled from 'styled-components'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import Pagination from "material-ui-flat-pagination";

const PaginationBox = styled.div`
  padding-top: 16px;
`

const useStyles: any = makeStyles((theme: Theme)=> createStyles({
  textPrimary: {
    color: '#aea79f',
  },
  textSecondary: {
    color: '#4267b2',
  }
}))

const FooterPagination = (props) => {
  const classes = useStyles()

  return (
    <PaginationBox>
      <Pagination
        classes={{
          textPrimary: classes.textPrimary,
          textSecondary: classes.textSecondary,
        }}
        offset={props.offset}
        limit={props.limit}
        total={props.total}
        onClick={props.onChange}
      />
    </PaginationBox>
  )
}

export default FooterPagination