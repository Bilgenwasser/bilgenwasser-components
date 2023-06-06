import { Text } from "react-native"
import styled from "styled-components"
import { universalColors } from "../../utils/theming/colors"
import { SecondaryTextProps } from "./SecondaryText.types"

export const SecondaryText = ({ children: text }: SecondaryTextProps) => {
    return <StyledText>{text}</StyledText>
}

const StyledText = styled(Text)`
    font-size: 14px;
    color: ${universalColors.SystemGray};
    margin: 2px;
`
