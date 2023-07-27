import { IconType } from "../components/Icon/IconType";
import { optionalString } from "./primitivTypes"

type ExtendableTextBoxPickerType = { text: optionalString; icon: IconType | null }
export type ExtendableRowStateType = { text1: optionalString; text2: optionalString | ExtendableTextBoxPickerType }
