module.exports = {
  testRunner: 'jest',
  runnerConfig: 'e2e/config.json',
  configurations: {
    'ios.sim.debug': {
      binaryPath: 'ios/build/Build/Products/Debug-iphonesimulator/ReactNativeTemplateTypescript.app',
      build:
        'xcodebuild -workspace ios/ReactNativeTemplateTypescript.xcworkspace -scheme ReactNativeTemplateTypescript -configuration Debug -sdk iphonesimulator -derivedDataPath ios/build',
      type: 'ios.simulator',
      device: {
        type: 'iPhone 11',
      },
    },
    'ios.sim.release': {
      binaryPath: 'ios/build/Build/Products/Release-iphonesimulator/ReactNativeTemplateTypescript.app',
      build:
        'xcodebuild -workspace ios/ReactNativeTemplateTypescript.xcworkspace -scheme ReactNativeTemplateTypescript -configuration Release -sdk iphonesimulator -derivedDataPath ios/build',
      type: 'ios.simulator',
      device: {
        type: 'iPhone 11',
      },
    },
  },
}
