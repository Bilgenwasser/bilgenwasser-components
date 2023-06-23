import { ComponentMeta, ComponentStory } from "@storybook/react-native"
import React from "react"
import { View } from "react-native"
import styled from "styled-components"
import { PrimaryButton } from "./PrimaryButton"

const PrimaryButtonMeta: ComponentMeta<typeof PrimaryButton> = {
    title: "PrimaryButton",
    component: PrimaryButton,
    argTypes: {
        children: {
            control: {
                type: "text",
            },
        },
        smallMargin: {
            control: {
                type: "boolean",
                presetColors: ["#DA644A", "#3993DD", "#44AF69"],
            },
        },
        disabled: {
            control: {
                type: "boolean",
            },
        },
        onPress: {
            actions: {
                handles: ["onPress"],
            },
        },
    },
    args: {
        children: "PrimaryButton",
        smallMargin: false,
        disabled: false,
        onPress: () => {},
    },
}

export default PrimaryButtonMeta

type PrimaryButtonStory = ComponentStory<typeof PrimaryButton>

export const Default: PrimaryButtonStory = (args) => (
    <StyledView>
        <PrimaryButton smallMargin={args.smallMargin} disabled={args.disabled} onPress={args.onPress}>
            {args.children}
        </PrimaryButton>
    </StyledView>
)

const StyledView = styled(View)`
    flex: 1;
    justify-content: center;
    align-items: center;
    padding: 0 4%;
`
