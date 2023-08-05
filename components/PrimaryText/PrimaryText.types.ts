import { ThemeProps } from "../../shared/primitivTypes"

export interface PrimaryTextProps extends ThemeProps {
    children: string | string[]
    forceColor?: string
}
