import React from "react"
import { StyleSheet, Text, TouchableOpacity } from "react-native"
import { universalColors } from "../../shared/colors"
import HStack from "../HStack/HStack"
import Icon from "../Icon/Icon"
import { BackNavigationProps } from "./BackNavigation.types"

const BackNavigation = ({ navigation, text, toggleBoolean, setToggleBoolean }: BackNavigationProps) => {
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={toggleBoolean ? () => setToggleBoolean && setToggleBoolean(false) : () => navigation.goBack()}
        >
            <HStack>
                <Icon name="chevron" rotation={180} />
                <Text style={styles.text}>{text}</Text>
            </HStack>
        </TouchableOpacity>
    )
}

export default BackNavigation

const styles = StyleSheet.create({
    container: {
        width: "100%",
        marginLeft: -10,
    },
    text: {
        fontSize: 16,
        color: universalColors.Blue,
    },
})
