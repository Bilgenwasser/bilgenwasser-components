import React from "react"
import { StyleSheet, View } from "react-native"
import { HStackProps } from "./HStack.types"

const HStack = ({ children, style }: HStackProps) => {
    return <View style={[styles.hStack, style]}>{children}</View>
}

const styles = StyleSheet.create({
    hStack: {
        flexDirection: "row",
        alignItems: "center",
    },
})

export default HStack
