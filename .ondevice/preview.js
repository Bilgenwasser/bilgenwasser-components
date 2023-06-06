import { withBackgrounds } from "@storybook/addon-ondevice-backgrounds"

export const decorators = [withBackgrounds]

export const parameters = {
    backgrounds: {
        default: "white",
        values: [
            { name: "white", value: "white" },
            { name: "black", value: "black" },
        ],
    },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
}
