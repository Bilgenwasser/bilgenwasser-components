import { ComponentMeta, ComponentStory } from "@storybook/react-native"
import React from "react"
import { View } from "react-native"
import styled from "styled-components"
import { SecondaryButton } from "./SecondaryButton"

const SecondaryButtonMeta: ComponentMeta<typeof SecondaryButton> = {
    title: "SecondaryButton",
    component: SecondaryButton,
    argTypes: {
        children: {
            control: {
                type: "text",
            },
        },
        color: {
            control: {
                type: "color",
                presetColors: ["#DA644A", "#3993DD", "#44AF69"],
            },
        },
        onPress: {
            actions: {
                handles: ["onPress"],
            },
        },
    },
    args: {
        children: "SecondaryButton",
        color: "#DA644A",
        onPress: () => {},
    },
}

export default SecondaryButtonMeta

type SecondaryButtonStory = ComponentStory<typeof SecondaryButton>

export const Default: SecondaryButtonStory = (args) => (
    <StyledView>
        <SecondaryButton color={args.color} onPress={args.onPress}>
            {args.children}
        </SecondaryButton>
    </StyledView>
)

const StyledView = styled(View)`
    flex: 1;
    justify-content: center;
    align-items: center;
`
