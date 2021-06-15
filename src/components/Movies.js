import React from 'react'
import styled from 'styled-components'

function Movies() {
  return (
    <Container>
      <h4>Recommended for You</h4>
      <Content>
        <Wrap>
          <img src="https://thedirect.s3.amazonaws.com/media/article_full/lokspos.jpg" />
        </Wrap>
        <Wrap>
          <img src="https://thedirect.s3.amazonaws.com/media/article_full/lokspos.jpg" />
        </Wrap>
        <Wrap>
          <img src="https://thedirect.s3.amazonaws.com/media/article_full/lokspos.jpg" />
        </Wrap>
        <Wrap>
          <img src="https://thedirect.s3.amazonaws.com/media/article_full/lokspos.jpg" />
        </Wrap>
        <Wrap>
          <img src="https://thedirect.s3.amazonaws.com/media/article_full/lokspos.jpg" />
        </Wrap>
        <Wrap>
          <img src="https://thedirect.s3.amazonaws.com/media/article_full/lokspos.jpg" />
        </Wrap>
        <Wrap>
          <img src="https://thedirect.s3.amazonaws.com/media/article_full/lokspos.jpg" />
        </Wrap>
        <Wrap>
          <img src="https://thedirect.s3.amazonaws.com/media/article_full/lokspos.jpg" />
        </Wrap>
      </Content>
    </Container>
  )
}

export default Movies

const Container = styled.div``

const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
`

const Wrap = styled.div`
  border-radius: 10px;
  overflow: hidden;
  border: 3px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 20px 30px -10px rgba(0, 0, 0, 0.5);
  transition: all 250ms;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    transform: scale(1.05);
    border-color: rgba(255, 255, 255, 0.9);
  }
`
