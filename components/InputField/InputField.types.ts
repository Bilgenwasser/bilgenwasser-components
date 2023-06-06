import { KeyboardType } from "react-native"
import { StyledColorProps, ThemeProps } from "../../types/primitivTypes"

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

export interface StyledTextInputProps extends StyledColorProps {
    endText: boolean
    alginRight: boolean
}
