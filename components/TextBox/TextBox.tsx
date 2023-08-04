import React from "react"
import { View } from "react-native"
import styled from "styled-components"
import { pickerType } from "../../shared/primitivTypes"
import Box from "../Box/Box"
import Divider from "../Divider/Divider"
import Icon from "../Icon/Icon"
import InputField from "../InputField/InputField"
import Picker from "../Picker/Picker"
import PrimaryText from "../PrimaryText/PrimaryText"
import HStack from "../Stacks/HStack"
import VStack from "../Stacks/VStack"
import { InputContainerProps, TextBoxProps } from "./TextBox.types"

const TextBox = ({ inputRows, setValues, forceTheme, alignInputRight, sheet }: TextBoxProps) => {
    return (
        <Box sheet={sheet} forceTheme={forceTheme}>
            {inputRows.map((row, index) => {
                return (
                    <VStack key={row.name + index}>
                        {index > 0 && <Divider thickness={row.divider} />}
                        <SpacedHStack>
                            <ContentContainer>
                                <HStack>
                                    <Icon
                                        name={row.icon}
                                        size={24}
                                        rotation={row.icon === "arrow" ? 45 : 0}
                                        forceTheme={forceTheme}
                                    />
                                    <PrimaryText forceTheme={forceTheme}>{row.name}</PrimaryText>
                                </HStack>
                            </ContentContainer>
                            {row.picker ? (
                                <PickerContainer>
                                    <Picker
                                        placeholderText={row.placeholderText}
                                        value={row.value as pickerType}
                                        setValue={(text) =>
                                            setValues &&
                                            setValues((prevRows) => [
                                                ...prevRows.slice(0, index),
                                                text,
                                                ...prevRows.slice(index + 1),
                                            ])
                                        }
                                        options={row.picker}
                                        sheet={sheet}
                                        forceTheme={forceTheme}
                                    />
                                </PickerContainer>
                            ) : (
                                <InputContainer align={alignInputRight}>
                                    <HStack>
                                        <InputField
                                            value={row.value as string}
                                            editable={row.editable}
                                            setValue={(text) =>
                                                setValues &&
                                                setValues((prevRows) => [
                                                    ...prevRows.slice(0, index),
                                                    text,
                                                    ...prevRows.slice(index + 1),
                                                ])
                                            }
                                            keyboardType={row.keyboardType}
                                            placeholderText={row.placeholderText}
                                            maxLength={row.maxLength}
                                            endText={!!row.endText}
                                            forceTheme={forceTheme}
                                            hideText={row.hideText}
                                            alignRight={alignInputRight}
                                        />
                                        {row.endText && <PrimaryText>{row.endText}</PrimaryText>}
                                    </HStack>
                                </InputContainer>
                            )}
                        </SpacedHStack>
                    </VStack>
                )
            })}
        </Box>
    )
}

export default TextBox

const SpacedHStack = styled(HStack)`
    justify-content: space-between;
`

const ContentContainer = styled(View)`
    height: 40px;
    margin-left: 15px;
    justify-content: center;
`

const PickerContainer = styled(View)`
    margin-bottom: -15px;
`

const InputContainer = styled(View)<InputContainerProps>`
    height: 40px;
    width: 48%;
    margin-right: 15px;
    justify-content: center;
    overflow: scroll;
    align-items: ${({ align }) => (align ? "flex-end" : "flex-start")};
`
