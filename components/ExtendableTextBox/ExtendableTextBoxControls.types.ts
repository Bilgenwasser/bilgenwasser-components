import { ThemeProps } from "../../types/primitivTypes"

export interface ExtendableTextBoxControlsProps extends ThemeProps {
    minRowCount: number
    maxRowCount: number
    rowCount: number
    setRowCount: any
}
