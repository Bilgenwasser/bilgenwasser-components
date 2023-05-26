import { Text } from "react-native"
import styled from "styled-components"
import { StyledColorProps, ThemeProps } from "../../types/primitivTypes"
import { universalColors } from "../../utils/theming/colors"
import { getTheme } from "../../utils/theming/getTheme"

interface StyledTextProps extends StyledColorProps {
    forceColor?: string
}

interface PrimaryTextProps extends ThemeProps {
    children: string | string[]
    forceColor?: string
}

const PrimaryText = ({ children: text, forceColor, forceTheme }: PrimaryTextProps) => {
    return (
        <StyledText
            color={getTheme(forceTheme, universalColors.SystemWhite, universalColors.SystemBlack)}
            forceColor={forceColor}
        >
            {text}
        </StyledText>
    )
}

export default PrimaryText

const StyledText = styled(Text)<StyledTextProps>`
    font-size: 16px;
    color: ${({ color, forceColor }) => (forceColor ? forceColor : color)}
    margin: 4px;
`
