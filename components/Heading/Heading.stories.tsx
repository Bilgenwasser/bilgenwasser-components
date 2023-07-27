import { ComponentMeta, ComponentStory } from "@storybook/react-native"
import React from "react"
import Heading from "./Heading"
import { View } from "react-native"
import ViewContainer from "../ViewContainer/ViewContainer"

const HeadingMeta: ComponentMeta<typeof Heading> = {
    title: "Heading",
    component: Heading,
    argTypes: {
        children: {
            control: {
                type: "text",
            },
        },
        noMargin: {
            control: {
                type: "boolean",
            },
        },
        alignCenter: {
            control: {
                type: "boolean",
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
        children: "Heading",
    },
}

export default HeadingMeta

type HeadingStory = ComponentStory<typeof Heading>

export const Default: HeadingStory = (args) => (
    <ViewContainer>
        <View style={{ justifyContent: "center", height: "100%" }}>
            <Heading {...args}>{args.children}</Heading>
        </View>
    </ViewContainer>
)
