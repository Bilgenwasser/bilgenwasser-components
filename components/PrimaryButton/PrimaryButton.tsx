import { TouchableOpacity, View } from "react-native"
import styled from "styled-components"
import { universalColors } from "../../utils/theming/colors"
import { Heading } from "../Heading/Heading"
import { HStack } from "../HStack/HStack"
import { BackgroundProps, PrimaryButtonProps } from "./PrimaryButton.types"

export const PrimaryButton = ({ children: text, onPress, smallMargin, disabled }: PrimaryButtonProps) => {
    return (
        <StyledTouchableOpacity onPress={onPress} disabled={disabled}>
            <Background disabled={!!disabled} smallMargin={!!smallMargin}>
                <StyledHStack>
                    <Heading forceTheme="dark">{text}</Heading>
                </StyledHStack>
            </Background>
        </StyledTouchableOpacity>
    )
}

const StyledTouchableOpacity = styled(TouchableOpacity)`
    width: 100%;
`

const Background = styled(View)<BackgroundProps>`
    background: ${universalColors.Salmon}${({ disabled }) => (disabled ? "aa" : "")};
    height: 60px;
    margin: ${({ smallMargin }) => (smallMargin ? "10px 0" : "20px 0")};
    border-radius: 15px;
`

const StyledHStack = styled(HStack)`
    height: 100%;
    align-self: center;
    justify-content: center;
`
