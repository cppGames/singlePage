import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStylesPortfolio = makeStyles(theme => ({
  root: {
    ... theme.page,
    backgroundColor: 'green'
  }
}))

const Portfolio = () => {
  const classes = useStylesPortfolio()

  return(
    <div className = { classes.root } id='portfolio'>Portfolio world</div>
  )
}

export default Portfolio
