import React, { useEffect } from "react"
import { FlatList, StyleSheet, Switch, TouchableOpacity } from "react-native"
import { universalColors } from "../../shared/colors"
import Heading from "../Heading/Heading"
import HStack from "../HStack/HStack"
import Icon from "../Icon/Icon"
import ModalSheet from "../ModalSheet/ModalSheet"
import { useModalSheet } from "../ModalSheet/useModalSheet"
import PrimaryText from "../PrimaryText/PrimaryText"
import VStack from "../VStack/VStack"
import { ToggleListProps } from "./ToggleList.types"
import { useToggles } from "./useToggles"

const ToggleList = ({ inputRows, setValues }: ToggleListProps) => {
    const { isEnabled, toggleSwitch } = useToggles(inputRows)

    useEffect(() => {
        setValues && setValues(isEnabled)
    }, [isEnabled])

    return (
        <VStack style={styles.paddedVStack}>
            {inputRows.map((row, index) => {
                const { isModalSheetVisible, setIsModalSheetVisible, triggerSheet } = useModalSheet()
                const { text, info } = row

                return (
                    <HStack style={styles.spacedHStack} key={text + index}>
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
                                    <HStack style={styles.styledHStack}>
                                        <Icon name="info" size={32} />
                                        <Heading>{text}</Heading>
                                    </HStack>
                                    <FlatList
                                        scrollEnabled={false}
                                        data={info}
                                        renderItem={({ item }) => {
                                            return (
                                                <HStack style={styles.itemContainer}>
                                                    <Heading>{"\u2022"}</Heading>
                                                    <PrimaryText>{item}</PrimaryText>
                                                </HStack>
                                            )
                                        }}
                                    />
                                </VStack>
                            </ModalSheet>
                        )}
                    </HStack>
                )
            })}
        </VStack>
    )
}

export default ToggleList

const styles = StyleSheet.create({
    spacedHStack: {
        width: "100%",
        paddingVertical: 3,
        justifyContent: "space-between",
    },
    itemContainer: {
        width: "94%",
    },
    styledHStack: {
        marginBottom: 10,
    },
    paddedVStack: {
        paddingVertical: 7,
    },
})
