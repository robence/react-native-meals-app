import React from 'react';
import { useSelector } from 'react-redux';
import { MealList } from '../components';

export default function FavoritesScreen() {
  const favoriteMeals = useSelector((state) => state.meals.favoriteMeals);

  return <MealList data={favoriteMeals} />;
}
