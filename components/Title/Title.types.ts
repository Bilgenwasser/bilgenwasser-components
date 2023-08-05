import { ThemeProps } from "../../shared/primitivTypes"

export interface TitleProps extends ThemeProps {
    children: string | string[]
    smallMargin?: boolean
}
