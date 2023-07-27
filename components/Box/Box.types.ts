import { ReactNode } from "react"
import { StyledColorProps, ThemeProps } from "../../shared/primitivTypes"

export interface BoxProps extends ThemeProps {
    children?: ReactNode
    sheet?: boolean
    transparent?: boolean
    noMargin?: boolean
}

export interface StyledViewProps extends StyledColorProps {
    transparent?: boolean
    noMargin?: boolean
}
