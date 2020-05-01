import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MealItem from './MealItem';

export default function MealList({ data }) {
  const navigation = useNavigation();

  const onSelectMeal = (item) =>
    navigation.navigate('MealDetail', { mealId: item.id });

  return (
    <View style={styles.listContainer}>
      <FlatList
        data={data}
        style={styles.list}
        renderItem={({ item }) => (
          <MealItem item={item} onSelectMeal={() => onSelectMeal(item)} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  list: {
    width: '100%',
    padding: 10,
    backgroundColor: 'white',
  },
});
