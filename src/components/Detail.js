import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import db from '../firebase'

function Detail() {
  const { id } = useParams()
  const [movie, setMovie] = useState()

  useEffect(() => {
    db.collection('movies')
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setMovie(doc.data())
        } else {
          console.log('not found')
        }
      })
  }, [id])

  if (!movie) return <Container>no movie details found!</Container>
  return (
    <Container>
      <Background>
        <img src={movie.backgroundImg} alt={movie.title + ' background'} />
      </Background>
      <ImageTitle>
        <img src={movie.titleImg} alt={movie.title + ' logo'} />
      </ImageTitle>

      <Controls>
        <PlayButton>
          <img src="/images/play-icon-black.png" alt="Movie play button" />
          <span>Play</span>
        </PlayButton>

        <TrailerButton>
          <img src="/images/play-icon-white.png" alt="Trailer play button" />
          <span>Trailer</span>
        </TrailerButton>

        <AddButton>
          <span>+</span>
        </AddButton>

        <GroupWatchButton>
          <img src="/images/group-icon.png" alt="Group Watch button" />
        </GroupWatchButton>
      </Controls>

      <SubTitle>{movie.subTitle}</SubTitle>

      <Description>{movie.description}</Description>
    </Container>
  )
}

export default Detail

const Container = styled.div`
  min-height: 100vh;
  padding: 70px 3.5vw 3.5vw;
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
  margin-top: 50px;

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
  max-width: 700px;
`
