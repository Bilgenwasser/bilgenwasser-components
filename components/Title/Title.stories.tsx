import { ComponentMeta, ComponentStory } from "@storybook/react-native"
import React from "react"
import { Title } from "./Title"

const TitleMeta: ComponentMeta<typeof Title> = {
    title: "Title",
    component: Title,
}

export default TitleMeta

type TitleStory = ComponentStory<typeof Title>

export const Default: TitleStory = () => <Title>Title</Title>
