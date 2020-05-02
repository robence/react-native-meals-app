import React from 'react';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { useNavigation } from '@react-navigation/native';
import HeaderButton from './HeaderButton';

export default function HeaderMenu() {
  const navigation = useNavigation();

  return (
    <HeaderButtons HeaderButtonComponent={HeaderButton}>
      <Item
        title="Menu"
        iconName="ios-menu"
        onPress={() => {
          navigation.openDrawer();
        }}
      />
    </HeaderButtons>
  );
}
