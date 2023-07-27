import { textBoxStateType, ThemeProps } from "../../shared/primitivTypes"
import { TextBoxRowProps } from "./TextBoxRowProps"

export interface TextBoxProps extends ThemeProps {
    inputRows: TextBoxRowProps[]
    setValues?: (values: (prevValues: textBoxStateType) => textBoxStateType) => void
    alignInputRight?: boolean
    sheet?: boolean
}

export interface InputContainerProps {
    align?: boolean
}
