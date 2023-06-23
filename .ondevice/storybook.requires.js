/* do not change this file, it is auto generated by storybook. */

import {
  addArgsEnhancer,
  addDecorator,
  addParameters,
  clearDecorators,
  configure,
} from "@storybook/react-native";

global.STORIES = [
  {
    titlePrefix: "",
    directory: "./components",
    files: "**/*.stories.?(ts|tsx|js|jsx)",
    importPathMatcher:
      "^\\.[\\\\/](?:components(?:\\/(?!\\.)(?:(?:(?!(?:^|\\/)\\.).)*?)\\/|\\/|$)(?!\\.)(?=.)[^/]*?\\.stories\\.(?:ts|tsx|js|jsx)?)$",
  },
];

import "@storybook/addon-ondevice-actions/register";
import "@storybook/addon-ondevice-backgrounds/register";
import "@storybook/addon-ondevice-controls/register";
import "@storybook/addon-ondevice-notes/register";

import { argsEnhancers } from "@storybook/addon-actions/dist/modern/preset/addArgs";

import { decorators, parameters } from "./preview";

if (decorators) {
  if (__DEV__) {
    // stops the warning from showing on every HMR
    require("react-native").LogBox.ignoreLogs([
      "`clearDecorators` is deprecated and will be removed in Storybook 7.0",
    ]);
  }
  // workaround for global decorators getting infinitely applied on HMR, see https://github.com/storybookjs/react-native/issues/185
  clearDecorators();
  decorators.forEach((decorator) => addDecorator(decorator));
}

if (parameters) {
  addParameters(parameters);
}

try {
  argsEnhancers.forEach((enhancer) => addArgsEnhancer(enhancer));
} catch {}

const getStories = () => {
  return {
    "./components/Box/Box.stories.tsx": require("../components/Box/Box.stories.tsx"),
    "./components/Heading/Heading.stories.tsx": require("../components/Heading/Heading.stories.tsx"),
    "./components/Picker/Picker.stories.tsx": require("../components/Picker/Picker.stories.tsx"),
    "./components/PrimaryButton/PrimaryButton.stories.tsx": require("../components/PrimaryButton/PrimaryButton.stories.tsx"),
    "./components/PrimaryText/PrimaryText.stories.tsx": require("../components/PrimaryText/PrimaryText.stories.tsx"),
    "./components/SecondaryButton/SecondaryButton.stories.tsx": require("../components/SecondaryButton/SecondaryButton.stories.tsx"),
    "./components/SecondaryText/SecondaryText.stories.tsx": require("../components/SecondaryText/SecondaryText.stories.tsx"),
    "./components/Title/Title.stories.tsx": require("../components/Title/Title.stories.tsx"),
  };
};

configure(getStories, module, false);
