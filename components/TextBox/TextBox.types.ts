import { TextBoxRowProps } from "../../types/inputRowTypes"
import { textBoxStateType, ThemeProps } from "../../types/primitivTypes"

export interface TextBoxProps extends ThemeProps {
    inputRows: TextBoxRowProps[]
    setValues?: (values: (prevValues: textBoxStateType) => textBoxStateType) => void
    alignInputRight?: boolean
    sheet?: boolean
}

export interface InputContainerProps {
    align?: boolean
}
