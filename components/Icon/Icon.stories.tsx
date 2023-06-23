import { ComponentMeta, ComponentStory } from "@storybook/react-native"
import React from "react"
import { View } from "react-native"
import { ViewContainer } from "../ViewContainer/ViewContainer"
import { Icon } from "./Icon"
import { IconOptions } from "./IconOptions"

const IconMeta: ComponentMeta<typeof Icon> = {
    title: "Icon",
    component: Icon,
    argTypes: {
        name: {
            control: {
                type: "select",
            },
            options: IconOptions,
        },
        size: {
            control: {
                type: "number",
            },
        },
        rotation: {
            control: {
                type: "number",
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
        name: "sail-boat",
        size: 24,
        rotation: 0,
    },
}

export default IconMeta

type IconStory = ComponentStory<typeof Icon>

export const Default: IconStory = (args) => (
    <ViewContainer>
        <View style={{ justifyContent: "center", height: "100%" }}>
            <Icon {...args} />
        </View>
    </ViewContainer>
)
