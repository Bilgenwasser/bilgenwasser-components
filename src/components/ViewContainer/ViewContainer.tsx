import { ReactNode } from "react"
import { SafeAreaView, View } from "react-native"
import styled from "styled-components"
import { StyledColorProps, ThemeProps } from "../../types/primitivTypes"
import { lightColors, universalColors } from "../../utils/theming/colors"
import { getTheme } from "../../utils/theming/getTheme"

interface ViewContainerProps extends ThemeProps {
    children?: ReactNode
    noPadding?: boolean
    noAlignment?: boolean
}

interface ContainerProps {
    noPadding: boolean
    noAlignment: boolean
}

const ViewContainer = ({ children, noPadding, noAlignment, forceTheme }: ViewContainerProps) => {
    return (
        <StyledView color={getTheme(forceTheme, universalColors.SystemBlack, lightColors.SystemGray6)}>
            <Container noPadding={!!noPadding} noAlignment={!!noAlignment}>
                {children}
            </Container>
        </StyledView>
    )
}

export default ViewContainer

const StyledView = styled(SafeAreaView)<StyledColorProps>`
    background: ${({ color }) => color};
`

const Container = styled(View)<ContainerProps>`
    height: 100%;
    padding: ${({ noPadding }) => (noPadding ? "0" : "0 4%")};
    ${({ noAlignment }) => (noAlignment ? "" : "align-items: center;")}
`
