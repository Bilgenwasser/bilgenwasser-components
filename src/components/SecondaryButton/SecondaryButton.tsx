import { Text, TouchableOpacity } from "react-native"
import styled from "styled-components"
import { StyledColorProps } from "../../types/primitivTypes"

interface SecondaryButtonProps {
    children: string | string[]
    color: string
    onPress?: () => void
}

const SecondaryButton = ({ children: text, color, onPress }: SecondaryButtonProps) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <StyledText color={color}>{text}</StyledText>
        </TouchableOpacity>
    )
}

export default SecondaryButton

const StyledText = styled(Text)<StyledColorProps>`
    color: ${({ color }) => color};
    font-size: 18px;
    padding: 5px;
`
