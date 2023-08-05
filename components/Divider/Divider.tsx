import React from "react"
import { StyleSheet, View } from "react-native"
import { darkColors, lightColors } from "../../shared/colors"
import { getTheme } from "../../shared/getTheme"
import { DividerProps } from "./Divider.types"

const Divider = ({ thickness, forceTheme }: DividerProps) => {
    const thinColors = getTheme(forceTheme, darkColors.SystemGray3, lightColors.SystemGray4)
    const boldColors = getTheme(forceTheme, darkColors.SystemGray2, lightColors.SystemGray3)

    return (
        <View
            style={[
                styles.divider,
                {
                    backgroundColor: thickness === "bold" ? boldColors : thinColors,
                    height: thickness === "bold" ? 1.5 : 0.5,
                },
            ]}
        />
    )
}

export default Divider

const styles = StyleSheet.create({
    divider: {
        width: "92%",
        marginVertical: 3,
        alignSelf: "center",
    },
})
