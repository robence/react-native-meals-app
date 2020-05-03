/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

import BottomTabNavigator from './BottomTabNavigator';
import FiltersStackNavigator from './FiltersStackNavigator';
import Colors from '../constants/Colors';

const Drawer = createDrawerNavigator();

const Menu = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem label="Help" onPress={() => {}} />
    </DrawerContentScrollView>
  );
};

export default function MyDrawer() {
  return (
    <Drawer.Navigator
      initialRouteName="Tabs"
      drawerContent={(props) => <Menu {...props} />}
      drawerContentOptions={{
        activeTintColor: Colors.accentColor,
        labelStyle: {
          fontFamily: 'open-sans',
        },
      }}
    >
      <Drawer.Screen
        name="Tabs"
        component={BottomTabNavigator}
        options={{
          drawerLabel: 'Meals',
        }}
      />
      <Drawer.Screen name="Filters" component={FiltersStackNavigator} />
    </Drawer.Navigator>
  );
}
