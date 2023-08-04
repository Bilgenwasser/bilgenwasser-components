import React from "react"
import { Text } from "react-native"
import styled from "styled-components"
import { universalColors } from "../../shared/colors"
import { getTheme } from "../../shared/getTheme"
import { HeadingProps, StyledTextProps } from "./Heading.types"

const Heading = ({ children: text, noMargin, alignCenter, forceColor, forceTheme }: HeadingProps) => {
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

export default Heading

const StyledText = styled(Text)<StyledTextProps>`
    font-size: 24px;
    font-weight: bold;
    text-align: ${({ alignCenter }) => (alignCenter ? "center" : "left")};
    color: ${({ color, forceColor }) => forceColor ?? color};
    margin: 0 ${({ noMargin }) => (noMargin ? "" : "10px")};
`
