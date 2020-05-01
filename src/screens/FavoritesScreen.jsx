import React from 'react';
import { MealList } from '../components';
import { MEALS } from '../data/dummy-data';

export default function FavoritesScreen() {
  const favMealIds = ['m1', 'm2'];
  const favoriteMeals = MEALS.filter(({ id }) => favMealIds.includes(id));

  return <MealList data={favoriteMeals} />;
}
