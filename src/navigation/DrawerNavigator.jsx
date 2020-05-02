import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import BottomTabNavigator from './BottomTabNavigator';
import FiltersStackNavigator from './FiltersStackNavigator';

const Drawer = createDrawerNavigator();

export default function MyDrawer() {
  return (
    <Drawer.Navigator initialRouteName="Tabs">
      <Drawer.Screen name="Tabs" component={BottomTabNavigator} />
      <Drawer.Screen name="Filters" component={FiltersStackNavigator} />
    </Drawer.Navigator>
  );
}
