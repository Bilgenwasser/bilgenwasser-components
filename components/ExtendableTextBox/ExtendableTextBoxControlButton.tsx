import React from "react"
import { StyleSheet, TouchableOpacity, View } from "react-native"
import { universalColors } from "../../shared/colors"
import { getTheme } from "../../shared/getTheme"
import Icon from "../Icon/Icon"
import { ExtendableTextBoxControlButtonProps } from "./ExtendableTextBoxControlButton.types"

export const ExtendableTextBoxControlButton = ({
    icon,
    onPress,
    disabled,
    forceTheme,
}: ExtendableTextBoxControlButtonProps) => {
    const color = getTheme(forceTheme, universalColors.SystemWhite, universalColors.SystemBlack)

    return (
        <View style={styles.buttonContainer}>
            <TouchableOpacity
                onPress={onPress}
                disabled={disabled}
                style={[styles.touchableOpacity, { backgroundColor: color }]}
            >
                <View style={styles.iconContainer}>
                    <Icon name={icon} size={30} />
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    touchableOpacity: {
        height: 18,
        width: 18,
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center",
    },
    iconContainer: {
        margin: -6,
    },
    buttonContainer: {
        padding: 10,
    },
})
