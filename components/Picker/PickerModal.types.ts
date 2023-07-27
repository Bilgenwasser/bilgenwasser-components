import { dimensionType, positionType, ThemeProps } from "../../shared/primitivTypes"
import { IconType } from "../Icon/IconType"
import { PickerRowProps } from "./PickerRowProps"

export interface PickerModalProps extends ThemeProps {
    options: PickerRowProps[]
    isPickerVisible: boolean
    setPickerText: (text: string) => void
    setPickerIcon: (icon: IconType) => void
    handlePickerState: () => void
    pickerPosition: positionType
}

export interface ModalViewProps {
    position: positionType
    dimensions: dimensionType
    screenDimensions: dimensionType
}
