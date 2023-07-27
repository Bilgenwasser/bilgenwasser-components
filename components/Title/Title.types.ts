import { StyledColorProps, ThemeProps } from "../../shared/primitivTypes"

export interface TitleProps extends ThemeProps {
    children: string | string[]
    smallMargin?: boolean
}

export interface StyledTextProps extends StyledColorProps {
    smallMargin: boolean
}
