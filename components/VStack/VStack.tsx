import { View } from "react-native"
import styled from "styled-components"
import { VStackProps } from "./VStack.types"

export const VStack = ({ children }: VStackProps) => {
    return <StyledView>{children}</StyledView>
}

const StyledView = styled(View)`
    flex-direction: column;
    width: 100%;
`
