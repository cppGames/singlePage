import React from 'react'
import PropTypes from 'prop-types'

const PortfolioSection = (props) => {
  const { num } = props
  return(
    <div style={{backgroundColor:'red'}}>
      Hello { num }
    </div>
  )
}

PortfolioSection.propTypes = {
  num: PropTypes.number,
}

PortfolioSection.defaultProps = {
  num: 0,
}

export default PortfolioSection
