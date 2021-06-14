import React from 'react'
import styled from 'styled-components'

function Header() {
  return (
    <div>
      <Nav>
        <Logo src="/images/logo.svg" />
        <NavMenu>
          <a>
            <img src="/images/home-icon.svg" />
            <span>HOME</span>
          </a>
          <a>
            <img src="/images/search-icon.svg" />
            <span>SEARCH</span>
          </a>
          <a>
            <img src="/images/watchlist-icon.svg" />
            <span>WATHLIST</span>
          </a>
          <a>
            <img src="/images/original-icon.svg" />
            <span>ORIGINAL</span>
          </a>
          <a>
            <img src="/images/movie-icon.svg" />
            <span>MOVIES</span>
          </a>
          <a>
            <img src="/images/series-icon.svg" />
            <span>SERIES</span>
          </a>
        </NavMenu>
        <UserImg src="/images/pp-icon.svg" />
      </Nav>
    </div>
  )
}

export default Header

const Nav = styled.nav`
  color: white;
  height: 70px;
  background-color: #090b13;
  display: flex;
  align-items: center;
  padding: 0 36px;
  overflow: hidden;
`
const Logo = styled.img`
  width: 80px;
`
const NavMenu = styled.div`
  display: flex;
  flex-basis: 100%;
  margin-left: 25px;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;

    img {
      height: 20px;
    }

    span {
      font-size: 13px;
      letter-spacing: 1.4px;
      position: relative;

      &:after {
        content: '';
        height: 2px;
        background: white;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        transform-origin: left;
        transform: scaleX(0);
      }
    }
    &:hover {
      span:after {
        transition: 0.2s;
        transform: scaleX(1);
      }
    }
  }
`
const UserImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  padding: 2px;
  border: white 2px solid;
  cursor: pointer;
`
