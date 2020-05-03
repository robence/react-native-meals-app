import React from 'react';
import { View, StyleSheet } from 'react-native';
import DefaultText from './DefaultText';

export default function MealDetail({ item, containerStyle }) {
  const { duration, complexity, affordability } = item;

  return (
    <View style={{ ...styles.mealDetail, ...containerStyle }}>
      <DefaultText>{duration}m</DefaultText>
      <DefaultText>{complexity.toUpperCase()}</DefaultText>
      <DefaultText>{affordability.toUpperCase()}</DefaultText>
    </View>
  );
}

const styles = StyleSheet.create({
  mealDetail: {
    flexDirection: 'row',
  },
});
