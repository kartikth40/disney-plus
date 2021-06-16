import React from 'react'
import styled from 'styled-components'

function Detail() {
  return (
    <Container>
      <Background>
        <img
          src="https://lumiere-a.akamaihd.net/v1/images/bao-woman-with-dumpling_4bc6fd44.jpeg?region=0,0,1200,675"
          alt="detail page background image"
        />
      </Background>
      <ImageTitle>
        <img
          src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D7AEE1F05D10FC37C873176AAA26F777FC1B71E7A6563F36C6B1B497CAB1CEC2/scale?width=1440&aspectRatio=1.78"
          alt="bao logo"
        />
      </ImageTitle>

      <Controls>
        <PlayButton>
          <img src="/images/play-icon-black.png" />
          <span>Play</span>
        </PlayButton>

        <TrailerButton>
          <img src="/images/play-icon-white.png" />
          <span>Trailer</span>
        </TrailerButton>

        <AddButton>
          <span>+</span>
        </AddButton>

        <GroupWatchButton>
          <img src="/images/group-icon.png" />
        </GroupWatchButton>
      </Controls>

      <SubTitle>2018 • 7m • Family, Fantasy, Kids, Animation</SubTitle>

      <Description>
        An aging Chinese mom suffering from empty nest syndrome gets another chance at motherhood when one of her
        dumplings springs to life as a lively, giggly dumpling boy. Mom excitedly welcomes this new bundle of joy into
        her life, but Dumpling starts growing up fast, and Mom must come to the bittersweet revelation that nothing
        stays cute and small forever.
      </Description>
    </Container>
  )
}

export default Detail

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 3.5vw 3.5vw;
  position: relative;
`
const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  opacity: 0.8;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const ImageTitle = styled.div`
  height: 30vh;
  min-height: 170px;
  width: 35vw;
  min-width: 200px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`
const Controls = styled.div`
  display: flex;
  align-items: center;
`

const PlayButton = styled.button`
  border-radius: 4px;
  padding: 0 24px;
  margin-right: 22px;
  height: 56px;
  font-size: 15px;
  display: flex;
  align-items: center;
  border: none;
  background: white;
  letter-spacing: 1.8px;
  text-transform: uppercase;
  cursor: pointer;
  &:hover {
    background: rgba(200, 200, 200);
  }
`

const TrailerButton = styled(PlayButton)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid white;
  color: white;
  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`

const AddButton = styled.button`
  width: 44px;
  height: 44px;
  margin-right: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 2px solid white;
  background: rgba(0, 0, 0, 0.5);
  cursor: pointer;

  span {
    font-size: 30px;
    color: white;
  }
`

const GroupWatchButton = styled(AddButton)`
  background: rgba(0, 0, 0, 0.7);
`

const SubTitle = styled.div`
  color: rgba(255, 255, 255, 0.7);
  font-size: 15px;
  min-height: 20px;
  margin-top: 20px;
`

const Description = styled.div`
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.4;
  font-size: 20px;
  margin-top: 15px;
`
