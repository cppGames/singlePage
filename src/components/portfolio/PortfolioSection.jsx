import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import { 
  Box,
  Card,
  Typography,
  CardContent,
 } from '@material-ui/core'

const useStylesPortfolioSection = makeStyles(theme => ({
  root: {
    width: '670px',
    height: '350px'
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
        <Typography variant="h5" component="h5" style={{maxWidth: '290px'}}>
          <Box pt={3} pb={3}>
            {name} 
          </Box>
        </Typography>
        <Typography variant="body1" component="p">
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
