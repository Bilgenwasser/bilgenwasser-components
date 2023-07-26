import { ComponentMeta, ComponentStory } from "@storybook/react-native"
import React, { useState } from "react"
import { View } from "react-native"
import { textBoxStateType } from "../../types/primitivTypes"
import { ViewContainer } from "../ViewContainer/ViewContainer"
import { TextBox } from "./TextBox"

const TextBoxMeta: ComponentMeta<typeof TextBox> = {
    title: "TextBox",
    component: TextBox,
    argTypes: {
        inputRows: {
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
        alignInputRight: {
            control: {
                type: "boolean",
            },
        },
        sheet: {
            control: {
                type: "boolean",
            },
        },
    },
    args: {
        inputRows: [
            {
                icon: "user",
                name: "Name",
                placeholderText: "Enter your name",
                value: "John Doe",
            },
            {
                icon: "mail",
                name: "Email",
                placeholderText: "Enter your email",
                value: "john@doe.com",
            },
        ],
        setValues: () => {},
    },
}

export default TextBoxMeta

type TextBoxStory = ComponentStory<typeof TextBox>

export const Default: TextBoxStory = (args) => {
    const [values, setValues] = useState<textBoxStateType>(args.inputRows.map((row) => row.value))

    return (
        <ViewContainer>
            <View style={{ justifyContent: "center", height: "100%", width: "100%" }}>
                <TextBox
                    setValues={setValues}
                    inputRows={args.inputRows.map((row, index) => ({ ...row, value: values[index]! }))}
                    forceTheme={args.forceTheme}
                    alignInputRight={args.alignInputRight}
                    sheet={args.sheet}
                />
            </View>
        </ViewContainer>
    )
}
