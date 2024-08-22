
import styled from 'styled-components'
import { Flex } from '@components/flex'
import LogoBrancaFundoTransparente from '@assets/images/LogoBrancaFundoTransparente.png'

export const LogoImage = styled(Flex)`
  width: 100%;
  height: 100%;
  
  background-repeat: no-repeat;
  background-image: url(${LogoBrancaFundoTransparente});

  // @media (max-width: 1024px) {
  //   display: none;
  // }
`