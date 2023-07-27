import { ToggleRowProps } from "./ToggleRowProps"

export interface ToggleListProps {
    inputRows: ToggleRowProps[]
    setValues?: (values: boolean[]) => void
}
