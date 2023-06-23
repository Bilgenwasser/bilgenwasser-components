import { ComponentMeta, ComponentStory } from "@storybook/react-native"
import React from "react"
import { PrimaryText } from "./PrimaryText"

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

export const Default: PrimaryTextStory = (args) => <PrimaryText {...args}>{args.children}</PrimaryText>
