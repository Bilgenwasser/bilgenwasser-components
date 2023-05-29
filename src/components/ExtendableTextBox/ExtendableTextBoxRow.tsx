import { useEffect, useState } from "react"
import { View } from "react-native"
import styled from "styled-components"
import { optionalString, pickerType } from "../../types/primitivTypes"
import HStack from "../HStack"
import Icon from "../Icon"
import InputField from "../InputField"
import Picker from "../Picker"
import { TextBoxProps } from "./ExtendableTextBoxRow.types"

export const ExtendableTextBoxRow = ({
    icon,
    placeholderText1,
    placeholderText2,
    pickerItems,
    setValue,
    forceTheme,
}: TextBoxProps) => {
    const [text1, setText1] = useState<optionalString>(null)
    const [text2, setText2] = useState<optionalString | pickerType>(null)

    useEffect(() => {
        setValue && setValue({ text1, text2 })
    }, [text1, text2])

    return (
        <SpacedHStack>
            <HStack>
                <Icon name={icon} size={20} />
                <StyledView>
                    <InputField placeholderText={placeholderText1} setValue={setText1} />
                </StyledView>
            </HStack>
            {pickerItems ? (
                <PickerContainer>
                    <Picker
                        placeholderText={placeholderText2}
                        options={pickerItems}
                        setValue={setText2}
                        forceTheme={forceTheme}
                    />
                </PickerContainer>
            ) : (
                <InputContainer>
                    <InputField placeholderText={placeholderText2} setValue={setText2} />
                </InputContainer>
            )}
        </SpacedHStack>
    )
}

const SpacedHStack = styled(HStack)`
    width: 100%;
    padding: 0 15px;
    justify-content: space-between;
`

const PickerContainer = styled(View)`
    margin-bottom: -15px;
    margin-left: -50px;
`

const InputContainer = styled(View)`
    width: 45%;
    overflow: scroll;
`

const StyledView = styled(View)`
    margin-left: 15px;
    width: 50%;
    overflow: scroll;
`
