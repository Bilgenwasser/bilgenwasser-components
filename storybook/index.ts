import { withKnobs } from "@storybook/addon-knobs"
import { addDecorator, configure, getStorybookUI } from "@storybook/react-native"

import "./rn-addons"

// enables knobs for all stories
addDecorator(withKnobs)

// import stories
configure(() => {
    require("./stories")
}, module)

// Refer to https://github.com/storybookjs/react-native/tree/master/app/react-native#getstorybookui-options
// To find allowed options for getStorybookUI
const StorybookUIRoot = getStorybookUI({
    // @ts-ignore
    asyncStorage:
        require("@react-native-async-storage/async-storage").default || require("react-native").AsyncStorage || null,
})

export default StorybookUIRoot
