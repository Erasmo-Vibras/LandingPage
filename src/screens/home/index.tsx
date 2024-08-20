
import { Flex } from '@components/flex'
// import { Footer } from '@components/footer'
// import { Header } from '@components/header'
import { theme } from '@styles/theme'
import { LogoImage } from './styles'
import { Paragraph } from '@components/paragraph'
import { Footer } from '@components/footer'

export default function Home() {
  return (
    <Flex 
      flex={1}
      direction='column'
      bgColor={theme.colors.primary}
    >
      <Flex height ='50%' justify='center'>
        <LogoImage/>
      </Flex>
      <Flex direction='column' align='center' height='50%'>
        <Paragraph color={theme.colors.white}>
          Vibras Tecnologia
        </Paragraph>
        <Paragraph color={theme.colors.white}>
          Tecnologia voltada a equidade social
        </Paragraph>
      <Footer/>
      </Flex>
    </Flex>
  )
}