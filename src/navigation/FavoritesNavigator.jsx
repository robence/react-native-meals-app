import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Platform } from 'react-native';
import { FavoritesScreen, MealDetailScreens } from '../screens';
import Colors from '../constants/Colors';

const Stack = createStackNavigator();

export default function FavoritesNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Categories"
      screenOptions={{
        headerStyle: {
          backgroundColor:
            Platform.OS === 'android' ? Colors.primaryColor : 'white',
        },
        headerTintColor:
          Platform.OS === 'android' ? 'white' : Colors.primaryColor,
      }}
    >
      <Stack.Screen
        name="FavoriteMeals"
        component={FavoritesScreen}
        options={{ title: 'Favorite Meals' }}
      />
      <Stack.Screen name="MealDetail" component={MealDetailScreens} />
    </Stack.Navigator>
  );
}
