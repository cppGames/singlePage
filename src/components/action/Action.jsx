// text lets work together with funny background 

import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Box,
  Typography,
} from '@material-ui/core'

import ActionButton from './ActionButton'


const useStylesLets = makeStyles(theme => ({
  root: {
    position: 'relative',
    zIndex: 1,
    // paddingTop: theme.spacing(16),
    paddingBottom: theme.spacing(16),
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
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  }
}))

const Action = (props) => {
  const classes = useStylesLets()

  const onClick = () => {
    window.location.href = `mailto:tikhomirov.artem.i@gmail.com`;
  }

  return (
    <div className={ classes.root }>
      <ActionButton onClick={ onClick }>
        <Typography className={ classes.text } variant='h1' component='h1' align='center'>
          <Box fontWeight="fontWeightBold">
            Let’s work together &#x270c;
          </Box>
        </Typography>
      </ActionButton>
    </div>
  )
} 

export default Action
