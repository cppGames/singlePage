import React , { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded'
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded'

const useStyles = makeStyles(theme => ({
  sliderArrow: {
    zIndex: 1,
    position: 'absolute',
    top: '50%',
    cursor: 'pointer',
  },
  arrowBackground: {
    backgroundColor: "#ffffffbf",
    borderRadius: "50px",
    width: '35px',
    height: '35px',
    padding: '5px',
  },
  rightArrow: {right: '24px',},
  leftArrow: {left: '24px',},
  carouselContainer: {
    // maxWidth: '100vw',
    width: '100%',
    overflow: 'hidden',
    maxWidth:'1400px'
  }
}))

const photos = [{
  name: 'Photo 1',
  url: 'https://images.pexels.com/photos/1154739/pexels-photo-1154739.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
},{
  name: 'Photo 2',
  url: 'https://images.unsplash.com/photo-1597011769841-bcb58aae661b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
},{
  name: 'Photo 3',
  url: 'https://images.pexels.com/photos/3374066/pexels-photo-3374066.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
},]


function SampleNextArrow(props) {
  const classes = useStyles()
  const { className, style, onClick } = props
  return (
    <div className={`
      ${classes.sliderArrow}
      ${classes.rightArrow}
      ${classes.arrowBackground}
    `}>
      <ArrowForwardIosRoundedIcon 
        onClick={onClick}
      />
    </div>
  )
}

function SampleDots(props) {
  const classes = useStyles()
  const { dots } = props
  return (
    <div style={{ textAlign: 'center' }}>
      <ul>
      { dots.map((item, index) => (
          <li key={index} style={{display: 'inline'}}>
            {item.props.children}
          </li>
        ))
      }
      </ul>
    </div>
  )
}

function SamplePrevArrow(props) {
  const classes = useStyles()
  const { className, style, onClick } = props
  return (
    <div className={`
          ${classes.sliderArrow}
          ${classes.leftArrow}
          ${classes.arrowBackground}
    `}>
      <ArrowBackIosRoundedIcon 
        onClick={onClick}
      />
    </div>
  )
}

const BioCarousel = () => {
  const classes = useStyles()
  const [sliderSettings, setSliderSettings] = useState({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    pauseOnHover: true,
    appendDots: dots => (<SampleDots dots={dots}/>),
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  })
  
  return (
      <div className={classes.carouselContainer}>
        <Slider {...sliderSettings}>
          { photos.map((photo) => (
            <div key={photo.name}>
              <img width='100%' src={photo.url} />
            </div>
          ))}
      </Slider>
    </div>
  )
}

export default BioCarousel
