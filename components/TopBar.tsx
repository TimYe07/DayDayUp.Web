import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import { createStyles, fade, Theme, makeStyles } from '@material-ui/core/styles'
import MenuIcon from '@material-ui/icons/Menu'
import AppProvider from '../store/AppProvider'

const useStyles: any = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      boxShadow: 'none',
      backgroundColor: '#4267b2'
    },
    menuButton: {
      marginLeft: theme.spacing(2)
    },
    title: {
      flexGrow: 1
    }
  })
)

const BlogAppBar = () => {
  const classes = useStyles()
  const appProvider = AppProvider.useContainer()

  const toggleDrawer = () => {
    appProvider.isHiddenSideBar({ ...appProvider.appStatus, hiddenSidebar: !appProvider.appStatus.hiddenSidebar })
  }

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.root}>
        <Toolbar variant="dense">
          <Typography className={classes.title} variant="h6" noWrap>
            Tim'Blog
          </Typography>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default BlogAppBar