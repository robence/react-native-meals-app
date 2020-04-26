import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';

export default function CategoryMealsScreens({ navigation, route }) {
  const { categoryId } = route.params;
  const selectedCategory = CATEGORIES.find(({ id }) => categoryId === id);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: selectedCategory.title,
    });
  }, [navigation, categoryId, selectedCategory.title]);

  return (
    <View style={styles.screen}>
      <Text>{selectedCategory.title}</Text>
      <Button
        title="Go to Meal Detail!"
        onPress={() => navigation.navigate('MealDetail')}
      />
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
