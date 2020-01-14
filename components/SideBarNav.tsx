import React from 'react'
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ActiveLink from './ActiveLink'

const useStyles: any = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      backgroundColor: '#4267b2',
    },
    list: {
      color: '#fff'
    },
    item: {
      display: 'flex',
      justifyContent: 'center'
    },
    active: {
      color: '#fff',
      fontWeight: 600,
      backgroundColor: '#1c4a99',
    },
  })
)

export default function SimpleList() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <List className={classes.list}>
        <ActiveLink activeClassName={classes.active} href="/">
          <ListItem button component={'a'} >
            <ListItemText className={classes.item} primary="最新" />
          </ListItem>
        </ActiveLink>
        <ActiveLink activeClassName={classes.active} href="/categories">
          <ListItem button component={'a'}>
            <ListItemText className={classes.item} primary="分类" />
          </ListItem>
        </ActiveLink>
        <ActiveLink activeClassName={classes.active} href="/tags">
          <ListItem button component={'a'}>
            <ListItemText className={classes.item} primary="标签" />
          </ListItem>
        </ActiveLink>
        <ActiveLink activeClassName={classes.active} href="/links">
          <ListItem button component={'a'}>
            <ListItemText className={classes.item} primary="友链" />
          </ListItem>
        </ActiveLink>
        <ListItem button component={'a'}>
          <ListItemText className={classes.item} primary="搜索" />
        </ListItem>
      </List>
    </div>
  )
}
