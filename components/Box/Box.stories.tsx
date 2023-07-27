import { ComponentMeta, ComponentStory } from "@storybook/react-native"
import React from "react"
import { View } from "react-native"
import Box from "./Box"
import Heading from "../Heading/Heading"
import ViewContainer from "../ViewContainer/ViewContainer"

const BoxMeta: ComponentMeta<typeof Box> = {
    title: "Box",
    component: Box,
    argTypes: {
        forceTheme: {
            control: {
                type: "radio",
            },
            options: ["light", "dark"],
        },
        sheet: {
            control: {
                type: "boolean",
            },
        },
        transparent: {
            control: {
                type: "boolean",
            },
        },
        noMargin: {
            control: {
                type: "boolean",
            },
        },
    },
}

export default BoxMeta

type BoxStory = ComponentStory<typeof Box>

export const Default: BoxStory = (args) => (
    <ViewContainer>
        <View style={{ flex: 1, width: "100%", justifyContent: "center" }}>
            <Box {...args}>
                <Heading alignCenter forceTheme={args.forceTheme}>
                    Box
                </Heading>
                <Heading alignCenter forceTheme={args.forceTheme}>
                    Content
                </Heading>
            </Box>
        </View>
    </ViewContainer>
)
