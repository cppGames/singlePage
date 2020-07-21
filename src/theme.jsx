import { createMuiTheme }  from '@material-ui/core/styles'

const theme = createMuiTheme({
  spacing: 8,
  page: {
    minHeight: '100vh',
  },
  content: {
    minHeight: '100vh',
    position: "relative",
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
  palette: {
    primary: {
      light: '#757ce8',
      main: '#0195ac',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    }
  }
})

export default theme

