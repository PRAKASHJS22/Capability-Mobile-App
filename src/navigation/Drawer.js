import React from 'react'
import {View} from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';

import { NavigationContainer } from '@react-navigation/native';
const Drawer = createDrawerNavigator();
import Login from '../screens/login/Login';
import Register from '../screens/register/Register';
import HomeStack  from './HomeStack';
// import CusomDrawer from './CusomDrawer'

const DrawerStack=()=> {
    return (

        // <NavigationContainer>
          <Drawer.Navigator>
              <Drawer.Screen name="Login " component={Login} />
              <Drawer.Screen name="Signup" component={Register}/>
          </Drawer.Navigator>
      // </NavigationContainer>
    );
  }
export default DrawerStack;
