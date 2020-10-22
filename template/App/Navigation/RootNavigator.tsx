import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { RootContainer } from '../Containers'

export type RootNavigatorParams = {
  Root: undefined
}

const Stack = createStackNavigator<RootNavigatorParams>()

export const RootNavigator = (): JSX.Element => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={RootContainer} />
    </Stack.Navigator>
  )
}
