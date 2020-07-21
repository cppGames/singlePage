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
import { makeStyles } from '@material-ui/core/styles'
import PortfolioBackground from '../resource/img/portfolioBackground.jpg'
import BioBackground from '../resource/img/bioBackground.jpg'

const useStylesApp = makeStyles(theme => ({
  landingStyle: {
    left: 0,
    zIndex: 0,
    position: 'absolute',
    backgroundPosition: 'top',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    ////////////
    width: '100%',
    height: 1000,
    top: 0,
    backgroundImage: `url('${ PortfolioBackground }')`
  },
  bioStyle: {
    left: 0,
    zIndex: 0,
    position: 'absolute',
    backgroundPosition: 'top',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    ////////////
    width: '100%',
    height: 1000,
    top: 800,
    backgroundImage: `url('${ BioBackground }')`
  },
  portfolioStyle: {
    left: 0,
    zIndex: 0,
    position: 'absolute',
    backgroundPosition: 'top',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    ////////////
    width: '100%',
    height: 1000,
    top: 1600,
    backgroundImage: `url('${ PortfolioBackground }')`
  },
  constainer: {
    overflowY: 'hidden'
  }
}))

const App = () => {
  const classes = useStylesApp()
  AOS.init({
    duration: 50
  })

  return(
    // hotfix aos animation
    <div style={ {overflowX: 'hidden'} }>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <div className={ classes.landingStyle } id='landing' data-aos='fade-up' data-aos-offset='0' />
        <Landing />
        <div className={ classes.bioStyle } id='bio' data-aos='fade-up' data-aos-offset='200' />
        <Bio/>
        <div className={ classes.portfolioStyle } id='portfolio' data-aos='fade-up' data-aos-offset='200' />
        <Portfolio />
      </ThemeProvider>
    </div>
  )
}

export default App
