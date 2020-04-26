import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function CategoriesScreens({ navigation }) {
  return (
    <View style={styles.screen}>
      <Text>The Categories Screen!</Text>
      <Button
        title="Go to Meals!"
        onPress={() => navigation.navigate('CategoryMeals')}
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