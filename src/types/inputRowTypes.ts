import { KeyboardType } from "react-native"
import { iconType } from "./iconType"
import { pickerType } from "./primitivTypes"

export interface ToggleRow {
    text: string
    info?: string[]
    default?: boolean
}

export interface PickerRow {
    text: string
    icon: iconType
}

export interface TextBoxRowProps {
    icon: iconType
    name: string
    placeholderText: string
    keyboardType?: KeyboardType
    endText?: string
    maxLength?: number
    divider?: "bold" | "thin"
    editable?: boolean
    picker?: PickerRow[]
    hideText?: boolean
    value: string | pickerType
}
