import { Text } from "react-native"
import styled from "styled-components"
import { StyledColorProps, ThemeProps } from "../../types/primitivTypes"
import { universalColors } from "../../utils/theming/colors"
import { getTheme } from "../../utils/theming/getTheme"

interface TitleProps extends ThemeProps {
    children: string | string[]
    smallMargin?: boolean
}

interface StyledTextProps extends StyledColorProps {
    smallMargin: boolean
}

const Title = ({ children: text, smallMargin, forceTheme }: TitleProps) => {
    return (
        <StyledText
            color={getTheme(forceTheme, universalColors.SystemWhite, universalColors.SystemBlack)}
            smallMargin={!!smallMargin}
        >
            {text}
        </StyledText>
    )
}

export default Title

const StyledText = styled(Text)<StyledTextProps>`
    font-size: 36px;
    font-weight: bold;
    color: ${({ color }) => color};
    margin: 10px 0 ${({ smallMargin }) => (smallMargin ? 2 : 10)}px 0;
    align-self: flex-start;
`
