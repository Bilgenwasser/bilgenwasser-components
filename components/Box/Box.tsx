import React from "react"
import { StyleSheet, View } from "react-native"
import { darkColors, lightColors, universalColors } from "../../shared/colors"
import { getTheme } from "../../shared/getTheme"
import { BoxProps } from "./Box.types"

const Box = ({ children, forceTheme, sheet, transparent, noMargin }: BoxProps) => {
    const color = getTheme(
        forceTheme,
        sheet ? darkColors.SystemGray5 : darkColors.SystemGray6,
        sheet ? lightColors.SystemGray6 : universalColors.SystemWhite
    )
    const backgroundColor = transparent ? color + "dd" : color
    const marginBottom = noMargin ? 0 : 15

    const dynamicStyles = {
        backgroundColor,
        marginBottom,
    }

    return <View style={[styles.container, dynamicStyles]}>{children}</View>
}

export default Box

const styles = StyleSheet.create({
    container: {
        width: "100%",
        borderRadius: 15,
    },
})
