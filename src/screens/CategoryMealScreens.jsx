import React from 'react';
import { CATEGORIES, MEALS } from '../data/dummy-data';
import { MealList } from '../components';

export default function CategoryMealScreens({ navigation, route }) {
  const { categoryId } = route.params;

  const selectedCategory = CATEGORIES.find(({ id }) => categoryId === id);
  const displayedMeals = MEALS.filter((meal) =>
    meal.categoryIds.includes(categoryId)
  );

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: selectedCategory.title,
    });
  }, [navigation, selectedCategory.title]);

  return <MealList data={displayedMeals} />;
}
