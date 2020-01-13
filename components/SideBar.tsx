import React from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import AppProvider from '../store/AppProvider'

import Profile from './Profile'
import SideBarNav from './SideBarNav'

const useStyles: any = makeStyles((theme: Theme) =>
  createStyles({
    drawer: {
      width: 180,
      backgroundColor: '#4267b2',
    },
    mobileDrawer: {
      width: 180,
      marginTop: 48,
      backgroundColor: '#4267b2',
      height: 'calc(100% - 48px)'
    }
  })
)

export default function TemporaryDrawer() {
  const classes = useStyles()
  const appStatusContainer = AppProvider.useContainer()

  const toggleDrawer = () => {
    appStatusContainer.isHiddenSideBar({ ...appStatusContainer.appStatus, hiddenSidebar: true })
  }
  const paper = appStatusContainer.appStatus.isDesktop ? classes.drawer : classes.mobileDrawer
  const variant = appStatusContainer.appStatus.isDesktop ? 'persistent' : 'temporary'

  return (
    <div className={classes.root}>
      <Drawer
        anchor={appStatusContainer.appStatus.isDesktop ? 'left' : 'right'}
        open={!appStatusContainer.appStatus.hiddenSidebar}
        variant={variant}
        onClose={toggleDrawer}
        classes={{ paper: paper }}
      >
        <Profile />
        <SideBarNav />
      </Drawer>
    </div>
  )
}
