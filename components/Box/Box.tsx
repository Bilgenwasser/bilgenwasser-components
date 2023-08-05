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

    return (
        <View
            style={[
                styles.container,
                { backgroundColor: transparent ? color + "dd" : color, marginBottom: noMargin ? 0 : 15 },
            ]}
        >
            {children}
        </View>
    )
}

export default Box

const styles = StyleSheet.create({
    container: {
        width: "100%",
        borderRadius: 15,
    },
})
