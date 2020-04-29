import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import { Item, HeaderButtons } from 'react-navigation-header-buttons';
import { MEALS } from '../data/dummy-data';
import { HeaderButton } from '../components';

export default function MealDetailScreens({ navigation, route }) {
  const { mealId } = route.params;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: selectedMeal.title,
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="Update count"
            iconName="ios-star"
            onPress={() => {
              console.log('Mark as favorite');
            }}
          />
        </HeaderButtons>
      ),
    });
  }, [navigation, selectedMeal.title]);

  return (
    <View style={styles.screen}>
      <Text>The Meal Details Screen!</Text>
      <Button
        title="Go Back to Categories"
        onPress={() => navigation.popToTop()}
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
});
