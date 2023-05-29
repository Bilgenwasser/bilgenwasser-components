import { PickerRow } from "../../types/inputRowTypes"
import { pickerType, ThemeProps } from "../../types/primitivTypes"

export interface PickerProps extends ThemeProps {
    placeholderText: string
    options: PickerRow[]
    value?: pickerType
    setValue?: (value: pickerType) => void
    sheet?: boolean
}
