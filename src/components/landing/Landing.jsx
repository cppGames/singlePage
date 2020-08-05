import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Box,
  Grid,
  Typography
} from '@material-ui/core'
import PhotoImage from '../../../resource/img/photoImage.png'

const useStylesLanding = makeStyles(theme => ({
  root: { ... theme.content},
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '1000px',
  },
}))


const Landing = () => {
  const classes = useStylesLanding()

  return(
    <Grid
      className={ classes.root }
      container
      direction='row-reverse'
    >
      <Grid container item  alignItems='flex-end' justify='flex-end' lg={6} sm={12}>
        <Grid item>
          <img className={classes.img} alt='complex' src={PhotoImage} />
        </Grid>
      </Grid>
      <Grid container item justify='center' direction='column' lg={6} sm={12}>
        <Grid item>
          <Typography variant='h1' component='h1' gutterBottom>
            <Box color='grey'>
              I`m A
            </Box>
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant='body' component='p'>
            Web Developer, Visual designer, Photographer
            located in Russia, looking for working around the globeocated in Russia, looking for working around the globe
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Landing
