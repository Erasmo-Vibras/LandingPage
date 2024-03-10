import {styledTheme} from '@styles/theme'
import {ThemeProvider} from 'styled-components'

type ThemeContextProps = {
  children: React.ReactNode
}

export const ThemeContext = ({children}: ThemeContextProps) => {
  return <ThemeProvider theme={styledTheme}>{children}</ThemeProvider>
}