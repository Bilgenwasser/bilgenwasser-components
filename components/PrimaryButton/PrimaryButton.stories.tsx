import { ComponentMeta, ComponentStory } from "@storybook/react-native"
import React from "react"
import { View } from "react-native"
import { ViewContainer } from "../ViewContainer/ViewContainer"
import { PrimaryButton } from "./PrimaryButton"

const PrimaryButtonMeta: ComponentMeta<typeof PrimaryButton> = {
    title: "PrimaryButton",
    component: PrimaryButton,
    argTypes: {
        children: {
            control: {
                type: "text",
            },
        },
        smallMargin: {
            control: {
                type: "boolean",
                presetColors: ["#DA644A", "#3993DD", "#44AF69"],
            },
        },
        disabled: {
            control: {
                type: "boolean",
            },
        },
        onPress: {
            actions: {
                handles: ["onPress"],
            },
        },
    },
    args: {
        children: "PrimaryButton",
        smallMargin: false,
        disabled: false,
        onPress: () => {},
    },
}

export default PrimaryButtonMeta

type PrimaryButtonStory = ComponentStory<typeof PrimaryButton>

export const Default: PrimaryButtonStory = (args) => (
    <ViewContainer>
        <View style={{ justifyContent: "center", height: "100%" }}>
            <PrimaryButton {...args}>{args.children}</PrimaryButton>
        </View>
    </ViewContainer>
)
