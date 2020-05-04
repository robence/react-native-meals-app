import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, Platform } from 'react-native';
import Colors from '../constants/Colors';

const FilterSwitch = ({ label, value, onValueChange }) => {
  return (
    <View style={styles.filterContainer}>
      <Text>{label}</Text>
      <Switch
        trackColor={{ true: Colors.primaryColor }}
        thumbColor={Platform.OS === 'android' ? Colors.primaryColor : ''}
        value={value}
        onValueChange={onValueChange}
      />
    </View>
  );
};

export default function FiltersScreen() {
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available Filters / Restrictions</Text>
      <FilterSwitch
        label="Gluten-free"
        value={isGlutenFree}
        onValueChange={(newItem) => setIsGlutenFree(newItem)}
      />
      <FilterSwitch
        label="Lactose-free"
        value={isLactoseFree}
        onValueChange={(newItem) => setIsLactoseFree(newItem)}
      />
      <FilterSwitch
        label="Vegan"
        value={isVegan}
        onValueChange={(newItem) => setIsVegan(newItem)}
      />
      <FilterSwitch
        label="Vegeterian"
        value={isVegetarian}
        onValueChange={(newItem) => setIsVegetarian(newItem)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    margin: 20,
    textAlign: 'center',
  },
  filterContainer: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 15,
  },
});
