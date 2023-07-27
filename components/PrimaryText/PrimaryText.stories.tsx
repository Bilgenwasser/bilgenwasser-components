import { ComponentMeta, ComponentStory } from "@storybook/react-native"
import React from "react"
import PrimaryText from "./PrimaryText"
import { View } from "react-native"
import ViewContainer from "../ViewContainer/ViewContainer"

const PrimaryTextMeta: ComponentMeta<typeof PrimaryText> = {
    title: "PrimaryText",
    component: PrimaryText,
    argTypes: {
        children: {
            control: {
                type: "text",
            },
        },
        forceColor: {
            control: {
                type: "color",
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
        children: "PrimaryText",
    },
}

export default PrimaryTextMeta

type PrimaryTextStory = ComponentStory<typeof PrimaryText>

export const Default: PrimaryTextStory = (args) => (
    <ViewContainer>
        <View style={{ justifyContent: "center", height: "100%" }}>
            <PrimaryText {...args}>{args.children}</PrimaryText>
        </View>
    </ViewContainer>
)
