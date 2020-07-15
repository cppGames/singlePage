import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStylesBio = makeStyles(theme => ({
  root: {
    ... theme.page,
    backgroundColor: 'orange'
  }
}))

const Bio = () => {
  const classes = useStylesBio()

  return(
    <div className = { classes.root } id='bio'>Bio page</div>
  )
}

export default Bio
