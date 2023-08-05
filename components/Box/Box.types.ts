import { ReactNode } from "react"
import { ThemeProps } from "../../shared/primitivTypes"

export interface BoxProps extends ThemeProps {
    children?: ReactNode
    sheet?: boolean
    transparent?: boolean
    noMargin?: boolean
}
