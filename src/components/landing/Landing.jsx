import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import VideoSource from '../../../resource/video/work.mp4'

const useStylesLanding = makeStyles(theme => ({
  root: {
    ... theme.page,
    backgroundColor: 'red'
  },
  video: {
    minHeight: '80vh',
    backgroundPosition: 'top',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    zIndex: 0
  }
}))

const Landing = () => {
  const classes = useStylesLanding()

  return(
    <div className = { classes.root } id='landing'>
      <video autoPlay='autoplay' loop='loop' muted className={classes.video}>
        <source src={VideoSource} type='video/mp4'></source>
        Your browser doesn`t support video tag
      </video>
    </div>
  )
}

export default Landing
