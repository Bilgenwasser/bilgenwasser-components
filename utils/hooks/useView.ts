import { RefObject } from "react"
import { Dimensions, TouchableOpacity } from "react-native"
import { dimensionType, positionType } from "../../types/primitivTypes"

export function useViewCenter(
    viewRef: RefObject<TouchableOpacity>,
    setPosition: (position: positionType) => void
): void {
    viewRef.current?.measure((x: number, y: number, width: number, height: number, pageX: number, pageY: number) => {
        const centerX = Math.round(pageX + width / 2)
        const centerY = Math.round(pageY + height / 2)

        setPosition({ x: centerX, y: centerY })
    })
}

export function useViewDimensions(viewRef: any, setDimensions: (dimensions: dimensionType) => void): void {
    viewRef.current.measure((x: number, y: number, width: number, height: number) => {
        setDimensions({ width, height })
    })
}

export function useScreenDimensions(): dimensionType {
    const { width, height } = Dimensions.get("screen")
    return { width, height }
}
