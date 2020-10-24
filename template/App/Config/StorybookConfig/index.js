import { AppRegistry } from 'react-native'

import { getStorybookUI, configure, addDecorator } from '@storybook/react-native'
import { withKnobs } from '@storybook/addon-knobs'

import './rn-addons'

// Enables knobs for all stories
addDecorator(withKnobs)

// Import stories
configure(() => {
  require('./stories')
}, module)

// Refer to https://github.com/storybookjs/storybook/tree/master/app/react-native#start-command-parameters
// To find allowed options for getStorybookUI
const StorybookUI = getStorybookUI({})

AppRegistry.registerComponent('ReactNativeTemplateTypescript', () => StorybookUI)

export default StorybookUI
