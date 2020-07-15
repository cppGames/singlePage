import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStylesLanding = makeStyles(theme => ({
  root: {
    ... theme.page,
    backgroundColor: 'red'
  }
}))

const Landing = () => {
  const classes = useStylesLanding()

  return(
    <div className = { classes.root } id='landing'>Landing world</div>
  )
}

export default Landing
