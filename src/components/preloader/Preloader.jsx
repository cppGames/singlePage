import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStylesPreloader = makeStyles(theme => ({
  root: {
    overflowY: 'hidden !important',
    overflowX: 'hidden !important',
    minHeight: '98vh',
    fontFamily: 'consolas',
    backgroundColor: 'cadetblue',
    textAlign: 'center',
  },
  wavy: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    
    // mirrow
    '-webkit-box-reflect': 'below -12px linear-gradient(transparent, rgba(0,0,0,0.2))',
    // affect children element
    '& span': {
      fontSize: '2rem',
      position: 'relative',
      display: 'inline-block',
      color: '#fff',
      textTransform: 'uppercase',
      animation: '$animate 1s ease-in-out infinite',
      animationDelay: `calc(0.1s *  var(--i))`
    }
    // affect children styles
    // '&.active'
    // '&:hover'
  },
  '@keyframes animate': {
    '0%': {
      transform: 'translateY(8px)',
    },
    '20%': {
      transform: 'translateY(20px)',
    },
    '40%': {
      transform: 'translateY(0px)',
    },
  }
  
}))

const Preloader = () => {
  const classes = useStylesPreloader()

  return(
    <div className={classes.root}>
      <div className={classes.wavy}>
        <span style={{'--i':1}}>L</span>
        <span style={{'--i':2}}>o</span>
        <span style={{'--i':3}}>a</span>
        <span style={{'--i':4}}>d</span>
        <span style={{'--i':5}}>i</span>
        <span style={{'--i':6}}>n</span>
        <span style={{'--i':7}}>i</span>
        <span style={{'--i':8}}>g</span>
        <span style={{'--i':9}}>.</span>
        <span style={{'--i':10}}>.</span>
        <span style={{'--i':11}}>.</span>
      </div>
    </div>
  )
}

export default Preloader
