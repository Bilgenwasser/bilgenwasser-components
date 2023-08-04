import React from "react"
import { StyleSheet, Text } from "react-native"
import { universalColors } from "../../shared/colors"
import { getTheme } from "../../shared/getTheme"
import { PrimaryTextProps } from "./PrimaryText.types"

const PrimaryText = ({ children: text, forceColor, forceTheme }: PrimaryTextProps) => {
    const color = getTheme(forceTheme, universalColors.SystemWhite, universalColors.SystemBlack)

    return <Text style={[styles.text, { color: forceColor ?? color }]}>{text}</Text>
}

export default PrimaryText

const styles = StyleSheet.create({
    text: {
        fontSize: 16,
        margin: 4,
    },
})
