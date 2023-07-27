import { StyledColorProps, ThemeProps } from "../../shared/primitivTypes"

export interface StyledTextProps extends StyledColorProps {
    noMargin: boolean
    alignCenter: boolean
    forceColor?: string
}

export interface HeadingProps extends ThemeProps {
    children: string | string[]
    noMargin?: boolean
    alignCenter?: boolean
    forceColor?: string
}
