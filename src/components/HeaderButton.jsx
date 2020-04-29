/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Platform, View, Button, StyleSheet } from 'react-native';
import {
  HeaderButtons,
  HeaderButton,
  Item,
  HiddenItem,
} from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';

import Colors from '../constants/Colors';

export default function CustomHeaderButton(props) {
  return (
    <HeaderButton
      {...props}
      IconComponent={Ionicons}
      iconSize={23}
      color={Platform.OS === 'android' ? 'white' : Colors.primaryColor}
    />
  );
}
