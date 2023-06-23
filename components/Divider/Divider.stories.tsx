import { ComponentMeta, ComponentStory } from "@storybook/react-native"
import React from "react"
import { View } from "react-native"
import { Box } from "../Box/Box"
import { PrimaryText } from "../PrimaryText/PrimaryText"
import { ViewContainer } from "../ViewContainer/ViewContainer"
import { Divider } from "./Divider"

const DividerMeta: ComponentMeta<typeof Divider> = {
    title: "Divider",
    component: Divider,
    argTypes: {
        forceTheme: {
            control: {
                type: "radio",
            },
            options: ["light", "dark"],
        },
    },
}

export default DividerMeta

type DividerStory = ComponentStory<typeof Divider>

export const Thin: DividerStory = (args) => (
    <ViewContainer>
        <View style={{ flex: 1, width: "100%", justifyContent: "center" }}>
            <Box forceTheme={args.forceTheme}>
                <View style={{ alignSelf: "center" }}>
                    <PrimaryText forceTheme={args.forceTheme}>Content</PrimaryText>
                </View>
                <Divider thickness="thin" forceTheme={args.forceTheme} />
                <View style={{ alignSelf: "center" }}>
                    <PrimaryText forceTheme={args.forceTheme}>Content</PrimaryText>
                </View>
            </Box>
        </View>
    </ViewContainer>
)

export const Bold: DividerStory = (args) => (
    <ViewContainer>
        <View style={{ flex: 1, width: "100%", justifyContent: "center" }}>
            <Box forceTheme={args.forceTheme}>
                <View style={{ alignSelf: "center" }}>
                    <PrimaryText forceTheme={args.forceTheme}>Content</PrimaryText>
                </View>
                <Divider thickness="bold" forceTheme={args.forceTheme} />
                <View style={{ alignSelf: "center" }}>
                    <PrimaryText forceTheme={args.forceTheme}>Content</PrimaryText>
                </View>
            </Box>
        </View>
    </ViewContainer>
)
