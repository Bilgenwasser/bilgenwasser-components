import { Text, TouchableOpacity } from "react-native"
import styled from "styled-components"
import { universalColors } from "../../utils/theming/colors"
import { HStack } from "../HStack/HStack"
import { Icon } from "../Icon/Icon"
import { BackNavigationProps } from "./BackNavigation.types"

export const BackNavigation = ({ navigation, text, toggleBoolean, setToggleBoolean }: BackNavigationProps) => {
    return (
        <LeftAlignedHStack>
            <TouchableOpacity
                onPress={toggleBoolean ? () => setToggleBoolean && setToggleBoolean(false) : () => navigation.goBack()}
            >
                <LeftAlignedHStack>
                    <Icon name="chevron" rotation={180} />
                    <StyledText>{text}</StyledText>
                </LeftAlignedHStack>
            </TouchableOpacity>
        </LeftAlignedHStack>
    )
}

const LeftAlignedHStack = styled(HStack)`
    width: 100%;
    margin-left: -10px;
`

const StyledText = styled(Text)`
    font-size: 16px;
    color: ${universalColors.Blue};
`
