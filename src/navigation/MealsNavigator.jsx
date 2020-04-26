import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Platform } from 'react-native';
import {
  CategoriesScreens,
  CategoryMealsScreens,
  MealDetailScreens,
} from '../screens';
import Colors from '../constants/Colors';

const Stack = createStackNavigator();

export default function MealsNavigator() {
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
        name="Categories"
        component={CategoriesScreens}
        options={{ title: 'Meal Categories' }}
      />
      <Stack.Screen name="CategoryMeals" component={CategoryMealsScreens} />
      <Stack.Screen name="MealDetail" component={MealDetailScreens} />
    </Stack.Navigator>
  );
}
