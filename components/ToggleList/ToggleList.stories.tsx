import { ComponentMeta, ComponentStory } from "@storybook/react-native"
import React, { useState } from "react"
import { View } from "react-native"
import { ViewContainer } from "../ViewContainer/ViewContainer"
import { ToggleList } from "./ToggleList"

const ToggleListMeta: ComponentMeta<typeof ToggleList> = {
    title: "ToggleList",
    component: ToggleList,
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
    },
    args: {
        inputRows: [
            {
                text: "Item 1",
                info: ["This is item 1"],
                default: false,
            },
            {
                text: "Item 2",
                info: ["This is item 2", "This is item 2", "This is item 2"],
                default: true,
            },
        ],
        setValues: () => {},
    },
}

export default ToggleListMeta

type ToggleListStory = ComponentStory<typeof ToggleList>

export const Default: ToggleListStory = (args) => {
    const [values, setValues] = useState<boolean[]>(args.inputRows.map((row) => row.default ?? false))

    return (
        <ViewContainer>
            <View style={{ justifyContent: "center", height: "100%", width: "100%" }}>
                <ToggleList
                    setValues={setValues}
                    inputRows={args.inputRows.map((row, index) => ({ ...row, default: values[index]! }))}
                />
            </View>
        </ViewContainer>
    )
}
