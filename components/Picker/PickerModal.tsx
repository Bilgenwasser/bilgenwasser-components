import { useRef, useState } from "react"
import { Modal, Pressable, TouchableOpacity, View } from "react-native"
import styled from "styled-components"
import { useScreenDimensions, useViewDimensions } from "../../utils/hooks/useView"
import { Box } from "../Box/Box"
import { Divider } from "../Divider/Divider"
import { Icon } from "../Icon/Icon"
import { PrimaryText } from "../PrimaryText/PrimaryText"
import { HStack } from "../Stacks/HStack"
import { VStack } from "../Stacks/VStack"
import { ModalViewProps, PickerModalProps } from "./PickerModal.types"

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
            <StyledPressable onPress={handlePickerState}>
                <ModalView
                    ref={modalRef}
                    onLayout={() => useViewDimensions(modalRef, setPickerMenuDimensions)}
                    position={pickerPosition}
                    dimensions={pickerMenuDimensions}
                    screenDimensions={screenDimensions}
                >
                    <Box forceTheme={forceTheme} transparent noMargin>
                        <StyledVStack>
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
                                            <StyledHStack>
                                                <PrimaryText>{text}</PrimaryText>
                                                <Icon name={icon} />
                                            </StyledHStack>
                                        </TouchableOpacity>
                                    </VStack>
                                )
                            })}
                        </StyledVStack>
                    </Box>
                </ModalView>
            </StyledPressable>
        </Modal>
    )
}

const StyledPressable = styled(Pressable)`
    flex: 1;
`

const StyledHStack = styled(HStack)`
    padding: 5px 15px 5px 10px;
    justify-content: space-between;
`
const ModalView = styled(View)<ModalViewProps>`
    width: 50%;
    justify-content: center;
    border-radius: 15px;
    position: absolute;
    top: ${({ position, dimensions }) => position.y - dimensions.height / 2}px;
    left: ${({ screenDimensions, dimensions }) => screenDimensions.width * 0.97 - dimensions.width}px;
`

const StyledVStack = styled(VStack)`
    padding: 5px 0;
`
