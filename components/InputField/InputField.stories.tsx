import { ComponentMeta, ComponentStory } from "@storybook/react-native"
import React from "react"
import { View } from "react-native"
import { ViewContainer } from "../ViewContainer/ViewContainer"
import { InputField } from "./InputField"

const InputFieldMeta: ComponentMeta<typeof InputField> = {
    title: "InputField",
    component: InputField,
    argTypes: {
        editable: {
            control: {
                type: "boolean",
            },
        },
        placeholderText: {
            control: {
                type: "text",
            },
        },
        keyboardType: {
            control: {
                type: "select",
            },
            options: ["default", "email-address", "numeric", "phone-pad", "number-pad", "decimal-pad"],
        },
        hideText: {
            control: {
                type: "boolean",
            },
        },
        alignRight: {
            control: {
                type: "boolean",
            },
        },
        maxLength: {
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
        editable: true,
        placeholderText: "Placeholder",
        keyboardType: "default",
        hideText: false,
        alignRight: false,
    },
}

export default InputFieldMeta

type InputFieldStory = ComponentStory<typeof InputField>

export const Default: InputFieldStory = (args) => (
    <ViewContainer>
        <View style={{ justifyContent: "center", height: "100%" }}>
            <InputField {...args} />
        </View>
    </ViewContainer>
)
