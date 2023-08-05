import React from "react"
import { Image } from "react-native"
import { IconProps } from "./Icon.types"
import { useIcons } from "./useIcons"

const Icon = ({ name, size = 24, rotation = 0, forceTheme }: IconProps) => {
    const icons = useIcons(forceTheme)

    return (
        <Image style={{ width: size, height: size, transform: [{ rotate: `${rotation}deg` }] }} source={icons[name]} />
    )
}

export default Icon
