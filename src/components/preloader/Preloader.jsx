import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStylesPreloader = makeStyles(theme => ({
  root: {
    overflowY: 'hidden !important',
    overflowX: 'hidden !important',
    minHeight: '98vh',
    fontFamily: 'consolas',
    backgroundColor: 'aquamarine',
  },
  wavy: {
    position: 'relative',
    // mirrow
    '-webkit-box-reflect': 'below -12px linear-gradient(transparent, rgba(0,0,0,0.2))',
    // affect children element
    '& span': {
      fontSize: '2rem',
      position: 'relative',
      display: 'inline-block',
      color: '#fff',
      textTransform: 'uppercase',
      animation: '$animate 1s ease-in-out infinite'
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
      transform: 'translateY(28px)',
    },
  }
  
}))

const Preloader = () => {
  const classes = useStylesPreloader()

  return(
    <div className={classes.root}>
      <div className={classes.wavy}>
        <span>L</span>
        <span>o</span>
        <span>a</span>
        <span>d</span>
        <span>i</span>
        <span>n</span>
        <span>i</span>
        <span>g</span>
        <span>.</span>
        <span>.</span>
        <span>.</span>
      </div>
    </div>
  )
}

export default Preloader
