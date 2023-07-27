import { pickerType, ThemeProps } from "../../shared/primitivTypes"
import { PickerRowProps } from "./PickerRowProps"

export interface PickerProps extends ThemeProps {
    placeholderText: string
    options: PickerRowProps[]
    value?: pickerType
    setValue?: (value: pickerType) => void
    sheet?: boolean
}
