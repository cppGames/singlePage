import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Button } from '@material-ui/core'

const ActionButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText('#000'),
    backgroundColor: 'red',
    width: '100%',
    '&:hover': {
      backgroundColor: 'purple',
    },
  },
}))(Button);

export default ActionButton
