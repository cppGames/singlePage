// text lets work together with funny background 

import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Box,
  Grid,
  Paper,
  Typography,
} from '@material-ui/core'

const useStylesLets = makeStyles(theme => ({
  root: {
    position: 'relative',
    zIndex: 1,
    // paddingTop: theme.spacing(16),
    // paddingBottom: theme.spacing(16),
  },
  paper: {
    width: '100%',
    height: theme.spacing(32),
    borderRadius: 0,
    backgroundColor: 'azure',
    '&:hover': {
      backgroundColor: 'green',
    }
  },
  text: {
    paddingTop: theme.spacing(8),
  }
}))

const Lets = (props) => {
  const classes = useStylesLets()

  return (
    <div className={ classes.root }>
      <Paper className={ classes.paper } elevation={0}>
        <Typography className={ classes.text } variant='h1' component='h1' align='center'>
          <Box fontWeight="fontWeightBold">
          L &#x270c;
          {/* Let’s work together &#x270c; */}
          </Box>
        </Typography>
      </Paper>
    </div>
  )
} 

export default Lets
