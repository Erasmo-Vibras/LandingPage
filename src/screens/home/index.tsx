import { theme } from '@styles/theme'
import { InstagramIcon } from '@assets/icons/InstagramIcon'
import { FacebookIcon } from '@assets/icons/FacebookIcon'
import LogoBrancaFundoTransparente from '@assets/images/LogoBrancaFundoTransparente.png'
import { Flex } from '@components/flex'
import { Header } from '@components/header'
import { Footer } from '@components/footer'
import { Paragraph } from '@components/paragraph'
import { LogoImage, SocialMediaIconsContainer, SocialMediaText } from './styles'

export default function Home() {
  return (
    <Flex
      flex={1}
      direction='column'
      bgColor={theme.colors.primary}
      align='center'
    >
      <Header />

      <Flex paddingLeft='4%' height='50%' justify='center'>
        <LogoImage src={LogoBrancaFundoTransparente} />
      </Flex>

      <Flex direction='column' height='30%' >
        <Paragraph color={theme.colors.white} size={theme.fontSize.h4}>
          Tecnologia voltada à equidade social
        </Paragraph>

        <SocialMediaText>
          Acompanhe nossas redes sociais para mais novidades
        </SocialMediaText>
      </Flex>
      
      <SocialMediaIconsContainer>
        <a href="https://instagram.com/vibrastecnologia" target='blank'>
          <InstagramIcon />
        </a>
        <a href="https://www.facebook.com/100095027293080" target='blank'>
          <FacebookIcon />
        </a>
      </SocialMediaIconsContainer>

      <Footer />
    </Flex>
  )
}