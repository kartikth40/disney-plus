import React from 'react'
import styled from 'styled-components'

function ViewersCard({ logo, video }) {
  const handlemouseEnter = (e) => {
    e.currentTarget.play()
  }
  const handlemouseLeave = (e) => {
    e.target.pause()
    e.target.currentTime = 0
  }
  return (
    <Wrap>
      <img src={logo} alt="logo" />
      <video loop muted onMouseEnter={handlemouseEnter} onMouseLeave={handlemouseLeave}>
        <source src={video} type="video/mp4" />
      </video>
    </Wrap>
  )
}

export default ViewersCard

const Wrap = styled.div`
  border: 3px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  box-shadow: 0 30px 40px -10px rgba(0, 0, 0, 0.7);
  transition: all 250ms;
  position: relative;
  overflow: hidden;
  cursor: pointer;

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    pointer-events: none;
  }

  video {
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    object-fit: cover;
    left: 0;
    top: 0;
    opacity: 0;
  }

  &:hover {
    transform: scale(1.05);
    border-color: rgba(255, 255, 255, 0.9);
    box-shadow: 0 40px 40px -10px rgba(0, 0, 0, 0.7);
    & video {
      transition: 500ms all;
      opacity: 1;
    }
  }
`
