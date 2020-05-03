import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import { Ionicons } from '@expo/vector-icons';
import { Platform } from 'react-native';
import MealsStackNavigator from './MealsStackNavigator';
import FavoritesStackNavigator from './FavoritesStackNavigator';
import Colors from '../constants/Colors';

const Tab =
  Platform.OS === 'ios'
    ? createBottomTabNavigator()
    : createMaterialBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      // Material options
      activeColor={Colors.white}
      barStyle={{
        backgroundColor: Colors.primaryColor,
      }}
      // iOS options
      tabBarOptions={{
        activeTintColor: Colors.primaryColor,
        labelStyle: {
          fontFamily: 'open-sans',
        },
      }}
    >
      <Tab.Screen
        name="Meals"
        component={MealsStackNavigator}
        options={{
          tabBarIcon: (tabInfo) => (
            <Ionicons name="ios-restaurant" size={25} color={tabInfo.color} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesStackNavigator}
        options={{
          tabBarIcon: (tabInfo) => (
            <Ionicons name="ios-star" size={25} color={tabInfo.color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
