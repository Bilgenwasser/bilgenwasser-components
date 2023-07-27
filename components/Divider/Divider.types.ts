import { StyledColorProps, ThemeProps } from "../../shared/primitivTypes"

export interface DividerProps extends ThemeProps {
    thickness?: "bold" | "thin"
}

export interface StyledViewProps extends StyledColorProps {
    thickness?: "bold" | "thin"
}
