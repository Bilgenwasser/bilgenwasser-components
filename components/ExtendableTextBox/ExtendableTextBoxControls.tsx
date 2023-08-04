import React from "react"
import { StyleSheet } from "react-native"
import { darkColors, lightColors } from "../../shared/colors"
import { getTheme } from "../../shared/getTheme"
import HStack from "../Stacks/HStack"
import { ExtendableTextBoxControlButton } from "./ExtendableTextBoxControlButton"
import { ExtendableTextBoxControlsProps } from "./ExtendableTextBoxControls.types"

export const ExtendableTextBoxControls = ({
    minRowCount,
    maxRowCount,
    rowCount,
    setRowCount,
    forceTheme,
}: ExtendableTextBoxControlsProps) => {
    const color = getTheme(forceTheme, darkColors.SystemGray4, lightColors.SystemGray5)

    return (
        <HStack style={[styles.container, { backgroundColor: color }]}>
            <ExtendableTextBoxControlButton
                icon="minus-salmon"
                onPress={() => setRowCount((prev: any) => prev - 1)}
                disabled={rowCount <= minRowCount}
                forceTheme={forceTheme}
            />
            <ExtendableTextBoxControlButton
                icon="add-salmon"
                onPress={() => setRowCount((prev: any) => prev + 1)}
                disabled={rowCount >= maxRowCount}
                forceTheme={forceTheme}
            />
        </HStack>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: 30,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
    },
})
