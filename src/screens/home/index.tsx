
import { Flex } from '@components/flex'
// import { Footer } from '@components/footer'
// import { Header } from '@components/header'
import { theme } from '@styles/theme'
import { LogoImage } from './styles'
import { Paragraph } from '@components/paragraph'
import { Footer } from '@components/footer'
import { InstagramIcon } from '@assets/icons/InstagramIcon'
import { FacebookIcon } from '@assets/icons/FacebookIcon'
import LogoBrancaFundoTransparente from '@assets/images/LogoBrancaFundoTransparente.png'

export default function Home() {
  return (
    <Flex
      flex={1}
      direction='column'
      bgColor={theme.colors.primary}
      align='center'
    >
      <Flex height='50%' justify='center'>
        <LogoImage src={LogoBrancaFundoTransparente}/>
      </Flex>
      <Flex direction='column' align='center'>
        <Paragraph color={theme.colors.white} size={theme.fontSize.h5}>
          Tecnologia voltada à equidade social
        </Paragraph>
        <br />
        <br />
        <br />
        <br />
        <Paragraph color={theme.colors.white} size={theme.fontSize.h5}>
          Acompanhe nossas redes sociais para mais novidades
        </Paragraph>
      </Flex>
      <br />
      <br />
      <Flex width='30%' justify='space-evenly'>
        <a href="https://instagram.com/vibrastecnologia">
          <InstagramIcon />
        </a>
        <a href="https://www.facebook.com/100095027293080">
          <FacebookIcon />
        </a>
      </Flex>
      <Footer />
    </Flex>
  )
}