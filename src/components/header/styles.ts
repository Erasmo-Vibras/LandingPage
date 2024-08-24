import styled from 'styled-components'

export const HeaderContainer = styled.header`
  top: 0;
  width: 100%;
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;

  @media (max-width: 570px) {
    display: none;
  }
`

export const HeaderLogoContainer = styled.button`
  width: 5rem;
  height: 5rem;
  margin-top: 0.5rem;
  margin-left: 5rem;

  background-color: transparent;
  cursor: pointer;
  border: none;
`