import React from 'react'
import {View} from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

import Login from '../screens/login/Login';
import Register from '../screens/register/Register';

const AuthStack=()=>{
    return(
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login}
             options={ {   headerShown:false } }/>
            <Stack.Screen name="Signup" component={Register} />
       </Stack.Navigator>

    )
}

export default AuthStack