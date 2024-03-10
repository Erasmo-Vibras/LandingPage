import { ReactElement } from 'react'

export type ParagraphProps = {
  children?: string | string[] | number | number[]
  textTransform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase' | 'full-width' | 'full-size-kana'
  component?: ReactElement<any, any>
  color?: string
  family?: string
  size?: string
  hoverColor?: string
  alignSelf?: string
  justifySelf?: string
  textAlign?: string
  marginTop?: string
  marginRight?: string
  marginBottom?: string
  marginLeft?: string
  margin?: string
  weight?: number
  transition?: number
}