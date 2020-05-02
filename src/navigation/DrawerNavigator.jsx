import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

import BottomTabNavigator from './BottomTabNavigator';
import FiltersStackNavigator from './FiltersStackNavigator';

const Drawer = createDrawerNavigator();

// /* eslint-disable */
// function CustomDrawerContent(props) {
//   console.log('props');
//   console.log(props);

//   return null;

//   return (
//     <DrawerContentScrollView {...props}>
//       <DrawerItemList {...props} />
//       {/* <DrawerItem label="Help" onPress={() => {}} /> */}
//     </DrawerContentScrollView>
//   );
// }

export default function MyDrawer() {
  return (
    <Drawer.Navigator
      initialRouteName="Tabs"
      // TODO: find out why runs out of memory
      // drawerContent={(props) => {
      //   console.log(props);
      // }}
    >
      <Drawer.Screen
        name="Tabs"
        component={BottomTabNavigator}
        options={{
          drawerLabel: 'Meals',
        }}
      />
      <Drawer.Screen name="Filters" component={FiltersStackNavigator} />
    </Drawer.Navigator>
  );
}
