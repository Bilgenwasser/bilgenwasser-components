import React from "react"
import { StyleSheet, Text, TouchableOpacity } from "react-native"
import { SecondaryButtonProps } from "./SecondaryButton.types"

const SecondaryButton = ({ children: text, color, onPress }: SecondaryButtonProps) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <Text style={[styles.text, { color: color }]}>{text}</Text>
        </TouchableOpacity>
    )
}

export default SecondaryButton

const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        padding: 5,
    },
})
