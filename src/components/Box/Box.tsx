import { ReactNode } from "react"
import { View } from "react-native"
import styled from "styled-components"
import { StyledColorProps, ThemeProps } from "../../types/primitivTypes"
import { darkColors, lightColors, universalColors } from "../../utils/theming/colors"
import { getTheme } from "../../utils/theming/getTheme"

interface BoxProps extends ThemeProps {
    children?: ReactNode
    sheet?: boolean
    transparent?: boolean
    noMargin?: boolean
}

interface StyledViewProps extends StyledColorProps {
    transparent?: boolean
    noMargin?: boolean
}

const Box = ({ children, forceTheme, sheet, transparent, noMargin }: BoxProps) => {
    return (
        <StyledView
            color={getTheme(
                forceTheme,
                sheet ? darkColors.SystemGray5 : darkColors.SystemGray6,
                sheet ? lightColors.SystemGray6 : universalColors.SystemWhite
            )}
            transparent={transparent}
            noMargin={noMargin}
        >
            {children}
        </StyledView>
    )
}

export default Box

const StyledView = styled(View)<StyledViewProps>`
    background: ${({ color, transparent }) => (transparent ? color + "dd" : color)};
    margin-bottom: ${({ noMargin }) => (noMargin ? "0" : "15px")};
    width: 100%;
    border-radius: 15px;
`
