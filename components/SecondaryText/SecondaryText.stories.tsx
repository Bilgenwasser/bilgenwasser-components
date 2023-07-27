import { ComponentMeta, ComponentStory } from "@storybook/react-native"
import React from "react"
import SecondaryText from "./SecondaryText"
import { View } from "react-native"
import ViewContainer from "../ViewContainer/ViewContainer"

const SecondaryTextMeta: ComponentMeta<typeof SecondaryText> = {
    title: "SecondaryText",
    component: SecondaryText,
    argTypes: {
        children: {
            control: {
                type: "text",
            },
        },
    },
    args: {
        children: "SecondaryText",
    },
}

export default SecondaryTextMeta

type SecondaryTextStory = ComponentStory<typeof SecondaryText>

export const Default: SecondaryTextStory = (args) => (
    <ViewContainer>
        <View style={{ justifyContent: "center", height: "100%" }}>
            <SecondaryText>{args.children}</SecondaryText>
        </View>
    </ViewContainer>
)
