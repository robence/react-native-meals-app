import React from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableNativeFeedback,
  Platform,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function CategoryGridTile({ item }) {
  let TouchableCmp = TouchableOpacity;

  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }

  const { id, color, title } = item;
  const navigation = useNavigation();

  return (
    <View style={styles.gridItem}>
      <TouchableCmp
        style={styles.touchable}
        onPress={() => navigation.navigate('CategoryMeals', { categoryId: id })}
      >
        <View style={{ ...styles.container, ...{ backgroundColor: color } }}>
          <Text style={styles.title} numberOfLines={2}>
            {title}
          </Text>
        </View>
      </TouchableCmp>
    </View>
  );
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 10,
    overflow:
      Platform.OS === 'android' && Platform.Version > 21 ? 'hidden' : 'visible',
    elevation: 5,
  },
  touchable: {
    flex: 1,
  },
  container: {
    flex: 1,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 3,
    padding: 15,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: Dimensions.get('window').width / 22,
    textAlign: 'right',
  },
});
