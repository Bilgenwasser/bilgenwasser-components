import { IconType } from "../Icon/IconType";
import { optionalString } from "../../shared/primitivTypes"

type ExtendableTextBoxPickerType = { text: optionalString; icon: IconType | null }
export type ExtendableRowStateType = { text1: optionalString; text2: optionalString | ExtendableTextBoxPickerType }
