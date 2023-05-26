import {text} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react-native';
import {View} from "react-native";
import {Heading} from "../../../src/components";

storiesOf('Heading', module)
    .addDecorator((getStory) => <View style={{flex: 1}}>{getStory()}</View>)
    .add('with text', () => (
        <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
            <Heading>{text('Text', 'Heading')}</Heading>
        </View>
    ))
