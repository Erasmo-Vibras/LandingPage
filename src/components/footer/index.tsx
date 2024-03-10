import { Paragraph } from '@components/paragraph'
import {FooterStyle} from './styles'
import { theme } from '@styles/theme'

export const Footer = () => {
  return (
    <FooterStyle>
      <Paragraph size={theme.fontSize.h6}>
        © 2024 Vibras Tecnologia LTDA -
        Campo Mourão - PR - Brasil -  CNPJ: 54.042.244/0001-86
      </Paragraph>
    </FooterStyle>
  )
}
