import { StyledColorProps, ThemeProps } from "../../types/primitivTypes"

export interface TitleProps extends ThemeProps {
    children: string | string[]
    smallMargin?: boolean
}

export interface StyledTextProps extends StyledColorProps {
    smallMargin: boolean
}
