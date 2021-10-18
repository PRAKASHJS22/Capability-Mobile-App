import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


import AntDesign from 'react-native-vector-icons/AntDesign';
import { Formik } from 'formik';
import * as Yup from 'yup';
import styles from "./Style";
import Register from "../register/Register";

export default Login = ({navigation})=> {

  const [hidePass, setHidePass] = useState(true);

  const validationSchema =  Yup.object().shape({
    email: Yup.string().required().email().label('Email'),
    password: Yup.string().required().min(6).label('Password')
});
  return (

    <TouchableWithoutFeedback onPress={Keyboard.dismiss}> 
    <View style={styles.container}>
      <Image style={styles.image} source={require("../../assests/logo2.png") } />

      <Text style={styles.textStyle}>Capability Test</Text>

      <Formik
          initialValues={{email: '', password: ''}}
          validationSchema={validationSchema}
          onSubmit
          onSubmit={values =>alert(JSON.stringify(values))}
         >
             {({values,
            errors,
            handleChange,
            handleBlur,
            handleSubmit,
            touched,
            isValid,
            isSubmitting,}) => (
             <>
       
             <View style={styles.inputView}> 
             
            <View style={{width:'100%'}}>
           <FontAwesome name="user" size={20} color="#fff"  style={styles.icon}/>
            <TextInput
            style={styles.TextInput}
            value={values.email}
            placeholder="Email."
            placeholderTextColor="#fff"
            keyboardType="email-address"
            // autoFocus
            autoCorrect={false}
            onChangeText={handleChange("email")}
            onBlur={handleBlur('email')}
            // returnKeyType='done'
            />  
             <AntDesign
              name={!errors.email ? 'check' : 'close'}
              size={20}
              style={[styles.icon,{alignSelf:'flex-end',paddingHorizontal:20}]}
              color={!errors.email ?"#fff" :'red'}
            />
         </View>
      </View>
      {errors.email  && touched.email ?<Text style={styles.errorText}>{touched.email && errors.email}</Text>:null}
 
      <View style={styles.inputView}>
        <View style={{width:'100%'}}>
        <FontAwesome name="lock" size={20} color="#fff"  style={styles.icon}/>
            <TextInput
            style={styles.TextInput}
            value={values.password}
            placeholder="Password."
            placeholderTextColor="#fff"
            secureTextEntry={hidePass ? true : false }
            onChangeText={handleChange("password")}
            onBlur={handleBlur('password')}
            />
            <FontAwesome
              name={hidePass ? 'eye-slash' : 'eye'}
              size={20}
              style={[styles.icon,{alignSelf:'flex-end',paddingHorizontal:20}]}
              color="#fff"
              onPress={() => setHidePass(!hidePass)}
        />
        </View>
        

      </View>
         {errors.password && touched.password ?<Text style={styles.errorText}>{touched.email && errors.password}</Text>:null}
 
        <Text style={styles.forgot_button}>Forgot Password ?</Text>

      <TouchableOpacity style={[styles.loginBtn,{backgroundColor:isValid ?'tomato':'grey'}]} onPress={handleSubmit} disabled={!isValid}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>
      
      <View style={{flexDirection:'row'}}>
           <Text style={{marginTop:10,fontSize:16}}>Don't have an account ?</Text>
           <TouchableOpacity onPress={()=>navigation.navigate('Register', { screen: 'Register' })} >
              <Text style={{marginTop:10,color:'blue',fontSize:16,paddingHorizontal:5}}>Register</Text>
           </TouchableOpacity>
      </View>
     
                
             </>
             )}
         </Formik>
      
    </View>
</TouchableWithoutFeedback>
  );
}

 