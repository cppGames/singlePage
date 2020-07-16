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
    <div className = { classes.root } id='portfolio'>
      Portfolio world
      1111111<br />
        111<br />
        11<br />
        111111111<br />
        11<br />
        1<br />
        1<br />
        1<br />
        1<br />
        1<br />
        1<br />
        1<br />
        1<br />
        1<br />
        11<br />
        1<br />
        1<br />
        1<br />
        11<br />
        1<br />
        1<br />
        1<br />
        1<br />
        11<br />
        111<br />
        11<br />
        1<br />
        1<br />
        1<br />
        111111111<br />
    </div>
  )
}

export default Portfolio
