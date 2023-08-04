import React, { useCallback, useEffect, useRef, useState } from "react"
import { Text, TouchableOpacity } from "react-native"
import styled from "styled-components"
import { universalColors } from "../../shared/colors"
import { optionalString, StyledColorProps } from "../../shared/primitivTypes"
import Box from "../Box/Box"
import Icon from "../Icon/Icon"
import { IconType } from "../Icon/IconType"
import PrimaryText from "../PrimaryText/PrimaryText"
import HStack from "../Stacks/HStack"
import { PickerProps } from "./Picker.types"
import { PickerModal } from "./PickerModal"
import { useViewCenter } from "./useView"

const Picker = ({ placeholderText, options, value, setValue, sheet, forceTheme }: PickerProps) => {
    const [isPickerVisible, setIsPickerVisible] = useState<boolean>(false)
    const [pickerItem, setPickerText] = useState<optionalString>(value ? value.text : null)
    const [pickerIcon, setPickerIcon] = useState<IconType | null>(value ? value.icon : null)

    const viewRef = useRef<TouchableOpacity>(null)
    const [pickerPosition, setPickerPosition] = useState({ x: 150, y: 200 })

    const handlePickerState = useCallback(() => {
        setIsPickerVisible((prevState: boolean) => !prevState)
    }, [])

    useEffect(() => {
        value && setPickerText(value.text)
        value && setPickerIcon(value.icon)
    }, [value])

    useEffect(() => {
        setValue && setValue({ text: pickerItem!, icon: pickerIcon! })
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

export default Picker

const StyledHStack = styled(HStack)`
    padding: 5px 15px;
`

const StyledText = styled(Text)<StyledColorProps>`
    color: ${({ color }) => color};
    font-size: 16px;
    margin: 4px;
`
