import { ComponentMeta, ComponentStory } from "@storybook/react-native"
import React from "react"
import { View } from "react-native"
import ViewContainer from "../ViewContainer/ViewContainer"
import SecondaryButton from "./SecondaryButton"

const SecondaryButtonMeta: ComponentMeta<typeof SecondaryButton> = {
    title: "SecondaryButton",
    component: SecondaryButton,
    argTypes: {
        children: {
            control: {
                type: "text",
            },
        },
        color: {
            control: {
                type: "color",
                presetColors: ["#DA644A", "#3993DD", "#44AF69"],
            },
        },
        onPress: {
            actions: {
                handles: ["onPress"],
            },
        },
    },
    args: {
        children: "SecondaryButton",
        color: "#DA644A",
        onPress: () => {},
    },
}

export default SecondaryButtonMeta

type SecondaryButtonStory = ComponentStory<typeof SecondaryButton>

export const Default: SecondaryButtonStory = (args) => (
    <ViewContainer>
        <View style={{ justifyContent: "center", height: "100%" }}>
            <SecondaryButton {...args}>{args.children}</SecondaryButton>
        </View>
    </ViewContainer>
)
