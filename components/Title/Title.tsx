import React from "react"
import { StyleSheet, Text } from "react-native"
import { universalColors } from "../../shared/colors"
import { getTheme } from "../../shared/getTheme"
import { TitleProps } from "./Title.types"

const Title = ({ children: text, smallMargin, forceTheme }: TitleProps) => {
    const color = getTheme(forceTheme, universalColors.SystemWhite, universalColors.SystemBlack)

    return <Text style={[styles.text, { color: color, margin: smallMargin ? 2 : 10 }]}>{text}</Text>
}

export default Title

const styles = StyleSheet.create({
    text: {
        fontSize: 36,
        fontWeight: "bold",
        alignSelf: "flex-start",
    },
})
