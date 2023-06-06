import { ComponentMeta, ComponentStory } from "@storybook/react-native"
import React from "react"
import { PrimaryText } from "./PrimaryText"

const PrimaryTextMeta: ComponentMeta<typeof PrimaryText> = {
    title: "PrimaryText",
    component: PrimaryText,
}

export default PrimaryTextMeta

type PrimaryTextStory = ComponentStory<typeof PrimaryText>

export const Default: PrimaryTextStory = () => <PrimaryText>PrimaryText</PrimaryText>
