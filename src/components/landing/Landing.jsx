import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import VideoSource from '../../../resource/video/work.mp4'
import Cover from '../../Cover'

const useStylesLanding = makeStyles(theme => ({
  root: {
    ... theme.page,
    backgroundColor: 'red',
  },
  banner: {
    width: '100%',
    height: '100vh',
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 0,
  },
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    objectFit: 'cover',
    width: '100%',
    height: '100%',
    pointerEvents: 'none',
  }
}))

const Landing = () => {
  const classes = useStylesLanding()

  return(
    <div className = { classes.root } id='landing'>
      <div className = { classes.banner }>
        <video autoPlay loop muted className={classes.video}>
          <source src={VideoSource} type='video/mp4'></source>
          Your browser doesn`t support video tag
        </video>
      </div>
    </div>
  )
}

export default Landing
