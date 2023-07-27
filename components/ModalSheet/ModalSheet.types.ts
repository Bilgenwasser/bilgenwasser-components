import { ReactNode } from "react"
import { ThemeProps } from "../../shared/primitivTypes"

export interface ModalSheetProps extends ThemeProps {
    children?: ReactNode
    snapPoints?: string[]
    isSheetVisible: boolean
    setIsSheetVisible: (isVisible: boolean) => void
    triggerSheet: (index: number) => void
}
