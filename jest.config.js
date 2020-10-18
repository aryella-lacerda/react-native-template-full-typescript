module.exports = {
  collectCoverage: true,
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  setupFilesAfterEnv: ['<rootDir>/Tests/SetupMocks.tsx', '@testing-library/jest-native/extend-expect'],
}
