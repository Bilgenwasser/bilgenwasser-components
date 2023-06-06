import { ExtendableRowStateType } from "../../types/ExtendableTextBoxTypes"
import { iconType } from "../../types/iconType"
import { PickerRow } from "../../types/inputRowTypes"
import { ThemeProps } from "../../types/primitivTypes"

export interface TextBoxProps extends ThemeProps {
    icon: iconType
    placeholderText1: string
    placeholderText2: string
    pickerItems?: PickerRow[]
    setValue: (data: ExtendableRowStateType) => void
}
