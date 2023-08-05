import { ThemeProps } from "../../shared/primitivTypes"
import { IconType } from "./IconType"

export interface IconProps extends ThemeProps {
    name: IconType
    size?: number
    rotation?: number
}
