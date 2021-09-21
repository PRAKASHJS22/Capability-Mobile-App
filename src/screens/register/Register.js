import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";

import FontAwesome from 'react-native-vector-icons/FontAwesome';

import styles from "./Style";

export default Register =()=> {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../../assests/logo2.png") } />

      <Text style={styles.textStyle}>Capability Test</Text>
 
      <View style={styles.inputView}> 
        <View style={{width:'100%'}}>
         <FontAwesome name="user" size={20} color="#fff"  style={styles.icon}/>
            <TextInput
            style={styles.TextInput}
            placeholder="First Name."
            placeholderTextColor="#fff"
            autoFocus
            /> 
         </View>
      </View>
 
      <View style={styles.inputView}> 
        <View style={{width:'100%'}}>
         <FontAwesome name="envelope" size={20} color="#fff"  style={styles.icon}/>
            <TextInput
            style={styles.TextInput}
            placeholder="Email."
            placeholderTextColor="#fff"
            keyboardType="email-address"
      
     
            /> 
         </View>
      </View>
      <View style={styles.inputView}> 
        <View style={{width:'100%'}}>
         <FontAwesome name="phone" size={20} color="#fff"  style={styles.icon}/>
            <TextInput
            style={styles.TextInput}
            placeholder="Mobile Number."
            placeholderTextColor="#fff"
            keyboardType="number-pad"
            maxLength={10}
         
            /> 
         </View>
      </View>
 
      <View style={styles.inputView}>
        <View style={{width:'100%'}}>
        <FontAwesome name="lock" size={20} color="#fff"  style={styles.icon}/>
                <TextInput
                style={styles.TextInput}
                placeholder="Password."
                placeholderTextColor="#fff"
                secureTextEntry={true}
              
                />
        </View>
      </View>
  
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>Register</Text>
      </TouchableOpacity>
      <View style={{flexDirection:'row'}}>
           <Text style={{marginTop:10,fontSize:16}}>Already have an account ?</Text>
           <TouchableOpacity><Text style={{marginTop:10,color:'blue',fontSize:16,paddingHorizontal:5}}>Login</Text></TouchableOpacity>
      </View>
    </View>
  );
}
