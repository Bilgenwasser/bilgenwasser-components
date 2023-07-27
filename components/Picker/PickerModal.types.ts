import { PickerRow } from "../../types/inputRowTypes"
import { dimensionType, positionType, ThemeProps } from "../../types/primitivTypes"
import { IconType } from "../Icon/IconType"

export interface PickerModalProps extends ThemeProps {
    options: PickerRow[]
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
