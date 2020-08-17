import { createMuiTheme }  from '@material-ui/core/styles'

const theme = createMuiTheme({
  spacing: 8,
  palette: {
    primary: {
      light: '#0f141e',
      main: '#0f141e',
      dark: '#0f141e',
      contrastText: '#0f141e',
    },
    secondary: {
      light: '#878a8f',
      main: '#878a8f',
      dark: '#878a8f',
      contrastText: '#000',
    },
  },
  page: {
    minHeight: '100vh',
  },
  content: {
    // padding: '40px',
    minHeight: '100vh',
    position: 'relative',
    zIndex: 1,
  },
  backg: {
    left: 0,
    zIndex: 0,
    position: 'absolute',
    backgroundPosition: 'top',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
  },
})

export default theme

