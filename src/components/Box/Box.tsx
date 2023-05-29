import { View } from "react-native"
import styled from "styled-components"
import { darkColors, lightColors, universalColors } from "../../utils/theming/colors"
import { getTheme } from "../../utils/theming/getTheme"
import { BoxProps, StyledViewProps } from "./Box.types"

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
