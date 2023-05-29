import { View } from "react-native"
import styled from "styled-components"
import { HStackProps } from "./HStack.types"

const HStack = ({ children }: HStackProps) => {
    return <StyledView>{children}</StyledView>
}

export default HStack

const StyledView = styled(View)`
    flex-direction: row;
    align-items: center;
`
