import styled from 'styled-components'
import { Props } from '.'

export const HeaderBar = styled.header`
  width: 100%;
`

export const Image = styled.div<Props>`
  max-width: 2031.81px;
  width: 100%;
  max-height: ${(props) => (props.background === 'dark' ? '186px' : '360px')};
  height: 100%;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 40px 171px;
  }

  .imageLink {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 125px;
    height: 57.5px;
  }
`

export const Text = styled.h2`
  width: 539px;
  height: 84px;
  font-size: 36px;
  font-weight: 900;
  line-height: 42.19px;
  text-align: center;
  margin-top: 138.5px;
`

export const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`

export const Logo = styled(HeaderContainer)`
  font-size: 18px;
  font-weight: 900;
  justify-content: left;
  padding-top: none;
`

export const Carrinho = styled(HeaderContainer)`
  font-size: 18px;
  font-weight: 900;
  justify-content: right;
  padding-top: none;
`
