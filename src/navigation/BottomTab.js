import React from 'react';
import View, { ScrollView } from 'react-native'
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
import AssignedTests from '../screens/assignedTests/AssignedTests';
import QueryQuestions from '../screens/query/QueryQuestions'
import userResults from '../screens/results/userresults/UserResults';
import TopTab from '../navigation/MaterialTopTab'
import viewResults from '../screens/results/viewresults/ViewResults';
import barchart from '../screens/visuals/barchart';
// import AuthStack from './AuthStack';

const Tab = createBottomTabNavigator();

const MyTabs= ()=> {
  return (
    //   <View style={{flex:1}}>
    // <NavigationContainer>

        <Tab.Navigator initialRouteName={'TopTab'} backBehavior={'order'}
          screenOptions={{tabBarActiveBackgroundColor:'black',tabBarVisibilityAnimationConfig:'show'}} 
          
        >

            <Tab.Screen name="Topics" component={TopTab}
                 options={{
                     headerShown:false,
                  tabBarIcon:()=>(<MaterialCommunityIcons name={'home'} color={'steelblue'} size={25} />)}}/>

            <Tab.Screen name="Test Select" component={TestSelect} 
                 options={{headerShown:false,
                 tabBarIcon:()=>(<MaterialCommunityIcons name={'view-list'} color={'steelblue'} size={25}/>)}}/>

             {/* <Tab.Screen name="Assigned" component={AssignedTests} 
                 options={{headerShown:false,
                 tabBarIcon:()=>(<MaterialCommunityIcons name={'pencil-box-outline'} color={'steelblue'} size={25}/>)}}/> */}
     
            <Tab.Screen name="TestScreen" component={SingleChoice} 
                options={{headerShown:false,
                 tabBarIcon:()=>(<MaterialCommunityIcons name={'bookshelf'} color={'steelblue'} size={25}/>)}}/>

             <Tab.Screen name="TestScreen2" component={MultipleChoice} 
                options={{headerShown:false,
                 tabBarIcon:()=>(<MaterialCommunityIcons name={'bookshelf'} color={'steelblue'} size={25}/>)}}/>

             <Tab.Screen name="Query" component={QueryQuestions} 
                options={{headerShown:false,
                 tabBarIcon:()=>(<MaterialCommunityIcons name={'pen'} color={'steelblue'} size={25}/>)}}/>

             <Tab.Screen name="Results" component={userResults} 
                options={{headerShown:false,
                 tabBarIcon:()=>(<MaterialCommunityIcons name={'pen'} color={'steelblue'} size={25}/>)}}/>

             <Tab.Screen name="View" component={viewResults} 
                options={{headerShown:false,
                 tabBarIcon:()=>(<MaterialCommunityIcons name={'pen'} color={'steelblue'} size={25}/>)}}/>

             <Tab.Screen name="Bar chart" component={barchart} 
                options={{headerShown:false,
                 tabBarIcon:()=>(<MaterialCommunityIcons name={'chart-bar'} color={'steelblue'} size={25}/>)}}/>

            <Tab.Screen name="camera" component={VideoRecord} 
                options={{headerShown:false,
                 tabBarIcon:()=>(<MaterialCommunityIcons name={'camera'} color={'steelblue'} size={25}/>)}}/>
                 
        </Tab.Navigator>
      
    //  </NavigationContainer>

   
    // </View>
  );
}
export default MyTabs;