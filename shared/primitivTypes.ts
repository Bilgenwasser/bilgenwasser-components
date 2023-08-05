import { IconType } from "../components/Icon/IconType"

export type optionalString = string | null

export type dimensionType = { width: number; height: number }
export type positionType = { x: number; y: number }

export type ThemeType = "dark" | "light" | undefined

export type pickerType = { text: string; icon: IconType }

export type textBoxStateType = (optionalString | pickerType)[]

export interface ThemeProps {
    forceTheme?: ThemeType
}
