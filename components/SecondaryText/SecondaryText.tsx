import React from "react"
import { StyleSheet, Text } from "react-native"
import { universalColors } from "../../shared/colors"
import { SecondaryTextProps } from "./SecondaryText.types"

const SecondaryText = ({ children: text }: SecondaryTextProps) => {
    return <Text style={styles.text}>{text}</Text>
}

export default SecondaryText

const styles = StyleSheet.create({
    text: {
        fontSize: 14,
        color: universalColors.SystemGray,
        margin: 2,
    },
})
