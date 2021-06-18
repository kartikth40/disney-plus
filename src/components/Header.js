import React, { useEffect } from 'react'
import styled from 'styled-components'
import { auth, provider } from '../firebase'
import { selectUserName, selectUserPhoto, setSignOut, setUserLogin } from '../features/user/userSlice'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

function Header() {
  const dispatch = useDispatch()
  const history = useHistory()
  const userName = useSelector(selectUserName)
  const userPhoto = useSelector(selectUserPhoto)

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        dispatch(
          setUserLogin({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
          })
        )
        history.push('/')
      }
    })
  }, [])

  const signIn = () => {
    auth.signInWithPopup(provider).then(({ user }) => {
      dispatch(
        setUserLogin({
          name: user.displayName,
          email: user.email,
          photo: user.photoURL,
        })
      )
      history.push('/')
    })
  }

  const signOut = () => {
    auth.signOut().then(() => {
      dispatch(setSignOut())
      history.push('/login')
    })
  }

  return (
    <div>
      <Nav>
        <Logo src="/images/logo.svg" alt="Disney Logo" />
        {!userName ? (
          <LoginCotainer>
            <Login onClick={signIn}>Login</Login>
          </LoginCotainer>
        ) : (
          <>
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
            <UserImg onClick={signOut} src={userPhoto} alt="Profile pic" />
          </>
        )}
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

const LoginCotainer = styled.div`
  display: flex;
  flex-basis: 100%;
  justify-content: flex-end;
`

const Login = styled.button`
  outline: none;
  border: 2px white solid;
  background: transparent;
  color: white;
  padding: 8px 16px;
  border-radius: 4px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  transition: all 250ms;
  cursor: pointer;

  &:hover {
    background: white;
    color: black;
  }
`
