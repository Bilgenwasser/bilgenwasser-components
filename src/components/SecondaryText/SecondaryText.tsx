import { Text } from "react-native"
import styled from "styled-components"
import { universalColors } from "../../utils/theming/colors"

interface SecondaryTextProps {
    children: string | string[]
}

const SecondaryText = ({ children: text }: SecondaryTextProps) => {
    return <StyledText>{text}</StyledText>
}

export default SecondaryText

const StyledText = styled(Text)`
    font-size: 14px;
    color: ${universalColors.SystemGray};
    margin: 2px;
`
