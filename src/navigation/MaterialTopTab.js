import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import ListOfTopics  from '../screens/dashboard/ListOfTopics'
import AssignedTests from '../screens/assignedTests/AssignedTests';
import Instruction from '../screens/instruction/Instruction';
import userResults from '../screens/results/userresults/UserResults';

const Tab = createMaterialTopTabNavigator();

const  TopTab=()=>{
  return (

    // <NavigationContainer>
        <Tab.Navigator
            screenOptions={{
            tabBarLabelStyle: { fontSize: 12 },
            // tabBarItemStyle: { width: 100 },
            // tabBarStyle: { backgroundColor: 'powderblue' },
            // swipeEnabled:false
            

            }}

        //     screenOptions={({ route }) => ({
        //   tabBarIcon: ({ focused, size, color }) => {
        //     let iconName;
        //     if (route.name === 'ListOfTopics') {
        //       iconName = 'autoprefixer';
        //       size = focused ? 25 : 20;
        //       // color = focused ? '#f0f' : '#555';
        //     } else if (route.name === 'AssignedTests') {
        //       iconName = 'btc';
        //       size = focused ? 25 : 20;
        //       // color = focused ? '#f0f' : '#555';
        //     }
        //     return (
        //       <FontAwesome5
        //         name={iconName}
        //         size={size}
        //         color={color}
        //       />
        //     )
        //   }
          
        // })}

        tabBarOptions={{
          activeTintColor: 'orange',
          inactiveTintColor: '#555',
          activeBackgroundColor: '#fff',
          inactiveBackgroundColor: '#999',
          showLabel: true,
          labelStyle: { fontSize: 14 },
          showIcon: true,
        }}
        activeColor='#f0edf6'
        inactiveColor='#3e2465'
        barStyle={{ backgroundColor: '#694fad' }}
               
        >
            <Tab.Screen  name="Topics" component={ListOfTopics} />
            <Tab.Screen name="Assigned Tests" component={AssignedTests} />
            <Tab.Screen name="Instructions" component={Instruction} />
            {/* <Tab.Screen name="Results" component={userResults} /> */}
        </Tab.Navigator>
    // </NavigationContainer>
  );
}

export default TopTab;