import { ToggleRow } from "../../types/inputRowTypes"

export interface ToggleListProps {
    inputRows: ToggleRow[]
    setValues?: (values: boolean[]) => void
}
