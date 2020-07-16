import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Grid,
  Slide,
  Typography
} from '@material-ui/core'

const useStylesBio = makeStyles(theme => ({
  root: {
    ... theme.page,
    backgroundColor: 'orange'
  }
}))

const Bio = () => {
  const classes = useStylesBio()

  return(
    <div className={ classes.root } id='bio' onFocus={console.log('focus')}  onScroll={console.log('onScroll')}>
      <Slide direction='up' in={ true } mountOnEnter unmountOnExit>
        <Typography variant='h1' component='h2' onMouseEnter={console.log('onMouseEnter')}>
          Bio page
        </Typography>
      </Slide>
    </div>
  )
}

export default Bio
