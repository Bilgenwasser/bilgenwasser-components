import { ThemeProps } from "../../types/primitivTypes"
import { IconType } from "../Icon/IconType"

export interface ExtendableTextBoxControlButtonProps extends ThemeProps {
    icon: IconType
    onPress?: () => void
    disabled?: boolean
}
