import { ComponentMeta, ComponentStory } from "@storybook/react-native"
import React from "react"
import { SecondaryText } from "./SecondaryText"

const SecondaryTextMeta: ComponentMeta<typeof SecondaryText> = {
    title: "SecondaryText",
    component: SecondaryText,
}

export default SecondaryTextMeta

type SecondaryTextStory = ComponentStory<typeof SecondaryText>

export const Default: SecondaryTextStory = () => <SecondaryText>SecondaryText</SecondaryText>
