import { SafeAreaView, View } from "react-native"
import styled from "styled-components"
import { lightColors, universalColors } from "../../shared/colors"
import { StyledColorProps } from "../../shared/primitivTypes"
import { ContainerProps, ViewContainerProps } from "./ViewContainer.types"
import { getTheme } from "../../shared/getTheme"

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
