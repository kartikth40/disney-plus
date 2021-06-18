import React, { useEffect } from 'react'
import styled from 'styled-components'
import ImgSlider from './ImgSlider'
import Viewers from './Viewers'
import Movies from './Movies'
import db from '../firebase'

import { useDispatch } from 'react-redux'
import { setMovies } from '../features/movie/movieSlice'

function Home() {
  const dispatch = useDispatch()

  useEffect(() => {
    db.collection('movies').onSnapshot((snap) => {
      let tempMovies = snap.docs.map((doc) => {
        return { id: doc.id, ...doc.data() }
      })
      dispatch(setMovies(tempMovies))
    })
  }, [dispatch])

  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Movies />
    </Container>
  )
}

export default Home

const Container = styled.main`
  min-height: calc(100vh - 70px);
  padding: 0 3.5vw 3.5vw;
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
