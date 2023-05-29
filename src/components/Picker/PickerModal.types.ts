import { iconType } from "../../types/iconType"
import { PickerRow } from "../../types/inputRowTypes"
import { dimensionType, positionType, ThemeProps } from "../../types/primitivTypes"

export interface PickerModalProps extends ThemeProps {
    options: PickerRow[]
    isPickerVisible: boolean
    setPickerText: (text: string) => void
    setPickerIcon: (icon: iconType) => void
    handlePickerState: () => void
    pickerPosition: positionType
}

export interface ModalViewProps {
    position: positionType
    dimensions: dimensionType
    screenDimensions: dimensionType
}
