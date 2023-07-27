import { ExtendableRowStateType } from "./ExtendableTextBoxTypes"
import { ThemeProps } from "../../shared/primitivTypes"
import { IconType } from "../Icon/IconType"
import { PickerRowProps } from "../Picker/PickerRowProps"

export interface ExtendableTextBoxProps extends ThemeProps {
    defaultRowCount: number
    minRowCount: number
    maxRowCount: number
    icon: IconType
    placeholderText1: string
    placeholderText2: string
    pickerItems?: PickerRowProps[]
    setValues?: (values: ExtendableRowStateType[]) => void
}
