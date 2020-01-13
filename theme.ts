import { createMuiTheme } from '@material-ui/core/styles'

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#1b1b22'
    },
    secondary: {
      main: '#19857b'
    },
    background: {
      default: '#fff'
    }
  }
})

export default theme