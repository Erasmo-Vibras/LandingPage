import styled from 'styled-components'
import {FlexContainerProps} from './props'

export const FlexContainer = styled.div<FlexContainerProps>`
  display: flex;
  ${(props) => props.justify && `justify-content: ${props.justify}`};
  ${(props) => props.align && `align-items: ${props.align}`};
  ${(props) => props.rowGap && `row-gap: ${props.rowGap}`};
  ${(props) => props.columnGap && `column-gap: ${props.columnGap}`};
  ${(props) => props.direction && `flex-direction: ${props.direction}`};
  ${(props) => props.width && `width: ${props.width}`};
  ${(props) => props.height && `height: ${props.height}`};
  ${(props) => props.bgColor && `background-color: ${props.bgColor}`};

  ${(props) => props.margin && `margin: ${props.margin};`};
  ${(props) => props.marginTop && `margin-top: ${props.marginTop};`};
  ${(props) => props.marginBottom && `margin-bottom: ${props.marginBottom};`};
  ${(props) => props.marginLeft && `margin-left: ${props.marginLeft};`};
  ${(props) => props.marginRight && `margin-right: ${props.marginRight};`};

  ${(props) => props.padding && `padding: ${props.padding};`};
  ${(props) => props.paddingTop && `padding-top: ${props.paddingTop};`};
  ${(props) => props.paddingBottom && `padding-bottom: ${props.paddingBottom};`};
  ${(props) => props.paddingLeft && `padding-left: ${props.paddingLeft};`};
  ${(props) => props.paddingRight && `padding-right: ${props.paddingRight};`};

  ${(props) => props.borderRadius && `border-radius: ${props.borderRadius};`}
  ${(props) => props.flex && `flex: ${props.flex};`}
  ${(props) => props.border && `border: ${props.border};`}
  ${(props) => props.top && `top: ${props.top};`}
  ${(props) => props.right && `right: ${props.right};`}
  ${(props) => props.left && `left: ${props.left};`}
  ${(props) => props.bottom && `bottom: ${props.bottom};`}
`
