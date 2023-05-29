import BottomSheet from "@gorhom/bottom-sheet"
import { useRef } from "react"
import { Modal, Platform, TouchableOpacity, View } from "react-native"
import styled from "styled-components"
import { darkColors, lightColors, universalColors } from "../../utils/theming/colors"
import { getTheme } from "../../utils/theming/getTheme"
import Icon from "../Icon"
import { ModalSheetProps } from "./ModalSheet.types"

const ModalSheet = ({
    children,
    snapPoints,
    isSheetVisible,
    setIsSheetVisible,
    triggerSheet,
    forceTheme,
}: ModalSheetProps) => {
    const modalSheetRef = useRef(null)

    return (
        <Modal visible={isSheetVisible} transparent={true} animationType="fade">
            <ModalView>
                <BottomSheet
                    ref={modalSheetRef}
                    snapPoints={snapPoints ? snapPoints : [Platform.OS == "ios" ? "93%" : "100%"]}
                    onChange={triggerSheet}
                    backgroundStyle={{
                        backgroundColor: getTheme(forceTheme, darkColors.SystemGray6, lightColors.SystemGray5),
                    }}
                    handleIndicatorStyle={{ backgroundColor: universalColors.SystemGray }}
                    enablePanDownToClose
                >
                    <SheetViewContainer>
                        {Platform.OS === "android" && (
                            <StyledTouchableOpacity onPress={() => setIsSheetVisible(false)}>
                                <Icon name="multiply" size={35} />
                            </StyledTouchableOpacity>
                        )}
                        {children}
                    </SheetViewContainer>
                </BottomSheet>
            </ModalView>
        </Modal>
    )
}

export default ModalSheet

const ModalView = styled(View)`
    flex: 1;
    background: rgba(0, 0, 0, 0.75);
`

const SheetViewContainer = styled(View)`
    flex: 1;
    padding: 0 4%;
`

const StyledTouchableOpacity = styled(TouchableOpacity)`
    position: absolute;
    top: -8px;
    right: 10px;
`
