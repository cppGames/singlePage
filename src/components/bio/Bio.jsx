import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Box,
  Grid,
  Typography,
} from '@material-ui/core'
import BioCarousel from './BioCarousel'
import { about, services, tools } from './about'

const useStylesBio = makeStyles(theme => ({
  root: {
    ... theme.content,
  }
}))

const Bio = () => {
  const classes = useStylesBio()

  return (
    <Grid
      className={ classes.root }
      container
      direction='column'
      spacing={10}
    >
      <Grid item>
        <Typography
          variant='h6'
          component='h6'
          gutterBottom
          align='center'
          color='primary'
        >
          A FEW WORDS ABOUT ME
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant='body1'
          align='center' color='secondary'>
          { about }
        </Typography>
      </Grid>
      <Grid item>
        <BioCarousel />
      </Grid>
      <Grid 
        item
        container
        direction='row'
      >
        <Grid item xs={6}>
          <Typography 
            variant='h6'
            component='h6'
            gutterBottom
            align='center'
            color='primary'
          >
            DESIGN SERVICES
          </Typography>
          { services.map((service) => (
            <Typography variant='body1' key={ service }
            align='center' color='secondary'>
            { service }
          </Typography>
          ))}
        </Grid>
        <Grid item xs={6}>
          <Typography 
            variant='h6'
            component='h6'
            gutterBottom
            align='center'
            color='primary'
          >
            TOOLS I USE
          </Typography>
          { tools.map((tool) => (
            <Typography variant='body1' key={ tool }
              align='center' color='secondary'>
              { tool }
            </Typography>
          ))}
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Bio
