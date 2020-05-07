import React, { useCallback } from 'react';
import { ScrollView, Image, View, Text, StyleSheet } from 'react-native';

import { Item, HeaderButtons } from 'react-navigation-header-buttons';
import { useSelector, useDispatch } from 'react-redux';
import { HeaderButton, MealDetail, DefaultText } from '../components';
import { toggleFavorite } from '../ducks/meals';

const ListItem = ({ children }) => {
  return (
    <View style={styles.listItem}>
      <DefaultText>{children}</DefaultText>
    </View>
  );
};

export default function MealDetailScreens({ navigation, route }) {
  const { mealId } = route.params;

  const meals = useSelector((state) => state.meals.meals);
  const selectedMeal = meals.find((meal) => meal.id === mealId);

  const dispatch = useDispatch(toggleFavorite());

  const toggleFavoriteHandler = useCallback(() => {
    dispatch(toggleFavorite(mealId));
  }, [dispatch, mealId]);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="Update count"
            iconName="ios-star"
            onPress={toggleFavoriteHandler}
          />
        </HeaderButtons>
      ),
    });
  }, [navigation, toggleFavoriteHandler]);

  return (
    <ScrollView>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <MealDetail item={selectedMeal} containerStyle={styles.details} />
      <Text style={styles.title}>Ingredients</Text>
      {selectedMeal.ingredients.map((ingredient) => (
        <ListItem key={ingredient}>{ingredient}</ListItem>
      ))}
      <Text style={styles.title}>Steps</Text>
      {selectedMeal.steps.map((step) => (
        <ListItem key={step}>{step}</ListItem>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
  },
  details: {
    padding: 15,
    justifyContent: 'space-around',
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    textAlign: 'center',
  },
  listItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
  },
});
