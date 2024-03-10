import {FlexContainer} from './styles'
import {FlexProps} from './props'

export const Flex = (props: FlexProps) => {
  return <FlexContainer {...props}>{props.children}</FlexContainer>
}
