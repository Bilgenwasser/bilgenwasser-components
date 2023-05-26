import { text } from "@storybook/addon-knobs"
import { storiesOf } from "@storybook/react-native"
import { View } from "react-native"
import Heading from "../../../src/components/Heading"

storiesOf("Heading", module)
    .addDecorator((getStory) => <View style={{ flex: 1 }}>{getStory()}</View>)
    .add("Light", () => (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Heading forceTheme="light">{text("Text", "Heading")}</Heading>
        </View>
    ))
    .add("Dark", () => (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "black" }}>
            <Heading forceTheme="dark">{text("Text", "Heading")}</Heading>
        </View>
    ))
