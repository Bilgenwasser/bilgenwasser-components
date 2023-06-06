import { useCallback, useEffect, useRef, useState } from "react"
import { Text, TouchableOpacity } from "react-native"
import styled from "styled-components"
import { iconType } from "../../types/iconType"
import { optionalString, StyledColorProps } from "../../types/primitivTypes"
import { useViewCenter } from "../../utils/hooks/useView"
import { universalColors } from "../../utils/theming/colors"
import { Box } from "../Box/Box"
import { HStack } from "../HStack/HStack"
import { Icon } from "../Icon/Icon"
import { PrimaryText } from "../PrimaryText/PrimaryText"
import { PickerProps } from "./Picker.types"
import { PickerModal } from "./PickerModal"

export const Picker = ({ placeholderText, options, value, setValue, sheet, forceTheme }: PickerProps) => {
    const [isPickerVisible, setIsPickerVisible] = useState<boolean>(false)
    const [pickerItem, setPickerText] = useState<optionalString>(value ? value.item : null)
    const [pickerIcon, setPickerIcon] = useState<iconType | null>(value ? value.icon : null)

    const viewRef = useRef<TouchableOpacity>(null)
    const [pickerPosition, setPickerPosition] = useState({ x: 150, y: 200 })

    const handlePickerState = useCallback(() => {
        setIsPickerVisible((prevState: boolean) => !prevState)
    }, [])

    useEffect(() => {
        value && setPickerText(value.item)
        value && setPickerIcon(value.icon)
    }, [value])

    useEffect(() => {
        setValue && setValue({ item: pickerItem!, icon: pickerIcon! })
    }, [pickerItem, pickerIcon])

    return (
        <TouchableOpacity
            ref={viewRef}
            onLayout={() =>
                // Wait for the picker to be mounted before getting its position (needed for sheet)
                setTimeout(() => {
                    useViewCenter(viewRef, setPickerPosition)
                }, 500)
            }
            onPress={handlePickerState}
        >
            <Box sheet={sheet} forceTheme={forceTheme}>
                <StyledHStack>
                    {!pickerItem ? (
                        <StyledText color={universalColors.SystemGray}>{placeholderText}</StyledText>
                    ) : (
                        <HStack>
                            <PrimaryText>{pickerItem}</PrimaryText>
                            <Icon name={pickerIcon!} />
                        </HStack>
                    )}
                </StyledHStack>
            </Box>
            <PickerModal
                options={options}
                isPickerVisible={isPickerVisible}
                setPickerText={setPickerText}
                setPickerIcon={setPickerIcon}
                handlePickerState={handlePickerState}
                pickerPosition={pickerPosition}
                forceTheme={forceTheme}
            />
        </TouchableOpacity>
    )
}

const StyledHStack = styled(HStack)`
    padding: 5px 15px;
`

const StyledText = styled(Text)<StyledColorProps>`
    color: ${({ color }) => color};
    font-size: 16px;
    margin: 4px;
`
