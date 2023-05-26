import { View } from "react-native"
import styled from "styled-components"
import { StyledColorProps, ThemeProps } from "../../types/primitivTypes"
import { darkColors, lightColors } from "../../utils/theming/colors"
import { getTheme } from "../../utils/theming/getTheme"

interface DividerProps extends ThemeProps {
    thickness?: "bold" | "thin"
}

interface StyledViewProps extends StyledColorProps {
    thickness?: "bold" | "thin"
}

const Divider = ({ thickness, forceTheme }: DividerProps) => {
    const thinColors = getTheme(forceTheme, darkColors.SystemGray3, lightColors.SystemGray4)
    const boldColors = getTheme(forceTheme, darkColors.SystemGray2, lightColors.SystemGray3)

    return <StyledView color={thickness === "bold" ? boldColors : thinColors} thickness={thickness} />
}

export default Divider

const StyledView = styled(View)<StyledViewProps>`
    width: 92%;
    height: ${({ thickness }) => (thickness === "bold" ? "1.5px" : "0.5px")};
    background: ${({ color }) => color};
    margin: 3px 0;
    align-self: center;
`
