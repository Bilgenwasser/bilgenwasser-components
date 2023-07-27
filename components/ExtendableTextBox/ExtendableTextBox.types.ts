import { ExtendableRowStateType } from "../../types/ExtendableTextBoxTypes"
import { PickerRow } from "../../types/inputRowTypes"
import { ThemeProps } from "../../types/primitivTypes"
import { IconType } from "../Icon/IconType"

export interface ExtendableTextBoxProps extends ThemeProps {
    defaultRowCount: number
    minRowCount: number
    maxRowCount: number
    icon: IconType
    placeholderText1: string
    placeholderText2: string
    pickerItems?: PickerRow[]
    setValues?: (values: ExtendableRowStateType[]) => void
}
