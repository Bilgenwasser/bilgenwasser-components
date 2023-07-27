import { ComponentMeta, ComponentStory } from "@storybook/react-native"
import React from "react"
import Heading from "./Heading"

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

export const Default: HeadingStory = (args) => <Heading {...args}>{args.children}</Heading>
