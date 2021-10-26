import React from 'react';
import View from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import ListOfTopics from '../screens/dashboard/ListOfTopics'
import TestSelect from '../screens/selectTest/TestSelect'

import Login from '../screens/login/Login';
import Register from '../screens/register/Register';
import VideoRecord from '../screens/CameraModule/VideoRecord';
import SingleChoice from '../screens/singlechoice/SingleChoice'
import MultipleChoice from '../screens/multiplechoice/MultipleChoice'
import Assigned_Tests from '../screens/assignedTests/Assigned_Tests';

// import AuthStack from './AuthStack';

const Tab = createBottomTabNavigator();

const MyTabs= ()=> {
  return (
    //   <View style={{flex:1}}>
    // <NavigationContainer>
        <Tab.Navigator initialRouteName={'ListOfTopics'} backBehavior={'order'}
          screenOptions={{tabBarActiveBackgroundColor:'black',}} >

            <Tab.Screen name="Topics" component={ListOfTopics}
                 options={{
                     headerShown:false,
                  tabBarIcon:()=>(<MaterialCommunityIcons name={'home'} color={'steelblue'} size={25} />)}}/>
            <Tab.Screen name="Test Select" component={TestSelect} 
                 options={{headerShown:false,
                 tabBarIcon:()=>(<MaterialCommunityIcons name={'view-list'} color={'steelblue'} size={25}/>)}}/>

             <Tab.Screen name="Assigned" component={Assigned_Tests} 
                 options={{headerShown:false,
                 tabBarIcon:()=>(<MaterialCommunityIcons name={'pencil-box-outline'} color={'steelblue'} size={25}/>)}}/>
     
            <Tab.Screen name="TestScreen" component={SingleChoice} 
                options={{headerShown:false,
                 tabBarIcon:()=>(<MaterialCommunityIcons name={'bookshelf'} color={'steelblue'} size={25}/>)}}/>
             <Tab.Screen name="TestScreen2" component={MultipleChoice} 
                options={{headerShown:false,
                 tabBarIcon:()=>(<MaterialCommunityIcons name={'bookshelf'} color={'steelblue'} size={25}/>)}}/>
            <Tab.Screen name="camera" component={VideoRecord} 
                options={{headerShown:false,
                 tabBarIcon:()=>(<MaterialCommunityIcons name={'camera'} color={'steelblue'} size={25}/>)}}/>
                 
        </Tab.Navigator>
    //  </NavigationContainer>
    // </View>
  );
}
export default MyTabs;