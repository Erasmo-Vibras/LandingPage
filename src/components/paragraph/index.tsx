import {ParagraphStyle} from './styles'
import {ParagraphProps} from './props'

export const Paragraph = (props: ParagraphProps) => {
  return <ParagraphStyle {...props}>{props.children}</ParagraphStyle>
}
