import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function FiltersScreens() {
  return (
    <View style={styles.screen}>
      <Text>The categories</Text>
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
