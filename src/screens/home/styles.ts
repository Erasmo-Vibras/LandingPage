
import { Flex } from '@components/flex'
import { Paragraph } from '@components/paragraph'
import { theme } from '@styles/theme'
import styled from 'styled-components'

export const LogoImage = styled.img`
  object-fit: contain;
`

export const SocialMediaText = styled(Paragraph)`
  color: ${theme.colors.white}; 
  font-size: ${theme.fontSize.h4};
  
  @media (max-width: 585px) {
      display: none;
    }
`

export const SocialMediaIconsContainer = styled(Flex)`
  width: 30%;
  height: 15%;
  
  justify-content: space-evenly;

  @media (max-width: 570px) {
    width: 50%;
  }
`