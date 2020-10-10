import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {RootContainer} from '../Containers';

const Stack = createStackNavigator();

export const RootNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={RootContainer} />
    </Stack.Navigator>
  );
};
