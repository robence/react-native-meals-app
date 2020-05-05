import React from 'react';
import { useSelector } from 'react-redux';

import { CATEGORIES } from '../data/dummy-data';
import { MealList } from '../components';

export default function CategoryMealScreens({ navigation, route }) {
  const { categoryId } = route.params;

  const availableMeals = useSelector((state) => state.meals.filteredMeals);

  const selectedCategory = CATEGORIES.find(({ id }) => categoryId === id);
  const displayedMeals = availableMeals.filter((meal) =>
    meal.categoryIds.includes(categoryId)
  );

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: selectedCategory.title,
    });
  }, [navigation, selectedCategory.title]);

  return <MealList data={displayedMeals} />;
}
