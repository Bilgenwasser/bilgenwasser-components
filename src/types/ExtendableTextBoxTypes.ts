import { iconType } from "./iconType"
import { optionalString } from "./primitivTypes"

type ExtendableTextBoxPickerType = { item: optionalString; icon: iconType | null }
export type ExtendableRowStateType = { text1: optionalString; text2: optionalString | ExtendableTextBoxPickerType }
