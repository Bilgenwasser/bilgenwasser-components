import React from "react"
import { StyleSheet, View } from "react-native"
import { VStackProps } from "./VStack.types"

const VStack = ({ children }: VStackProps) => {
    return <View style={styles.vStack}>{children}</View>
}

const styles = StyleSheet.create({
    vStack: {
        flexDirection: "column",
        width: "100%",
    },
})

export default VStack
