import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Box,
  Typography,
} from '@material-ui/core'

const useStylesBio = makeStyles(theme => ({
  root: {
    ... theme.content,
  }
}))

const Bio = () => {
  const classes = useStylesBio()

  return(
    <div className={ classes.root }>
      <Typography variant="h1" component="h1" gutterBottom>
        <Box color='#ffff'>
          Artem Tikhomirov page 
        </Box>
      </Typography>
    </div>
  )
}

export default Bio
