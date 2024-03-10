import { Logo } from "@assets/icons/Logo"
import { HeaderContainer, HeaderLogoContainer } from "./styles"

export const Header = () => {
  return(
    <HeaderContainer>
      <HeaderLogoContainer>
        <Logo/>
      </HeaderLogoContainer>
    </HeaderContainer>
  )
}