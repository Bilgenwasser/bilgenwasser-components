import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react-native"
import { Heading } from "./Heading"

const HeadingMeta: ComponentMeta<typeof Heading> = {
    title: "Heading",
    component: Heading,
}

export default HeadingMeta

type HeadingStory = ComponentStory<typeof Heading>

export const Default: HeadingStory = () => <Heading>Heading</Heading>
