import React, { useRef, useState } from "react"
import { Modal, Pressable, StyleSheet, TouchableOpacity, View } from "react-native"
import Box from "../Box/Box"
import Divider from "../Divider/Divider"
import HStack from "../HStack/HStack"
import Icon from "../Icon/Icon"
import PrimaryText from "../PrimaryText/PrimaryText"
import VStack from "../VStack/VStack"
import { PickerModalProps } from "./PickerModal.types"
import { useScreenDimensions, useViewDimensions } from "./useView"

export const PickerModal = ({
    options,
    isPickerVisible,
    setPickerText,
    setPickerIcon,
    handlePickerState,
    pickerPosition,
    forceTheme,
}: PickerModalProps) => {
    const modalRef = useRef(null)
    const [pickerMenuDimensions, setPickerMenuDimensions] = useState({ width: 200, height: 100 })
    const screenDimensions = useScreenDimensions()

    return (
        <Modal visible={isPickerVisible} transparent={true} animationType="fade">
            <Pressable style={styles.styledPressable} onPress={handlePickerState}>
                <View
                    ref={modalRef}
                    onLayout={() => useViewDimensions(modalRef, setPickerMenuDimensions)}
                    style={{
                        ...styles.modalView,
                        top: pickerPosition.y - pickerMenuDimensions.height / 2,
                        left: screenDimensions.width * 0.97 - pickerMenuDimensions.width,
                    }}
                >
                    <Box forceTheme={forceTheme} transparent noMargin>
                        <VStack style={styles.styledVStack}>
                            {options.map((option, index) => {
                                const { text, icon } = option
                                return (
                                    <VStack key={text + index}>
                                        {index > 0 && <Divider />}
                                        <TouchableOpacity
                                            onPress={() => {
                                                handlePickerState()
                                                setPickerText(text)
                                                setPickerIcon(icon)
                                            }}
                                        >
                                            <HStack style={styles.styledHStack}>
                                                <PrimaryText>{text}</PrimaryText>
                                                <Icon name={icon} />
                                            </HStack>
                                        </TouchableOpacity>
                                    </VStack>
                                )
                            })}
                        </VStack>
                    </Box>
                </View>
            </Pressable>
        </Modal>
    )
}

const styles = StyleSheet.create({
    styledPressable: {
        flex: 1,
    },
    styledHStack: {
        padding: 5,
        paddingHorizontal: 10,
        justifyContent: "space-between",
    },
    modalView: {
        width: "50%",
        justifyContent: "center",
        borderRadius: 15,
        position: "absolute",
    },
    styledVStack: {
        paddingVertical: 5,
    },
})
