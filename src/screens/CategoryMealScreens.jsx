import React from 'react';
import { useSelector } from 'react-redux';

import { View, Text, StyleSheet } from 'react-native';
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

  if (displayedMeals.length === 0) {
    return (
      <View style={styles.content}>
        <Text>No meals found, maybe check your filters?</Text>
      </View>
    );
  }

  return <MealList data={displayedMeals} />;
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
