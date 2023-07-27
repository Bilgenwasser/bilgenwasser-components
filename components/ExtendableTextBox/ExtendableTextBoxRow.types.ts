import { ExtendableRowStateType } from "../../types/ExtendableTextBoxTypes"
import { PickerRow } from "../../types/inputRowTypes"
import { ThemeProps } from "../../types/primitivTypes"
import { IconType } from "../Icon/IconType"

export interface TextBoxProps extends ThemeProps {
    icon: IconType
    placeholderText1: string
    placeholderText2: string
    pickerItems?: PickerRow[]
    setValue: (data: ExtendableRowStateType) => void
}
