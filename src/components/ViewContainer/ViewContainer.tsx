import { SafeAreaView, View } from "react-native"
import styled from "styled-components"
import { StyledColorProps } from "../../types/primitivTypes"
import { lightColors, universalColors } from "../../utils/theming/colors"
import { getTheme } from "../../utils/theming/getTheme"
import { ContainerProps, ViewContainerProps } from "./ViewContainer.types"

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
