import React from "react"
import { Image, StyleSheet } from "react-native"
import { IconProps } from "./Icon.types"
import { useIcons } from "./useIcons"

const Icon = ({ name, size = 24, rotation = 0, forceTheme }: IconProps) => {
    const icons = useIcons(forceTheme)

    const styles = StyleSheet.create({
        image: {
            width: size,
            height: size,
            transform: [{ rotate: `${rotation}deg` }],
        },
    })

    return <Image style={styles.image} source={icons[name]} />
}

export default Icon
