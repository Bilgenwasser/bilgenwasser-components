import { ReactNode } from "react"

export interface PaginationProps {
    children: ReactNode[]
    itemSpacing?: number
    itemWidth?: number
}

export interface SpacerProps {
    width: number
}

export interface DotProps {
    color: string
}

export interface ImageContainerProps {
    width: number
    spacing: number
    first: boolean
    last: boolean
}
