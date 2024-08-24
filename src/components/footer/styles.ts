import styled from 'styled-components'

export const FooterStyle = styled.footer`
  bottom: 0;
  width: 100%;
  height: 5%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;

  @media (max-width: 570px) {
    display: none;
  }
`