import React from 'react'
import styled from 'styled-components'

function Login() {
  return (
    <Container>
      <CTA>
        <CTALogoOne src="/images/cta-logo-one.svg" />
        <SignUp>Get All There</SignUp>
        <Description>
          Get Premier Access to Raya and the Last Dragon for an additional fee with a Disney+ subscription. As of
          03/26/21, the price of Disney+ and The Disney Bundle will increase by $1.
        </Description>
        <CTALogoTwo src="/images/cta-logo-two.png" />
      </CTA>
    </Container>
  )
}

export default Login

const Container = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    background-image: url('/images/login-background.jpg');
    background-position: top;
    backgournd-size: conver;
    background-repeat: no-repeat;
    opacity: 0.7;
  }
`

const CTA = styled.div`
  max-width: 650px;
  width: 90%;
  padding: 80px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const CTALogoOne = styled.img`
  width: 100%;
`

const SignUp = styled.a`
  width: 100%;
  background-color: #0063e5;
  font-weight: bold;
  font-size: 20px;
  cursor: pointer;
  padding: 20px 0;
  text-align: center;
  text-transform: uppercase;
  border-radius: 5px;
  letter-spacing: 1.5px;
  margin: 8px 0 12px;
  transition: all 250ms;

  &:hover {
    background-color: #0483ee;
  }
`

const Description = styled.p`
  font-size: 10px;
  letter-spacing: 1.5px;
  text-align: center;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.8);
`

const CTALogoTwo = styled.img`
  width: 100%;
`
