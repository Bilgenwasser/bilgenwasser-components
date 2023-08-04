import React from "react"
import { StyleSheet, View } from "react-native"
import { HStackProps } from "./HStack.types"

const HStack = ({ children }: HStackProps) => {
    return <View style={styles.hStack}>{children}</View>
}

const styles = StyleSheet.create({
    hStack: {
        flexDirection: "row",
        alignItems: "center",
    },
})

export default HStack
