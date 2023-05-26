import { TouchableOpacity, View } from "react-native"
import styled from "styled-components"
import { universalColors } from "../../utils/theming/colors"
import Heading from "../Heading"
import HStack from "../HStack"

interface PrimaryButtonProps {
    children: string | string[]
    onPress?: (event: any) => void
    smallMargin?: boolean
    disabled?: boolean
}

interface BackgroundProps {
    disabled: boolean
    smallMargin: boolean
}

const PrimaryButton = ({ children: text, onPress, smallMargin, disabled }: PrimaryButtonProps) => {
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

export default PrimaryButton

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
