import { ComponentMeta, ComponentStory } from "@storybook/react-native"
import React from "react"
import { View } from "react-native"
import { IconOptions } from "../Icon/IconOptions"
import ViewContainer from "../ViewContainer/ViewContainer"
import ExtendableTextBox from "./ExtendableTextBox"

const ExtendableTextBoxMeta: ComponentMeta<typeof ExtendableTextBox> = {
    title: "ExtendableTextBox",
    component: ExtendableTextBox,
    argTypes: {
        defaultRowCount: {
            control: {
                type: "number",
            },
        },
        minRowCount: {
            control: {
                type: "number",
            },
        },
        maxRowCount: {
            control: {
                type: "number",
            },
        },
        icon: {
            control: {
                type: "select",
            },
            options: IconOptions,
        },
        placeholderText1: {
            control: {
                type: "text",
            },
        },
        placeholderText2: {
            control: {
                type: "text",
            },
        },
        pickerItems: {
            control: {
                type: "object",
            },
        },
        setValues: {
            actions: {
                handles: ["setValues"],
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
        defaultRowCount: 3,
        minRowCount: 1,
        maxRowCount: 5,
        icon: "user",
        placeholderText1: "Name",
        placeholderText2: "Role",
        pickerItems: [
            { text: "Feuer", icon: "fire" },
            { text: "Wassereinbruch", icon: "sea-waves" },
            { text: "MOB", icon: "float" },
            { text: "keine Notrolle", icon: "question-mark" },
        ],
        setValues: () => {},
    },
}

export default ExtendableTextBoxMeta

type ExtendableTextBoxStory = ComponentStory<typeof ExtendableTextBox>

export const Default: ExtendableTextBoxStory = (args) => (
    <ViewContainer>
        <View style={{ justifyContent: "center", height: "100%" }}>
            <ExtendableTextBox {...args} />
        </View>
    </ViewContainer>
)
