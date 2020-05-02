import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { FiltersScreen } from '../screens';
import defaultScreenOptions from './defaultOptions';
import { HeaderMenu } from '../components';

const Stack = createStackNavigator();

export default function FiltersStackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Filters"
      screenOptions={defaultScreenOptions}
    >
      <Stack.Screen
        name="Filters"
        component={FiltersScreen}
        options={{
          title: 'Filter Meals',
          headerLeft: () => <HeaderMenu />,
        }}
      />
    </Stack.Navigator>
  );
}
