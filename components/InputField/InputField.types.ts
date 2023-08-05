import { KeyboardType } from "react-native"
import { ThemeProps } from "../../shared/primitivTypes"

export interface InputFieldProps extends ThemeProps {
    value?: string
    setValue?: (value: string) => void
    editable?: boolean
    keyboardType?: KeyboardType
    placeholderText?: string
    maxLength?: number
    hideText?: boolean
    endText?: boolean
    alignRight?: boolean
}
