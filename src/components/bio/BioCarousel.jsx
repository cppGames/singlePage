import React , { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import 'slick-carousel/slick/slick.css'
// import 'slick-carousel/slick/slick-theme.css'
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
  rightArrow: {right: '0px',},
  leftArrow: {left: '0px',},
  carouselContainer: {
    maxWidth: '100vw',
    width: '100%',
    overflow: 'hidden'
  }
}))

const photos = [{
  name: 'Photo 1',
  url: 'https://images.unsplash.com/photo-1597003509999-8575eecc6846?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
},{
  name: 'Photo 2',
  url: 'https://images.unsplash.com/photo-1597011769841-bcb58aae661b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
},{
  name: 'Photo 3',
  url: 'https://images.unsplash.com/photo-1596930238982-b4e2795f0130?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
},]


function SampleNextArrow(props) {
  const classes = useStyles()
  const { className, style, onClick } = props
  return (
    <ArrowForwardIosRoundedIcon 
      fontSize='large'
      onClick={onClick}
      className={`${classes.sliderArrow} ${classes.rightArrow}`}
    />
  )
}

function SampleDots(props) {
  const classes = useStyles()
  const { dots } = props
  return (
      <div
        style={{
          backgroundColor: "#ddd",
          borderRadius: "10px",
          padding: "10px"
        }}
      >
        <ul style={{ margin: "0px", color: 'brown' }}> {dots} </ul>
      </div>
  )
}

function SamplePrevArrow(props) {
  const classes = useStyles()
  const { className, style, onClick } = props
  return (
    <ArrowBackIosRoundedIcon 
      fontSize='large'
      onClick={onClick}
      className={`${classes.sliderArrow} ${classes.leftArrow}`}
    />
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