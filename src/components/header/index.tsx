import { Logo } from "@assets/icons/Logo"
import { HeaderContainer, HeaderLogoContainer, LogoImageHeader } from "./styles"
import LogoBrancaFundoTransparente from '@assets/images/LogoBrancaFundoTransparente.png'

export const Header = () => {
  return(
    <HeaderContainer>
      <HeaderLogoContainer>
        {/* <Logo/> */}
        <LogoImageHeader src={LogoBrancaFundoTransparente} />
      </HeaderLogoContainer>
    </HeaderContainer>
  )
}