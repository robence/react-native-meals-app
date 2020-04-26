import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
  CategoriesScreens,
  CategoryMealsScreens,
  MealDetailScreens,
} from '../screens';

const Stack = createStackNavigator();

export default function MealsNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Categories" component={CategoriesScreens} />
      <Stack.Screen name="CategoryMeals" component={CategoryMealsScreens} />
      <Stack.Screen name="MealDetail" component={MealDetailScreens} />
    </Stack.Navigator>
  );
}
