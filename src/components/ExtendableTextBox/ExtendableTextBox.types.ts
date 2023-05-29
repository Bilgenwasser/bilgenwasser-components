import { ExtendableRowStateType } from "../../types/ExtendableTextBoxTypes"
import { iconType } from "../../types/iconType"
import { PickerRow } from "../../types/inputRowTypes"
import { ThemeProps } from "../../types/primitivTypes"

export interface ExtendableTextBoxProps extends ThemeProps {
    defaultRowCount: number
    minRowCount: number
    maxRowCount: number
    icon: iconType
    placeholderText1: string
    placeholderText2: string
    pickerItems?: PickerRow[]
    setValues?: (values: ExtendableRowStateType[]) => void
}
