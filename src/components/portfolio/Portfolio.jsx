import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { 
  Box,
  Typography
} from '@material-ui/core'

const useStylesPortfolio = makeStyles(theme => ({
  root: {
    ... theme.content,
  }
}))

const Portfolio = () => {
  const classes = useStylesPortfolio()

  return(
    <div className={ classes.root }>
      <Typography variant="h1" component="h1" gutterBottom>
          Portfolio page 
      </Typography>
    </div>
  )
}

export default Portfolio
