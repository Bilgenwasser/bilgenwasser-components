import { View } from "react-native"
import styled from "styled-components"
import { HStackProps } from "./HStack.types"

export const HStack = ({ children }: HStackProps) => {
    return <StyledView>{children}</StyledView>
}

const StyledView = styled(View)`
    flex-direction: row;
    align-items: center;
`
