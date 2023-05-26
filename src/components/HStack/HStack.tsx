import { ReactNode } from "react"
import { View } from "react-native"
import styled from "styled-components"

interface HStackProps {
    children?: ReactNode | ReactNode[]
}

const HStack = ({ children }: HStackProps) => {
    return <StyledView>{children}</StyledView>
}

export default HStack

const StyledView = styled(View)`
    flex-direction: row;
    align-items: center;
`
