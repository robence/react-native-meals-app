import React from 'react';
import { FlatList } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import { CategoryGridTile } from '../components';

export default function CategoriesScreens() {
  return (
    <FlatList
      data={CATEGORIES}
      renderItem={({ item }) => <CategoryGridTile item={item} />}
      numColumns={2}
    />
  );
}
