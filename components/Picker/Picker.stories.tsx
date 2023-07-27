import { ComponentMeta, ComponentStory } from "@storybook/react-native"
import React from "react"
import { View } from "react-native"
import ViewContainer from "../ViewContainer/ViewContainer"
import Picker from "./Picker"

const PickerMeta: ComponentMeta<typeof Picker> = {
    title: "Picker",
    component: Picker,
    argTypes: {
        options: {
            control: {
                type: "object",
            },
        },
        placeholderText: {
            control: {
                type: "text",
            },
        },
        value: {
            control: {
                type: "object",
            },
        },
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
        setValue: {
            actions: {
                handles: ["setValue"],
            },
        },
    },
    args: {
        options: [
            {
                text: "Sunny",
                icon: "sun",
            },
            {
                text: "Partly Cloudy",
                icon: "partly-cloudy",
            },
            {
                text: "Mostly Cloudy",
                icon: "clouds",
            },
            {
                text: "Overcast",
                icon: "cloud",
            },
            {
                text: "Showers",
                icon: "rain-cloud",
            },
            {
                text: "Rain",
                icon: "rain",
            },
            {
                text: "Thunderstorm",
                icon: "storm",
            },
            {
                text: "Snow",
                icon: "winter",
            },
            {
                text: "Fog",
                icon: "fog",
            },
        ],
        placeholderText: "Weather",
        sheet: false,
        setValue: () => {},
    },
}

export default PickerMeta

type PickerStory = ComponentStory<typeof Picker>

export const Default: PickerStory = (args) => (
    <ViewContainer>
        <View style={{ justifyContent: "center", height: "100%" }}>
            <Picker {...args} />
        </View>
    </ViewContainer>
)
