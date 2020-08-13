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
      style={{
        paddingTop: '450px',
        paddingBottom: '250px'
      }}
      container
      direction='column'
      justify="center"
      alignItems="center"
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
        <Typography variant='h3' align='center' color='primary'>
          <Box fontWeight="fontWeightMedium">
            Over 5 years of experience
          </Box>
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant='h5' 
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
        spacing={8}
      >
        <Grid item xs={6}>
          <Typography 
            variant='h5'
            component='h5'
            gutterBottom
            align='center'
            color='primary'
          >
            <Box fontWeight="fontWeightLight">
              DESIGN SERVICES
            </Box>
          </Typography>
          <Typography variant='h5' 
            align='center' color='secondary'>
            <Box fontWeight={500}>
              { services.join(' / ') }
            </Box> 
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography 
            variant='h5'
            component='h5'
            gutterBottom
            align='center'
            color='primary'
          >
            <Box fontWeight="fontWeightLight">
              TOOLS I USE
            </Box>
          </Typography>
          <Typography variant='h5'
            align='center' color='secondary'>
              <Box fontWeight={500}>
              { tools.join(' / ') }
            </Box>
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Bio
