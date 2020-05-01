import { Platform } from 'react-native';
import Colors from '../constants/Colors';

const screenOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : 'white',
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
};

export default screenOptions;
