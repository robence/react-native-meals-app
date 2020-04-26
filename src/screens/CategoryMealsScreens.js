import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function CategoryMealsScreens({ navigation }) {
  return (
    <View style={styles.screen}>
      <Text>The Cagegory Meal Screen!</Text>
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
