import { ReactNode } from "react"
import { View } from "react-native"
import styled from "styled-components"

interface VStackProps {
    children: ReactNode | ReactNode[]
}

const VStack = ({ children }: VStackProps) => {
    return <StyledView>{children}</StyledView>
}

export default VStack

const StyledView = styled(View)`
    flex-direction: column;
    width: 100%;
`
