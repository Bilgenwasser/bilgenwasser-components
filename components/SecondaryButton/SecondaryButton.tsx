import { Text, TouchableOpacity } from "react-native"
import styled from "styled-components"
import { StyledColorProps } from "../../types/primitivTypes"
import { SecondaryButtonProps } from "./SecondaryButton.types"

export const SecondaryButton = ({ children: text, color, onPress }: SecondaryButtonProps) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <StyledText color={color}>{text}</StyledText>
        </TouchableOpacity>
    )
}

const StyledText = styled(Text)<StyledColorProps>`
    color: ${({ color }) => color};
    font-size: 18px;
    padding: 5px;
`
