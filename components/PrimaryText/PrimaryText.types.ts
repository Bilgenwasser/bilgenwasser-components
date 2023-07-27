import { StyledColorProps, ThemeProps } from "../../shared/primitivTypes"

export interface StyledTextProps extends StyledColorProps {
    forceColor?: string
}

export interface PrimaryTextProps extends ThemeProps {
    children: string | string[]
    forceColor?: string
}
