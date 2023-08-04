import BottomSheet from "@gorhom/bottom-sheet"
import React, { useRef } from "react"
import { Modal, Platform, StyleSheet, TouchableOpacity, View } from "react-native"
import { darkColors, lightColors, universalColors } from "../../shared/colors"
import { getTheme } from "../../shared/getTheme"
import Icon from "../Icon/Icon"
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
            <View style={styles.modalView}>
                <BottomSheet
                    ref={modalSheetRef}
                    snapPoints={snapPoints ?? [Platform.OS == "ios" ? "93%" : "100%"]}
                    onChange={triggerSheet}
                    backgroundStyle={{
                        backgroundColor: getTheme(forceTheme, darkColors.SystemGray6, lightColors.SystemGray5),
                    }}
                    handleIndicatorStyle={{ backgroundColor: universalColors.SystemGray }}
                    enablePanDownToClose
                >
                    <View style={styles.sheetViewContainer}>
                        {Platform.OS === "android" && (
                            <TouchableOpacity style={styles.touchableOpacity} onPress={() => setIsSheetVisible(false)}>
                                <Icon name="multiply" size={35} />
                            </TouchableOpacity>
                        )}
                        {children}
                    </View>
                </BottomSheet>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modalView: {
        flex: 1,
        backgroundColor: "rgba(0, 0, 0, 0.75)",
    },
    sheetViewContainer: {
        flex: 1,
        padding: "0 4%",
    },
    touchableOpacity: {
        position: "absolute",
        top: -8,
        right: 10,
    },
})

export default ModalSheet
