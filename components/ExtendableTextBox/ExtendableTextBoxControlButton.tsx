import { TouchableOpacity, View } from "react-native"
import styled from "styled-components"
import { universalColors } from "../../shared/colors"
import { StyledColorProps } from "../../shared/primitivTypes"
import Icon from "../Icon/Icon"
import { ExtendableTextBoxControlButtonProps } from "./ExtendableTextBoxControlButton.types"
import { getTheme } from "../../shared/getTheme"

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
    background: ${({ color }) => color};
    justify-content: center;
    align-items: center;
`

const IconContainer = styled(View)`
    margin: -6px;
`

const ButtonContainer = styled(View)`
    padding: 10px;
`
