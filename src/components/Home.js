import React from 'react'
import styled from 'styled-components'
import ImgSlider from './ImgSlider'

function Home() {
  return (
    <Container>
      <ImgSlider />
    </Container>
  )
}

export default Home

const Container = styled.main`
  min-height: calc(100vh - 70px);
  padding: 0 3.5vw;
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    background: url('/images/home-background.png') center center / cover no-repeat fixed;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
`
