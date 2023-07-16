import { useEffect } from "react"
import { FlatList, Switch, TouchableOpacity } from "react-native"
import styled from "styled-components"
import { useModalSheet } from "../../shared/useModalSheet"
import { useToggles } from "../../utils/hooks/useToggles"
import { universalColors } from "../../utils/theming/colors"
import { Heading } from "../Heading/Heading"
import { Icon } from "../Icon/Icon"
import { ModalSheet } from "../ModalSheet/ModalSheet"
import { PrimaryText } from "../PrimaryText/PrimaryText"
import { HStack } from "../Stacks/HStack"
import { VStack } from "../Stacks/VStack"
import { ToggleListProps } from "./ToggleList.types"

export const ToggleList = ({ inputRows, setValues }: ToggleListProps) => {
    const { isEnabled, toggleSwitch } = useToggles(inputRows)

    useEffect(() => {
        setValues && setValues(isEnabled)
    }, [isEnabled])

    return (
        <PaddedVStack>
            {inputRows.map((row, index) => {
                const { isModalSheetVisible, setIsModalSheetVisible, triggerSheet } = useModalSheet()
                const { text, info } = row

                return (
                    <SpacedHStack key={text + index}>
                        <HStack>
                            <PrimaryText>{text}</PrimaryText>
                            {info && (
                                <TouchableOpacity onPress={triggerSheet}>
                                    <Icon name="info" size={32} />
                                </TouchableOpacity>
                            )}
                        </HStack>
                        <Switch
                            trackColor={{ false: universalColors.SystemGray, true: universalColors.Olive }}
                            thumbColor={universalColors.SystemWhite}
                            onValueChange={() => toggleSwitch(index)}
                            value={isEnabled[index]}
                        />
                        {info && (
                            <ModalSheet
                                snapPoints={["40%"]}
                                isSheetVisible={isModalSheetVisible}
                                triggerSheet={triggerSheet}
                                setIsSheetVisible={setIsModalSheetVisible}
                            >
                                <VStack>
                                    <StyledHStack>
                                        <Icon name="info" size={32} />
                                        <Heading>{text}</Heading>
                                    </StyledHStack>
                                    <FlatList
                                        scrollEnabled={false}
                                        data={info}
                                        renderItem={({ item }) => {
                                            return (
                                                <ItemContainer>
                                                    <Heading>{"\u2022"}</Heading>
                                                    <PrimaryText>{item}</PrimaryText>
                                                </ItemContainer>
                                            )
                                        }}
                                    />
                                </VStack>
                            </ModalSheet>
                        )}
                    </SpacedHStack>
                )
            })}
        </PaddedVStack>
    )
}

const SpacedHStack = styled(HStack)`
    width: 100%;
    padding: 3px 0;
    justify-content: space-between;
`

const ItemContainer = styled(HStack)`
    width: 94%;
`

const StyledHStack = styled(HStack)`
    margin-bottom: 10px;
`

const PaddedVStack = styled(HStack)`
    padding: 7px 0;
`
