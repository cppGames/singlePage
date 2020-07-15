import { createMuiTheme }  from '@material-ui/core/styles'

const theme = createMuiTheme({
  spacing: 8,
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

