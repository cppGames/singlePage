import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { 
  Box,
  Typography
} from '@material-ui/core'

const useStylesLanding = makeStyles(theme => ({
  root: { ... theme.content},
  
}))


const Landing = () => {
  const classes = useStylesLanding()

  return(
    <div className={ classes.root }>
      <Typography variant="h1" component="h1" gutterBottom>
        <Box color='grey'>
          Hi, I`m Artem
        </Box>
      </Typography>
    </div>
  )
}

export default Landing
