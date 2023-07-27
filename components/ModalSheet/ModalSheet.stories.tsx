import { ComponentMeta, ComponentStory } from "@storybook/react-native"
import React from "react"
import { View } from "react-native"
import Heading from "../Heading/Heading"
import PrimaryButton from "../PrimaryButton/PrimaryButton"
import ViewContainer from "../ViewContainer/ViewContainer"
import ModalSheet from "./ModalSheet"
import { useModalSheet } from "./useModalSheet"

const ModalSheetMeta: ComponentMeta<typeof ModalSheet> = {
    title: "ModalSheet",
    component: ModalSheet,
    argTypes: {
        snapPoints: {
            control: {
                type: "array",
            },
        },
        forceTheme: {
            control: {
                type: "radio",
            },
            options: ["light", "dark"],
        },
    },
    args: {
        snapPoints: ["50%", "92%"],
    },
}

export default ModalSheetMeta

type ModalSheetStory = ComponentStory<typeof ModalSheet>

export const Default: ModalSheetStory = (args) => {
    const { triggerSheet, isModalSheetVisible, setIsModalSheetVisible } = useModalSheet()

    return (
        <ViewContainer>
            <View style={{ justifyContent: "center", height: "100%" }}>
                <PrimaryButton onPress={triggerSheet}>Open Modal</PrimaryButton>
            </View>
            <ModalSheet
                triggerSheet={triggerSheet}
                isSheetVisible={isModalSheetVisible}
                setIsSheetVisible={setIsModalSheetVisible}
                snapPoints={args.snapPoints}
                forceTheme={args.forceTheme}
            >
                <View style={{ justifyContent: "center", alignSelf: "center", height: "50%" }}>
                    <Heading>ModalSheet</Heading>
                </View>
            </ModalSheet>
        </ViewContainer>
    )
}
