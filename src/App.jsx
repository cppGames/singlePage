import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from './theme'

import Bio from './components/bio/Bio'
import Navbar from './components/Navbar'
import Landing from './components/landing/Landing'
import Portfolio from './components/portfolio/Portfolio'


const App = () => {
  return(
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Landing />
      <Bio/>
      <Portfolio />
    </ThemeProvider>
  )
}

export default App
