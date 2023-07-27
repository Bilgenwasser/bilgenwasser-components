import { ExtendableRowStateType } from "./ExtendableTextBoxTypes"
import { ThemeProps } from "../../shared/primitivTypes"
import { IconType } from "../Icon/IconType"
import { PickerRowProps } from "../Picker/PickerRowProps"

export interface TextBoxProps extends ThemeProps {
    icon: IconType
    placeholderText1: string
    placeholderText2: string
    pickerItems?: PickerRowProps[]
    setValue: (data: ExtendableRowStateType) => void
}
