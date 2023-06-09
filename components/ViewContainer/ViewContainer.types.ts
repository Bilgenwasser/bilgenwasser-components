import { ReactNode } from "react"
import { ThemeProps } from "../../types/primitivTypes"

export interface ViewContainerProps extends ThemeProps {
    children?: ReactNode
    noPadding?: boolean
    noAlignment?: boolean
}

export interface ContainerProps {
    noPadding: boolean
    noAlignment: boolean
}
