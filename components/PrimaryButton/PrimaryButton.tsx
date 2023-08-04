import React from "react"
import { StyleSheet, TouchableOpacity, View } from "react-native"
import { universalColors } from "../../shared/colors"
import Heading from "../Heading/Heading"
import { PrimaryButtonProps } from "./PrimaryButton.types"

const PrimaryButton = ({ children: text, onPress, smallMargin, disabled }: PrimaryButtonProps) => {
    return (
        <TouchableOpacity style={styles.touchableOpacity} onPress={onPress} disabled={disabled}>
            <View
                style={[
                    styles.button,
                    { backgroundColor: universalColors.Salmon + (disabled ? "aa" : "") },
                    { marginVertical: smallMargin ? 10 : 20 },
                ]}
            >
                <View style={styles.centeredView}>
                    <Heading forceTheme="dark">{text}</Heading>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default PrimaryButton

const styles = StyleSheet.create({
    touchableOpacity: {
        width: "100%",
    },
    button: {
        height: 60,
        borderRadius: 15,
    },
    centeredView: {
        height: "100%",
        alignSelf: "center",
        justifyContent: "center",
    },
})
