import React from "react"
import { Text, TouchableOpacity } from "react-native"
import styled from "styled-components"
import { universalColors } from "../../shared/colors"
import Icon from "../Icon/Icon"
import HStack from "../Stacks/HStack"
import { BackNavigationProps } from "./BackNavigation.types"

const BackNavigation = ({ navigation, text, toggleBoolean, setToggleBoolean }: BackNavigationProps) => {
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

export default BackNavigation

const LeftAlignedHStack = styled(HStack)`
    width: 100%;
    margin-left: -10px;
`

const StyledText = styled(Text)`
    font-size: 16px;
    color: ${universalColors.Blue};
`
