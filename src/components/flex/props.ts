import {ReactNode} from 'react'

export type FlexProps = FlexContainerProps & {
  children?: JSX.Element | JSX.Element[] | ReactNode
}

export type FlexContainerProps = {
  width?: string
  rowGap?: string
  columnGap?: string
  height?: string
  bgColor?: string
  borderRadius?: string
  flex?: number
  border?: string
  top?: string
  left?: string
  right?: string
  bottom?: string
  direction?: 'row' | 'column'
  align?: 'center' | 'stretch' | 'flex-start' | 'flex-end'
  justify?: 'center' | 'space-between' | 'space-around' | 'space-evenly' | 'flex-start' | 'flex-end'
  margin?: string
  marginTop?: string
  marginBottom?: string
  marginLeft?: string
  marginRight?: string
  padding?: string
  paddingTop?: string
  paddingBottom?: string
  paddingLeft?: string
  paddingRight?: string
}
