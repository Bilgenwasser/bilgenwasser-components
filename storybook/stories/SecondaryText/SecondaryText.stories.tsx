import { text } from "@storybook/addon-knobs"
import { storiesOf } from "@storybook/react-native"
import { View } from "react-native"
import SecondaryText from "../../../src/components/SecondaryText"

storiesOf("SecondaryText", module)
    .addDecorator((getStory) => <View style={{ flex: 1 }}>{getStory()}</View>)
    .add("Default", () => (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <SecondaryText>{text("Text", "SecondaryText")}</SecondaryText>
        </View>
    ))
