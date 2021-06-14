import React from 'react'
import Slider from 'react-slick'
import styled from 'styled-components'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

function ImgSlider() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  }
  return (
    <Carousel {...settings}>
      <Wrap>
        <img src="/images/slider-badging.jpg" alt="" />
      </Wrap>
      <Wrap>
        <img src="/images/slider-badag.jpg" alt="" />
      </Wrap>
      <Wrap>
        <img src="/images/slider-scale.jpg" alt="" />
      </Wrap>
    </Carousel>
  )
}

export default ImgSlider

const Carousel = styled(Slider)`
  padding-top: 20px;

  ul li button {
    &:before {
      font-size: 10px;
      color: white;
    }
  }

  li.slick-active button::before {
    color: white;
  }

  button {
    z-index: 1;
    width: 32px;
    height: 100%;
  }

  .slick-list {
    overflow: visible;
  }
`

const Wrap = styled.div`
  outline: none;
  img {
    border: 4px solid transparent;
    width: 100%;
    height: 100%;
    border-radius: 4px;
    box-shadow: 0 26px 30px -10px rgba(0 0 0 / 0.69);

    &:hover {
      transition: 0.3s;
      border: 4px solid rgba(250, 250, 250, 0.7);
    }
  }
`
