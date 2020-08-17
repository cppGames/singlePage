import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-scroll'
import { 
  Grid,
} from '@material-ui/core'

const useStylesNavbar = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    position: 'fixed',
    padding: 16,
    zIndex: 5,
  },
  logo: {
    border: '1px solid rgb(154, 157, 203)',
  },
  link: {
    '&:hover': {
      fontWeight: 'bold',
    },
    '&.active-link': {
      borderBottom: '1px solid #333',
    }
  }
}))

const Navbar = () => {
  const classes = useStylesNavbar()

  function refreshPage() {
    window.location.reload(false)
  }

  return(
    <Grid 
      container
      direction='row'
      alignItems='center'
      className={classes.root}
    >
      <Grid item >
        <div style={{height: '100px', width: '100px', backgroundColor: 'green'}}>
          <a onClick={ refreshPage } className={ [classes.logo, classes.link].join(' ') }>
            LOGO
          </a>
        </div>
      </Grid>
      <Grid 
        item container
        xs={12} sm
        spacing={2}
        direction='row'
        justify='center'>
        <Grid item>
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
        </Grid>
        <Grid item>
          <Link
            activeClass='active-link'
            to='portfolio'
            spy={true}
            smooth={true}
            offset={0}
            duration= {500}
            className = { classes.link }
          >
            Portfolio
          </Link>
        </Grid>
        <Grid item>
          <Link
            activeClass='active-link'
            to='bio'
            spy={true}
            smooth={true}
            offset={0}
            duration= {500}
            className = { classes.link }
          >
            About
          </Link>
        </Grid>
        <Grid item>
          <Link
            activeClass='active-link'
            to='email'
            spy={true}
            smooth={true}
            offset={0}
            duration= {500}
            className = { classes.link }
          >
            Email
          </Link>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Navbar
