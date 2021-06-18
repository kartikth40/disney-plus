import React from 'react'
import styled from 'styled-components'

function Header() {
  return (
    <div>
      <Nav>
        <Logo src="/images/logo.svg" alt="Disney Logo" />
        <NavMenu>
          <button>
            <img src="/images/home-icon.svg" alt="Home icon" />
            <span>HOME</span>
          </button>
          <button>
            <img src="/images/search-icon.svg" alt="Search icon" />
            <span>SEARCH</span>
          </button>
          <button>
            <img src="/images/watchlist-icon.svg" alt="Watchlist icon" />
            <span>WATHLIST</span>
          </button>
          <button>
            <img src="/images/original-icon.svg" alt="Original icon" />
            <span>ORIGINAL</span>
          </button>
          <button>
            <img src="/images/movie-icon.svg" alt="Movie icon" />
            <span>MOVIES</span>
          </button>
          <button>
            <img src="/images/series-icon.svg" alt="Series icon" />
            <span>SERIES</span>
          </button>
        </NavMenu>
        <UserImg src="/images/pp-icon.svg" alt="Profile pic" />
      </Nav>
    </div>
  )
}

export default Header

const Nav = styled.nav`
  color: white;
  height: 70px;
  width: 100%;
  background-color: #090b13;
  position: fixed;
  top: 0;
  z-index: 100;
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

  button {
    background-color: transparent;
    color: white;
    outline: none;
    border: none;
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
