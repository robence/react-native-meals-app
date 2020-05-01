import React from 'react';
import { StyleSheet } from 'react-native';
import { MealList } from '../components';
import { MEALS } from '../data/dummy-data';

export default function FavoritesScreen({ navigation }) {
  return <MealList data={MEALS} />;
}

const styles = StyleSheet.create({});
