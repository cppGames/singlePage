import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from './theme'

import Landing from './components/landing/Landing'
import Bio from './components/bio/Bio'


const App = () => {
  return(
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Landing />
      <Bio/>
    </ThemeProvider>
  )
}

export default App
