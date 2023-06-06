import { TouchableOpacity, View } from "react-native"
import styled from "styled-components"
import { StyledColorProps } from "../../types/primitivTypes"
import { universalColors } from "../../utils/theming/colors"
import { getTheme } from "../../utils/theming/getTheme"
import { Icon } from "../Icon/Icon"
import { ExtendableTextBoxControlButtonProps } from "./ExtendableTextBoxControlButton.types"

export const ExtendableTextBoxControlButton = ({
    icon,
    onPress,
    disabled,
    forceTheme,
}: ExtendableTextBoxControlButtonProps) => {
    return (
        <ButtonContainer>
            <StyledTouchableOpacity
                onPress={onPress}
                disabled={disabled}
                color={getTheme(forceTheme, universalColors.SystemWhite, universalColors.SystemBlack)}
            >
                <IconContainer>
                    <Icon name={icon} size={30} />
                </IconContainer>
            </StyledTouchableOpacity>
        </ButtonContainer>
    )
}

const StyledTouchableOpacity = styled(TouchableOpacity)<StyledColorProps>`
    height: 18px;
    width: 18px;
    border-radius: 15px;
    background: ${({ color }) => color}
    justify-content: center;
    align-items: center;
`

const IconContainer = styled(View)`
    margin: -6px;
`

const ButtonContainer = styled(View)`
    padding: 10px;
`
