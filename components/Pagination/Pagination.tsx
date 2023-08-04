import React, { useCallback, useEffect, useState } from "react"
import {
    Dimensions,
    NativeScrollEvent,
    NativeSyntheticEvent,
    ScrollView,
    StyleSheet,
    useColorScheme,
    View,
} from "react-native"
import { darkColors, lightColors, universalColors } from "../../shared/colors"
import HStack from "../HStack/HStack"
import { PaginationProps } from "./Pagination.types"

const Pagination = ({ children, itemSpacing, itemWidth }: PaginationProps) => {
    const [currentPage, setCurrentPage] = useState<number>(0)
    const [dotsColor, setDotsColor] = useState<string[]>(Array(20).fill(universalColors.SystemGray))
    const appearance = useColorScheme()

    const screenWidth = Dimensions.get("screen").width
    const defaultWidth = 0.92
    const defaultSpacing = screenWidth * ((1 - defaultWidth) / 2)

    const pageWidth = screenWidth * (itemWidth ?? defaultWidth)
    const spacerWidth = (screenWidth * (1 - (itemWidth ?? defaultWidth))) / 2
    const handleScrollEnd = useCallback((event: NativeSyntheticEvent<NativeScrollEvent>): void => {
        const xOffset = event.nativeEvent.contentOffset.x
        const newIndex = Math.floor(xOffset / pageWidth)
        setCurrentPage(newIndex)
    }, [])

    useEffect(() => {
        const colors = children.map((_, index) => {
            if (index === currentPage) {
                return universalColors.SystemGray
            } else {
                return appearance === "dark" ? darkColors.SystemGray4 : lightColors.SystemGray4
            }
        })
        setDotsColor(colors)
    }, [currentPage, appearance])

    return (
        <View style={styles.scrollViewContainer}>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                decelerationRate="fast"
                snapToInterval={pageWidth + 2 * (itemSpacing ?? defaultSpacing)}
                onMomentumScrollEnd={handleScrollEnd}
            >
                <View style={{ width: spacerWidth }} />
                {children.map((child, index) => (
                    <View
                        key={index}
                        style={{
                            margin: `0 ${index === children.length - 1 ? 0 : itemSpacing ?? defaultSpacing}px 0 ${
                                index === 0 ? 0 : itemSpacing ?? defaultSpacing
                            }px`,
                            width: pageWidth,
                        }}
                    >
                        {child}
                    </View>
                ))}
                <View style={{ width: spacerWidth }} />
            </ScrollView>
            <HStack style={styles.styledHStack}>
                {children.map((_, index) => (
                    <View key={index} style={{ ...styles.dot, backgroundColor: dotsColor[index] }} />
                ))}
            </HStack>
        </View>
    )
}

export default Pagination

const styles = StyleSheet.create({
    scrollViewContainer: {
        flex: 1,
    },
    styledHStack: {
        marginTop: 10,
        justifyContent: "center",
    },
    dot: {
        width: 12,
        height: 12,
        borderRadius: 6,
        margin: "0 3px",
    },
})
