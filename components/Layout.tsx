import clsx from 'clsx'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

import BlogAppBar from './TopBar'
import SideBar from './SideBar'
import AppStatusContainer from '../store/AppProvider'
import React, { useEffect } from 'react'

const drawerWidth = 180
const useStyles: any = makeStyles((theme: Theme) =>
  createStyles({
    content: {
      flexGrow: 1,
      paddingLeft: 32,
      paddingRight: 32,
      paddingTop: 16,
      paddingBottom: 16,
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      marginLeft: drawerWidth
    },
    contentShift: {
      flexGrow: 1,
      paddingLeft: 32,
      paddingRight: 32,
      paddingTop: 48,
      paddingBottom: 16,
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen
      }),
      marginLeft: 0
    }
  })
)

function TopBar({ isDeskTop }: { isDeskTop: boolean }) {
  if (!isDeskTop) {
    return <BlogAppBar />
  }

  return <></>
}

function Layout(props) {
  const classes = useStyles()
  const appStatusContainer = AppStatusContainer.useContainer()

  useEffect(() => {
    if (process.browser) {
      if (!!navigator.userAgent.match(/AppleWebKit.*Mobile.*/)) {
        if (appStatusContainer.appStatus.isDesktop) {
          appStatusContainer.isDesktop({ isDesktop: false, hiddenSidebar: true })
        }
      } else {
        if (!appStatusContainer.appStatus.isDesktop) {
          appStatusContainer.isDesktop({ isDesktop: true, hiddenSidebar: false })
        }
      }
    }
  })

  const mainClass = appStatusContainer.appStatus.isDesktop ? classes.content : classes.contentShift
  return (
    <div>
      <CssBaseline />
      <TopBar isDeskTop={appStatusContainer.appStatus.isDesktop} />
      <SideBar />
      <main
        className={mainClass}
      >
        {props.children}
      </main>
    </div>
  )
}

export default Layout
