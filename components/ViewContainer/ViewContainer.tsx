import React from "react"
import { SafeAreaView, StyleSheet, View } from "react-native"
import { lightColors, universalColors } from "../../shared/colors"
import { getTheme } from "../../shared/getTheme"
import { ViewContainerProps } from "./ViewContainer.types"

const ViewContainer = ({ children, noPadding, noAlignment, forceTheme }: ViewContainerProps) => {
    const color = getTheme(forceTheme, universalColors.SystemBlack, lightColors.SystemGray6)

    return (
        <SafeAreaView style={[styles.view, { backgroundColor: color }]}>
            <View
                style={[
                    styles.container,
                    { padding: noPadding ? 0 : "4%" },
                    noAlignment ? {} : { alignItems: "center" },
                ]}
            >
                {children}
            </View>
        </SafeAreaView>
    )
}

export default ViewContainer

const styles = StyleSheet.create({
    view: {
        flex: 1,
    },
    container: {
        height: "100%",
    },
})
