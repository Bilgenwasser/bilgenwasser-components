import React, { useCallback, useEffect, useRef, useState } from "react"
import { StyleSheet, Text, TouchableOpacity } from "react-native"
import { universalColors } from "../../shared/colors"
import { optionalString } from "../../shared/primitivTypes"
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
                setTimeout(() => {
                    useViewCenter(viewRef, setPickerPosition)
                }, 500)
            }
            onPress={handlePickerState}
        >
            <Box sheet={sheet} forceTheme={forceTheme}>
                <HStack style={styles.hStack}>
                    {!pickerItem ? (
                        <Text style={[styles.text, { color: universalColors.SystemGray }]}>{placeholderText}</Text>
                    ) : (
                        <HStack>
                            <PrimaryText>{pickerItem}</PrimaryText>
                            <Icon name={pickerIcon!} />
                        </HStack>
                    )}
                </HStack>
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

const styles = StyleSheet.create({
    hStack: {
        padding: 5,
        paddingHorizontal: 15,
    },
    text: {
        fontSize: 16,
        margin: 4,
    },
})
