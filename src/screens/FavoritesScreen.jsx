import React from 'react';
import { useSelector } from 'react-redux';
import { View, StyleSheet } from 'react-native';
import { MealList, DefaultText } from '../components';

export default function FavoritesScreen() {
  const favoriteMeals = useSelector((state) => state.meals.favoriteMeals);
  if (!favoriteMeals || favoriteMeals.length === 0) {
    return (
      <View style={styles.content}>
        <DefaultText>No favourite meals found. Start adding some!</DefaultText>
      </View>
    );
  }

  return <MealList data={favoriteMeals} />;
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
