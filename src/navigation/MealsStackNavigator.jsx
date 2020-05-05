import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
  CategoriesScreens,
  CategoryMealScreens,
  MealDetailScreens,
} from '../screens';
import defaultScreenOptions from './defaultOptions';
import { HeaderMenu } from '../components';

const Stack = createStackNavigator();

export default function MealsStackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Categories"
      screenOptions={defaultScreenOptions}
    >
      <Stack.Screen
        name="Categories"
        component={CategoriesScreens}
        options={({ navigation }) => ({
          title: 'Meal Categories',
          headerLeft: () => <HeaderMenu />,
        })}
      />
      <Stack.Screen name="CategoryMeals" component={CategoryMealScreens} />
      <Stack.Screen
        name="MealDetail"
        component={MealDetailScreens}
        options={({ route }) => {
          return {
            title: route.params.mealTitle,
          };
        }}
      />
    </Stack.Navigator>
  );
}
