import { View } from "react-native"
import styled from "styled-components"
import { TextBoxRowProps } from "../../types/inputRowTypes"
import { pickerType, textBoxStateType, ThemeProps } from "../../types/primitivTypes"
import Box from "../Box"
import Divider from "../Divider"
import HStack from "../HStack"
import Icon from "../Icon"
import InputField from "../InputField"
import Picker from "../Picker"
import PrimaryText from "../PrimaryText"
import VStack from "../VStack"

interface TextBoxProps extends ThemeProps {
    inputRows: TextBoxRowProps[]
    setValues?: (values: (prevValues: textBoxStateType) => textBoxStateType) => void
    alignInputRight?: boolean
    sheet?: boolean
}

interface InputContainerProps {
    align?: boolean
}

const TextBox = ({ inputRows, setValues, forceTheme, alignInputRight, sheet }: TextBoxProps) => {
    return (
        <Box sheet={sheet}>
            {inputRows.map((row, index) => {
                return (
                    <VStack key={row.name + index}>
                        {index > 0 && <Divider thickness={row.divider} />}
                        <SpacedHStack>
                            <ContentContainer>
                                <HStack>
                                    <Icon name={row.icon} size={24} rotation={row.icon === "arrow" ? 45 : 0} />
                                    <PrimaryText>{row.name}</PrimaryText>
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
