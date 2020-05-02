import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { FavoritesScreen, MealDetailScreens } from '../screens';
import defaultScreenOptions from './defaultOptions';
import { HeaderMenu } from '../components';

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
        options={{
          title: 'Your Favorites',
          headerLeft: () => <HeaderMenu />,
        }}
      />
      <Stack.Screen name="MealDetail" component={MealDetailScreens} />
    </Stack.Navigator>
  );
}
