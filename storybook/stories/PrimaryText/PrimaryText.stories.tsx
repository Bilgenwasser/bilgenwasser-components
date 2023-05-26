import { text } from "@storybook/addon-knobs"
import { storiesOf } from "@storybook/react-native"
import { View } from "react-native"
import PrimaryText from "../../../src/components/PrimaryText"

storiesOf("PrimaryText", module)
    .addDecorator((getStory) => <View style={{ flex: 1 }}>{getStory()}</View>)
    .add("Light", () => (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <PrimaryText forceTheme="light">{text("Text", "PrimaryText")}</PrimaryText>
        </View>
    ))
    .add("Dark", () => (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "black" }}>
            <PrimaryText forceTheme="dark">{text("Text", "PrimaryText")}</PrimaryText>
        </View>
    ))
