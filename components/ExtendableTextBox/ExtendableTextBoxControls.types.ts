import { ThemeProps } from "../../shared/primitivTypes"

export interface ExtendableTextBoxControlsProps extends ThemeProps {
    minRowCount: number
    maxRowCount: number
    rowCount: number
    setRowCount: any
}
