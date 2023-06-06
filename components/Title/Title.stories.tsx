import { ComponentMeta, ComponentStory } from "@storybook/react-native"
import React from "react"
import { Title } from "./Title"

const TitleMeta: ComponentMeta<typeof Title> = {
    title: "Title",
    component: Title,
    argTypes: {
        children: {
            control: {
                type: "text",
            },
        },
        smallMargin: {
            control: {
                type: "boolean",
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
        children: "Title",
    },
}

export default TitleMeta

type TitleStory = ComponentStory<typeof Title>

export const Default: TitleStory = (args) => (
    <Title smallMargin={args.smallMargin} forceTheme={args.forceTheme}>
        {args.children}
    </Title>
)
