import { ThemeProps } from "../../shared/primitivTypes"

export interface HeadingProps extends ThemeProps {
    children: string | string[]
    noMargin?: boolean
    alignCenter?: boolean
    forceColor?: string
}
