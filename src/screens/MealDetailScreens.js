import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function MealDetailScreens({ navigation }) {
  console.log('navigation');
  console.log(navigation);

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
