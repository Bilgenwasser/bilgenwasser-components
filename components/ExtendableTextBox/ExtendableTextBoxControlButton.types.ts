import { iconType } from "../../types/iconType"
import { ThemeProps } from "../../types/primitivTypes"

export interface ExtendableTextBoxControlButtonProps extends ThemeProps {
    icon: iconType
    onPress?: () => void
    disabled?: boolean
}
