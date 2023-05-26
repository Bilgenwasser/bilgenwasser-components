import { text } from "@storybook/addon-knobs"
import { storiesOf } from "@storybook/react-native"
import { View } from "react-native"
import Title from "../../../src/components/Title"

storiesOf("Title", module)
    .addDecorator((getStory) => <View style={{ flex: 1 }}>{getStory()}</View>)
    .add("Light", () => (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Title forceTheme="light">{text("Text", "Title")}</Title>
        </View>
    ))
    .add("Dark", () => (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "black" }}>
            <Title forceTheme="dark">{text("Text", "Title")}</Title>
        </View>
    ))
