import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from './theme'

import Container from '@material-ui/core/Container'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Bio from './components/bio/Bio'
import Navbar from './components/Navbar'
import Landing from './components/landing/Landing'
import Portfolio from './components/portfolio/Portfolio'
import Action from './components/action/Action'
import { makeStyles } from '@material-ui/core/styles'
import LandingBackground from '../resource/img/landingBackground.png'
import PortfolioBackground from '../resource/img/portfolioBackground.png'
import BioBackground from '../resource/img/bioBackground.png'

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
    backgroundImage: `url('${ LandingBackground }')`
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
    top: 1000,
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
    height: 2300,
    top: 2000,
    backgroundImage: `url('${ BioBackground }')`
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
        <Container maxWidth='lg'>
          <div className={ classes.landingStyle } id='landing' data-aos='fade-up' data-aos-offset='0' />
          <Landing />
          <div className={ classes.portfolioStyle } id='portfolio' data-aos='fade-up' data-aos-offset='200' />
          <Portfolio />
          <div className={ classes.bioStyle } id='bio' data-aos='fade-up' data-aos-offset='200' />
          <Bio/>
          <div id='email' data-aos='fade-up' data-aos-offset='200' />
          <Action />
        </Container>
      </ThemeProvider>
    </div>
  )
}

export default App
