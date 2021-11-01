import  React from "react";
import {View,StyleSheet, Dimensions} from 'react-native'
import {
    DrawerContentScrollView,
    DrawerItem,
    DrawerHeaderProps,
    useDrawerProgress
} from '@react-navigation/drawer'

import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper';
import Animated from "react-native-reanimated";

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import TopTab from "./MaterialTopTab";

const DrawerCOntent=(props)=>{

   // const paperTheme = useTheme();
  
    return(
     
     <View style={{flex:1}}>
        <DrawerContentScrollView {...props}>
            <View style={styles.drawerContent}>
                <View style={styles.userInfoSection}>
                    <View style={{flexDirection:'row',marginTop: 15}}>
                        <Avatar.Image 
                            source={require('../assests/profilepic.jpg')}
                            size={80}
                        />
                        <View style={{marginLeft:15, flexDirection:'column'}}>
                            <Title style={styles.title}>Prakash J</Title>
                            <Caption style={styles.caption}>@pj</Caption>
                        </View>
                    </View>
                </View>

                <Drawer.Section style={styles.drawerSection}>
                    <DrawerItem 
                        icon={({color, size}) => (
                            <Icon 
                            name="home-outline" 
                            color={color}
                            size={size}
                            />
                        )}
                        label="Home"
                        onPress={() => {props.navigation.navigate('Home')}}
                        pressColor={'blue'}
                        activeBackgroundColor={'black'}
                        inactiveBackgroundColor={'white'}
                    //    activeTintColor={'red'}
                    //    inactiveTintColor={'yellow'}
                    />
                    <DrawerItem 
                        icon={({color, size}) => (
                            <Icon 
                            name="account-outline" 
                            color={color}
                            size={size}
                            />
                        )}
                        label="Login"
                        pressColor={'blue'}
                        activeBackgroundColor={'black'}
                        inactiveBackgroundColor={'white'}
                        // activeTintColor={'red'}
                        //  inactiveTintColor={'yellow'}
                       
                        onPress={() => {props.navigation.navigate('Login')}}
                    />
                    {/* <DrawerItem 
                        icon={({color, size}) => (
                            <Icon 
                            name="bookmark-outline" 
                            color={color}
                            size={size}
                            />
                        )}
                        label="Bookmarks"
                        pressColor={'blue'}
                        activeBackgroundColor={'black'}
                        inactiveBackgroundColor={'white'}
                        
                       
                        // onPress={() => {props.navigation.navigate('BookmarkScreen')}}
                    /> */}
                    <DrawerItem 
                        icon={({color, size}) => (
                            <AntDesign 
                            name="setting" 
                            color={color}
                            size={size}
                            />
                        )}
                        label="Settings"
                        pressColor={'blue'}
                        activeBackgroundColor={'black'}
                        inactiveBackgroundColor={'white'}
                       
                        // onPress={() => {props.navigation.navigate('SettingsScreen')}}
                    />
                    <DrawerItem 
                        icon={({color, size}) => (
                            <Icon 
                            name="account-check-outline" 
                            color={color}
                            size={size}
                            />
                        )}
                        label="Support"
                        pressColor={'blue'}
                        activeBackgroundColor={'black'}
                        inactiveBackgroundColor={'white'}
                       
                        // onPress={() => {props.navigation.navigate('SupportScreen')}}
                    />
                    
                </Drawer.Section>
                {/* <Drawer.Section title="Preferences">
                    <TouchableRipple onPress={() => {toggleTheme()}}>
                        <View style={styles.preference}>
                            <Text>Dark Theme</Text>
                            <View pointerEvents="none">
                                <Switch value={paperTheme.dark}/>
                            </View>
                        </View>
                    </TouchableRipple>
                </Drawer.Section> */}
            </View>
        </DrawerContentScrollView>
        <Drawer.Section style={styles.bottomDrawerSection}>
            <DrawerItem 
                icon={({color, size}) => (
                    <Icon 
                    name="exit-to-app" 
                    color={color}
                    size={size}
                    />
                )}
                label="Sign Out"
                onPress={() => {alert('Signed out')}}
            />
        </Drawer.Section>
     </View> 

    )
}

export default DrawerCOntent;


const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom:0,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });