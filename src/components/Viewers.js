import React from 'react'
import styled from 'styled-components'
import ViewersCard from './ViewersCard'

function Viewers() {
  const video = (name) => {
    return `/videos/${name}.mp4`
  }
  const logo = (name) => {
    return `/images/viewers-${name}.png`
  }

  return (
    <Container id="viewers-container">
      <ViewersCard logo={logo('disney')} video={video('disney')} />
      <ViewersCard logo={logo('pixar')} video={video('pixar')} />
      <ViewersCard logo={logo('marvel')} video={video('marvel')} />
      <ViewersCard logo={logo('starwars')} video={video('starwars')} />
      <ViewersCard logo={logo('national')} video={video('national')} />
    </Container>
  )
}

export default Viewers

const Container = styled.div`
  margin-top: 30px;
  padding: 30px 0;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(5, minmax(0, 1fr));
`
