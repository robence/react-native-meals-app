import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { CATEGORIES, MEALS } from '../data/dummy-data';
import { MealItem } from '../components';

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
  }, [navigation, categoryId, selectedCategory.title]);

  return (
    <View style={styles.screen}>
      <FlatList
        data={displayedMeals}
        style={styles.list}
        renderItem={({ item }) => (
          <MealItem item={item} onSelectMeal={() => {}} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  list: {
    width: '100%',
    padding: 10,
    backgroundColor: 'white',
  },
});
