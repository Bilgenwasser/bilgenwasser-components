import { StyledColorProps, ThemeProps } from "../../types/primitivTypes"

export interface DividerProps extends ThemeProps {
    thickness?: "bold" | "thin"
}

export interface StyledViewProps extends StyledColorProps {
    thickness?: "bold" | "thin"
}
