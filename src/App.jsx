import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from './theme'


import AOS from 'aos'
import 'aos/dist/aos.css'
import Bio from './components/bio/Bio'
import Navbar from './components/Navbar'
import Landing from './components/landing/Landing'
import Portfolio from './components/portfolio/Portfolio'


const App = () => {
  AOS.init()

  return(
    // hotfix aos animation
    <div style={ {overflowX: 'hidden'} }>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <Landing />
        <Bio/>
        <div data-aos='fade-left'>
          <Portfolio />
        </div>
      </ThemeProvider>
    </div>
  )
}

export default App
