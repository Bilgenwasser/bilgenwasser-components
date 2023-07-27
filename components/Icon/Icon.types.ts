import { ThemeProps } from "../../types/primitivTypes"
import { IconType } from "./IconType"

export interface IconProps extends ThemeProps {
    name: IconType
    size?: number
    rotation?: number
}

export interface StyledImageProps {
    size?: number
    rotation?: number
}
