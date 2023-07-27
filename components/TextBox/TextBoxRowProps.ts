import { KeyboardType } from "react-native"
import { IconType } from "../Icon/IconType"
import { pickerType } from "../../shared/primitivTypes"
import { PickerRowProps } from "../Picker/PickerRowProps"

export interface TextBoxRowProps {
    icon: IconType
    name: string
    placeholderText: string
    keyboardType?: KeyboardType
    endText?: string
    maxLength?: number
    divider?: "bold" | "thin"
    editable?: boolean
    picker?: PickerRowProps[]
    hideText?: boolean
    value: string | pickerType
}