import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStylesPreloader = makeStyles(theme => ({
  root: {
    overflowY: 'hidden !important',
    overflowX: 'hidden !important',
    minHeight: '98vh',
    backgroundColor: 'black',
  }
}))

const Preloader = () => {
  const classes = useStylesPreloader()

  return(
    <div className={classes.root}>Preloader running ...</div>
  )
}

export default Preloader
