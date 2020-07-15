import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-scroll'

const useStylesNavbar = makeStyles(theme => ({
  root: {
    position: 'fixed',
    top: 0,
    width: '100%',
    fontSize: '2em',
    paddingRight: 20,
    display: 'inline',
  },
  link: {
    '&:hover': {
      borderBottom: '1px solid #333'
    },
    '&.active-link': {
      backgroundColor: 'gold'
    }
  }
}))

const Navbar = () => {
  const classes = useStylesNavbar()

  return(
    <div className = { classes.root }>
      <Link
        activeClass='active-link'
        to='landing'
        spy={true}
        smooth={true}
        offset={0}
        duration= {500}
        className = { classes.link }
      >
        Landing
      </Link>
      <Link
        activeClass='active-link'
        to='bio'
        spy={true}
        smooth={true}
        offset={0}
        duration= {500}
        className = { classes.link }
      >
        Bio
      </Link>
      <Link
        activeClass='active-link'
        to='portfolio'
        spy={true}
        smooth={true}
        offset={-70}
        duration= {500}
        className = { classes.link }
      >
        Portfolio
      </Link>
    </div>
  )
}

export default Navbar
