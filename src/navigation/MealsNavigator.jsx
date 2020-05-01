import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
  CategoriesScreens,
  CategoryMealScreens,
  MealDetailScreens,
} from '../screens';
import defaultScreenOptions from './defaultOptions';

const Stack = createStackNavigator();

export default function MealsNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Categories"
      screenOptions={defaultScreenOptions}
    >
      <Stack.Screen
        name="Categories"
        component={CategoriesScreens}
        options={{ title: 'Meal Categories' }}
      />
      <Stack.Screen name="CategoryMeals" component={CategoryMealScreens} />
      <Stack.Screen name="MealDetail" component={MealDetailScreens} />
    </Stack.Navigator>
  );
}
