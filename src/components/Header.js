import React from 'react'
import styled from 'styled-components'

function Header() {
  return (
    <div>
      <Nav>
        <Logo src="/images/logo.svg" />
        <NavMenu></NavMenu>
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
  align-item: center;
  padding: 0 36px;
`
const Logo = styled.img`
  width: 80px;
`
const NavMenu = styled.div``
