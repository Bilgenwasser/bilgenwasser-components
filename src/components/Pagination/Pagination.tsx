import { useCallback, useEffect, useState } from "react"
import { Dimensions, NativeScrollEvent, NativeSyntheticEvent, ScrollView, useColorScheme, View } from "react-native"
import styled from "styled-components"
import { darkColors, lightColors, universalColors } from "../../utils/theming/colors"
import HStack from "../HStack"
import { DotProps, ImageContainerProps, PaginationProps, SpacerProps } from "./Pagination.types"

const Pagination = ({ children, itemSpacing, itemWidth }: PaginationProps) => {
    const [currentPage, setCurrentPage] = useState<number>(0)
    const [dotsColor, setDotsColor] = useState<string[]>(Array(20).fill(universalColors.SystemGray))
    const appearance = useColorScheme()

    const screenWidth = Dimensions.get("screen").width
    const defaultWidth = 0.92
    const defaultSpacing = screenWidth * ((1 - defaultWidth) / 2)

    const pageWidth = screenWidth * (itemWidth ? itemWidth : defaultWidth)
    const spacerWidth = (screenWidth * (1 - (itemWidth ? itemWidth : defaultWidth))) / 2
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
        <ScrollViewContainer>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                decelerationRate="fast"
                snapToInterval={pageWidth + 2 * (itemSpacing ? itemSpacing : defaultSpacing)}
                onMomentumScrollEnd={handleScrollEnd}
            >
                <Spacer width={spacerWidth} />
                {children.map((child, index) => (
                    <PageContainer
                        key={index}
                        width={pageWidth}
                        spacing={itemSpacing ? itemSpacing : defaultSpacing}
                        first={index === 0}
                        last={index === children.length - 1}
                    >
                        {child}
                    </PageContainer>
                ))}
                <Spacer width={spacerWidth} />
            </ScrollView>
            <StyledHStack>
                {children.map((_, index) => (
                    <Dot key={index} color={dotsColor[index]} />
                ))}
            </StyledHStack>
        </ScrollViewContainer>
    )
}

export default Pagination

const ScrollViewContainer = styled(View)`
    flex: 1;
`

const Spacer = styled(View)<SpacerProps>`
    width: ${({ width }) => width}px;
`

const PageContainer = styled(View)<ImageContainerProps>`
    margin: 0 ${({ last, spacing }) => (last ? 0 : spacing)}px 0 ${({ first, spacing }) => (first ? 0 : spacing)}px;
    width: ${({ width }) => width}px;
`

const StyledHStack = styled(HStack)`
    margin-top: 10px;
    justify-content: center;
`

const Dot = styled(View)<DotProps>`
    width: 12px;
    height: 12px;
    border-radius: 6px;
    background: ${({ color }) => color};
    margin: 0 3px;
`
