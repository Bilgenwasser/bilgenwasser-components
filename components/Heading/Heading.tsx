import { Text } from "react-native"
import styled from "styled-components"
import { universalColors } from "../../utils/theming/colors"
import { getTheme } from "../../utils/theming/getTheme"
import { HeadingProps, StyledTextProps } from "./Heading.types"

export const Heading = ({ children: text, noMargin, alignCenter, forceColor, forceTheme }: HeadingProps) => {
    return (
        <StyledText
            color={getTheme(forceTheme, universalColors.SystemWhite, universalColors.SystemBlack)}
            noMargin={!!noMargin}
            alignCenter={!!alignCenter}
            forceColor={forceColor}
        >
            {text}
        </StyledText>
    )
}

const StyledText = styled(Text)<StyledTextProps>`
    font-size: 24px;
    font-weight: bold;
    text-align: ${({ alignCenter }) => (alignCenter ? "center" : "left")};
    color: ${({ color, forceColor }) => (forceColor ? forceColor : color)};
    margin: 0 ${({ noMargin }) => (noMargin ? "" : "10px")};
`
