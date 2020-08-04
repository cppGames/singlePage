import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import { 
  Card,
  Typography,
  CardContent,
 } from '@material-ui/core'

const useStylesPortfolioSection = makeStyles(theme => ({
  root: {

  },
  portFolioSection: {
  }
}))

const PortfolioSection = (props) => {
  const { num, name, descr } = props
  const classes = useStylesPortfolioSection()
  return(
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
          { num }. {name} 
        </Typography>
        <Typography variant="body2" component="p">
          {descr}
        </Typography>
      </CardContent>
    </Card>
  )
}

PortfolioSection.propTypes = {
  num: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  descr: PropTypes.string.isRequired,
}

PortfolioSection.defaultProps = {
  num: 0,
  name: 'project name',
  descr: 'project description'
}

export default PortfolioSection
