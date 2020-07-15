import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStylesLanding = makeStyles(theme => ({
  root: {
    ... theme.page,
    backgroundColor: 'orange'
  }
}))

const Bio = () => {
  const classes = useStylesLanding()

  return(
    <div className = { classes.root }>Bio page</div>
  )
}

export default Bio
