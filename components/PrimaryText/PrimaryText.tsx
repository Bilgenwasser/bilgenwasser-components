import { Text } from "react-native"
import styled from "styled-components"
import { universalColors } from "../../utils/theming/colors"
import { getTheme } from "../../utils/theming/getTheme"
import { PrimaryTextProps, StyledTextProps } from "./PrimaryText.types"

export const PrimaryText = ({ children: text, forceColor, forceTheme }: PrimaryTextProps) => {
    return (
        <StyledText
            color={getTheme(forceTheme, universalColors.SystemWhite, universalColors.SystemBlack)}
            forceColor={forceColor}
        >
            {text}
        </StyledText>
    )
}

const StyledText = styled(Text)<StyledTextProps>`
    font-size: 16px;
    color: ${({ color, forceColor }) => forceColor ?? color};
    margin: 4px;
`
