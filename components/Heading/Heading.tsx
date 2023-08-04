import React from "react"
import { StyleSheet, Text } from "react-native"
import { universalColors } from "../../shared/colors"
import { getTheme } from "../../shared/getTheme"
import { HeadingProps } from "./Heading.types"

const Heading = ({ children: text, noMargin, alignCenter, forceColor, forceTheme }: HeadingProps) => {
    const color = getTheme(forceTheme, universalColors.SystemWhite, universalColors.SystemBlack)

    const dynamicStyles = {
        color: forceColor ?? color,
        margin: noMargin ? 0 : 10,
    }

    return (
        <Text style={[styles.text, dynamicStyles, { alignSelf: alignCenter ? "center" : "flex-start" }]}>{text}</Text>
    )
}

export default Heading

const styles = StyleSheet.create({
    text: {
        fontSize: 24,
        fontWeight: "bold",
    },
})
