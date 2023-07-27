import { KeyboardType } from "react-native"
import { pickerType } from "./primitivTypes"
import { IconType } from "../components/Icon/IconType"

export interface ToggleRow {
    text: string
    info?: string[]
    default?: boolean
}

export interface PickerRow {
    text: string
    icon: IconType
}

export interface TextBoxRowProps {
    icon: IconType
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
