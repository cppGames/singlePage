import React from 'react';
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles';
import { 
  Card,
  Typography,
 } from '@material-ui/core/'



const useStyles = makeStyles({
  card: {
    height: 830,
    overflow: 'hidden',
    display: 'flex',
    position:'relative',
    transition: '0.5s ease-in-out',
    '&:hover': {
      // transform: 'translateY(20px)'
    },
    '&:before': {
      // important path for before in JSS
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      display: 'block',
      width: '100%',
      height: '100%',
      background: 'linear-gradient(to bottom, rgba(255,255,255,0.5), rgba(242,242,242,1))',
      zIndex: 2,
      transition: '0.5s all',
      opacity: 0
    },
    '&:hover:before': {
      opacity: 1
    },
    '& .info': {
      position: 'relative',
      zIndex: 3,
      opacity: 1,
      transform: 'translateY(80%)',
      transition: '0.5s all'
    },
    '&:hover .info': {
      opacity: 1,
      transform: 'translateY(0px)'
    },
    '& img': {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      position: 'absolute',
      top:0,
      left: 0
    },
    '& .info h2': {
      marginTop: '30px',
      marginLeft: '16px',
      marginGirght: '16px',
    },
    '& .info p': {
      letterSpacing: '1px',
      fontSize: '15px',
      marginTop: '16px',
      marginBottom: '20px',
      marginLeft: '16px',
      marginGirght: '16px',
    }
  },
  
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function PortfolioEffect(props) {
  const { num, name, descr, img } = props
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.card}>
      <img src={ img } alt='' />
      
      <div className={'info'} classes='test'>
        <Typography variant="h5" component="h2">
          { name }
        </Typography>
        <Typography variant="body2" component="p" className={classes.face2}>
            { descr }
        </Typography>
      </div>
    </Card>
  );
}

PortfolioEffect.propTypes = {
  num: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  descr: PropTypes.string.isRequired,
  img: PropTypes.string
}

PortfolioEffect.defaultProps = {
  num: 0,
  name: 'project name',
  descr: 'project description',
  img: '',
}