import { StyledColorProps, ThemeProps } from "../../types/primitivTypes"

export interface StyledTextProps extends StyledColorProps {
    forceColor?: string
}

export interface PrimaryTextProps extends ThemeProps {
    children: string | string[]
    forceColor?: string
}
