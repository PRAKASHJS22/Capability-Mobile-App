import React from 'react'
import {View} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator} from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { getHeaderTitle } from '@react-navigation/elements';
import AuthStack from './AuthStack'
import DrawerStack from './Drawer';
import MyTabs from './BottomTab';
import {Tab} from 'react-native-elements/dist/tab/Tab';
import Login from '../screens/login/Login';
import Register from '../screens/register/Register';
import { LogoTitle } from './HomeStack';
import DrawerContent from '../navigation/DrawerContent';


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
// const Tab = createBottomTabNavigator();



export default MainStack=({navigation})=>{


    return(
        <NavigationContainer>
            <Drawer.Navigator initialRouteName={MyTabs}
        
                drawerContent={props => <DrawerContent {...props}/>} 
                   screenOptions={{  
                    drawerStyle: {
                    backgroundColor: '#c6cbef',
                    width: 240,
                    },
                    // drawerActiveBackgroundColor:'red',
                    // drawerInactiveBackgroundColor:'yellow',
                    // drawerPosition:'left',
                    // drawerStatusBarAnimation:'fade',
                    headerStyle: {height: 40,backgroundColor:'#fff',},
                    drawerType:'front', // It shows how the drawer shoud appear
                    overlayColor: 'transparent',

                    // header: ({ navigation, route, options }) => {
                    // const title = getHeaderTitle(options, route.name);
                    //  return <MyHeader title={title} style={options.headerStyle} />;
                    // }
                   
                }}
                >
                <Drawer.Screen name="Home" component={MyTabs}
                 options={
                     {
                         headerShown:true,
                        //  headerTitle:'Home',
                         drawerLabel: 'Home',
                        //  headerLeft:()=>(<MaterialCommunityIcons name="menu" size={30} color="black" onPress={() => navigation.openDrawer()}/>),
                        //  headerBackgroundContainerStyle:</LogoTitle>
                     }
                 }
                />
                <Drawer.Screen name="Login" component={Login} 
                 options={
                    {
                        headerShown:true,
                        // headerLeft:()=>(<MaterialCommunityIcons name="menu" size={30} color="black" onPress={() => navigation.openDrawer()}/>),
                    }
                }
                />
                 <Drawer.Screen name="Signup" component={Register} 
                 options={
                    {
                        headerShown:true,
                        // headerLeft:()=>(<MaterialCommunityIcons name="menu" size={30} color="black" onPress={() => navigation.openDrawer()}/>),
                    }
                }
                />
           </Drawer.Navigator>
        </NavigationContainer>
    )
    
}
