import { useEffect } from "react"
import { FlatList, Switch, TouchableOpacity } from "react-native"
import styled from "styled-components"
import { ToggleRow } from "../../types/inputRowTypes"
import { useModalSheet } from "../../utils/hooks/useModalSheet"
import { useToggles } from "../../utils/hooks/useToggles"
import { universalColors } from "../../utils/theming/colors"
import Heading from "../Heading"
import HStack from "../HStack"
import Icon from "../Icon"
import ModalSheet from "../ModalSheet"
import PrimaryText from "../PrimaryText"
import VStack from "../VStack"

interface ToggleListProps {
    inputRows: ToggleRow[]
    setValues?: (values: boolean[]) => void
}

const ToggleList = ({ inputRows, setValues }: ToggleListProps) => {
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

export default ToggleList

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
