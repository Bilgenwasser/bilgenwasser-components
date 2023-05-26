import { Text, TouchableOpacity } from "react-native"
import styled from "styled-components"
import { universalColors } from "../../utils/theming/colors"
import HStack from "../HStack"
import Icon from "../Icon"

interface BackNavigationProps {
    navigation: any
    text: string
    toggleBoolean?: boolean
    setToggleBoolean?: (boolean: boolean) => void
}

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
