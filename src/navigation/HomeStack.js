import React from 'react'
import {View,ImageBackground} from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

import ListOfTopics from '../screens/dashboard/ListOfTopics'
import TestSelect from '../screens/selectTest/TestSelect'
import AuthStack from './AuthStack';


export const LogoTitle=()=>{
    return(
        <ImageBackground
      style={{ width: "100%", height:"100%", resizeMethod:"cover"}}
      source={require('../assests/logo2.png')}
    />
    )

}

const HomeStack=()=>{
    return(
        <Stack.Navigator>
            <Stack.Screen name="List of Topics " component={AuthStack}
             options={{ headerShown:false, headerBackground:(props) => <LogoTitle {...props} />  }}

            />
             {/* <Stack.Screen name="Test Select" component={TestSelect}   options={{ headerShown:false  }} /> */}
         </Stack.Navigator>
    )

}

export default HomeStack