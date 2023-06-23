import { ComponentMeta, ComponentStory } from "@storybook/react-native"
import React from "react"
import { View } from "react-native"
import { ViewContainer } from "../ViewContainer/ViewContainer"
import { DatePicker } from "./DatePicker"

const DatePickerMeta: ComponentMeta<typeof DatePicker> = {
    title: "DatePicker",
    component: DatePicker,
    argTypes: {
        date: {
            control: {
                type: "date",
            },
        },
        setDate: {
            actions: {
                handles: ["setDate"],
            },
        },
        maxDate: {
            control: {
                type: "date",
            },
        },
        minDate: {
            control: {
                type: "date",
            },
        },
    },
    args: {
        date: new Date(),
        setDate: () => {},
    },
}

export default DatePickerMeta

type DatePickerStory = ComponentStory<typeof DatePicker>

export const Default: DatePickerStory = (args) => (
    <ViewContainer>
        <View style={{ justifyContent: "center", height: "100%" }}>
            <DatePicker {...args} />
        </View>
    </ViewContainer>
)
