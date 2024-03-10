import styled from 'styled-components'
import {ParagraphProps} from './props'

export const ParagraphStyle = styled.p<ParagraphProps>`
  ${(props) => props.color && `color: ${props.color};`};
  ${(props) => props.weight && `font-weight: ${props.weight};`};    
  ${(props) => props.size && `font-size: ${props.size};`};
  ${(props) => props.alignSelf && `align-self: ${props.alignSelf}`};
  ${(props) => props.justifySelf && `justify-self: ${props.justifySelf}`};
  ${(props) => props.textAlign && `text-align: ${props.textAlign}`};
  ${(props) => props.margin && `margin: ${props.margin}`};
  ${(props) => props.marginLeft && `margin-left: ${props.marginLeft}`};
  ${(props) => props.marginRight && `margin-right: ${props.marginRight}`};
  ${(props) => props.marginTop && `margin-top: ${props.marginTop}`};
  ${(props) => props.marginBottom && `margin-bottom: ${props.marginBottom}`};
  ${(props) => props.family && `font-family: ${props.family}`};
  ${(props) => props.transition && `transition: ${props.transition}`};
  ${(props) => props.textTransform && `text-transform: ${props.textTransform}`};
  :hover {
    ${(props) => props.hoverColor && `color: ${props.hoverColor}`};
  }
`