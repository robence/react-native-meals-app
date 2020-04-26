import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function CategoryMealsScreens() {
  return (
    <View style={styles.screen}>
      <Text>The Cagegory Meal Screen!</Text>
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
