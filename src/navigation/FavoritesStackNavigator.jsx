import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { FavoritesScreen, MealDetailScreens } from '../screens';
import defaultScreenOptions from './defaultOptions';

const Stack = createStackNavigator();

export default function FavoritesStackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="FavoriteMeals"
      screenOptions={defaultScreenOptions}
    >
      <Stack.Screen
        name="FavoriteMeals"
        component={FavoritesScreen}
        options={{ title: 'Your Favorites' }}
      />
      <Stack.Screen name="MealDetail" component={MealDetailScreens} />
    </Stack.Navigator>
  );
}
