import { iconType } from "../../types/iconType"
import { ThemeProps } from "../../types/primitivTypes"

export interface IconProps extends ThemeProps {
    name: iconType
    size?: number
    rotation?: number
}

export interface StyledImageProps {
    size?: number
    rotation?: number
}
