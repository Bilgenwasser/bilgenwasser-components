import { View } from "react-native"
import styled from "styled-components"
import { VStackProps } from "./VStack.types"

const VStack = ({ children }: VStackProps) => {
    return <StyledView>{children}</StyledView>
}

export default VStack

const StyledView = styled(View)`
    flex-direction: column;
    width: 100%;
`
