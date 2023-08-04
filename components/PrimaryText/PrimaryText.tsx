import React from "react"
import { Text } from "react-native"
import styled from "styled-components"
import { universalColors } from "../../shared/colors"
import { getTheme } from "../../shared/getTheme"
import { PrimaryTextProps, StyledTextProps } from "./PrimaryText.types"

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
    color: ${({ color, forceColor }) => forceColor ?? color};
    margin: 4px;
`
