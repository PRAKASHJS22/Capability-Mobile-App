import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Formik } from 'formik';
import * as Yup from 'yup';

import styles from "./Style";

import Login from "../login/Login";

const Register =({navigation})=> {

  const [hidePass, setHidePass] = useState(true);

  const mobileregx = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
  const validationSchema =  Yup.object().shape({
    name: Yup.string().required().label('First Name'),
    email: Yup.string().required().email().label('Email'),
    mobile: Yup.string().required().matches(mobileregx, 'Mobile number is not valid').min(10).max(10).label('Mobile'),
    password: Yup.string().required().min(6).label('Password')
});

  return (
  
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}> 
    <View style={styles.container}>
      <Image style={styles.image} source={require("../../assests/logo2.png") } />

      <Text style={styles.textStyle}>Capability Test</Text>
     
      <Formik
          initialValues={{name:'',mobile:'',email: '', password: ''}}
          validationSchema={validationSchema}

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
            value={values.name}
            placeholder="First Name."
            placeholderTextColor="#fff"
            onChangeText={handleChange("name")}
            onBlur={handleBlur('name')}
            // autoFocus
            autoCorrect={false}
            // returnKeyType='done'
            />  
         </View>
      </View>
      {errors.name  && touched.name ?<Text style={styles.errorText}>{touched.name && errors.name}</Text>:null}
             <View style={styles.inputView}> 
             
            <View style={{width:'100%'}}>
           <FontAwesome name="envelope" size={20} color="#fff"  style={styles.icon}/>
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
         </View>
      
      
      </View>
      {errors.email  && touched.email ?<Text style={styles.errorText}>{touched.email && errors.email}</Text>:null}
 
      <View style={styles.inputView}> 
        <View style={{width:'100%'}}>
         <FontAwesome name="phone" size={20} color="#fff"  style={styles.icon}/>
            <TextInput
            style={styles.TextInput}
            placeholder="Mobile Number."
            placeholderTextColor="#fff"
            keyboardType="number-pad"
            maxLength={10}
            onChangeText={handleChange("mobile")}
            onBlur={handleBlur('mobile')}
         
            /> 
         </View>
         </View>
         {errors.mobile  && touched.mobile ?<Text style={styles.errorText}>{touched.mobile && errors.mobile}</Text>:null}
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

      <TouchableOpacity style={[styles.loginBtn,{backgroundColor:isValid ?'tomato':'grey'}]} disabled={!isValid} onPress={handleSubmit}>
        <Text style={styles.loginText}>Register</Text>
      </TouchableOpacity>
      
    
      <View style={{flexDirection:'row'}}>
           <Text style={{marginTop:10,fontSize:16}}>Already have an account ?</Text>
           <TouchableOpacity onPress={()=> navigation.navigate('Login', { screen: 'Login' })}><Text style={{marginTop:10,color:'blue',fontSize:16,paddingHorizontal:5}}>Login</Text></TouchableOpacity>
      </View>
                
             </>
             )}
         </Formik>
     
      
    </View>
</TouchableWithoutFeedback>
  );
}

export default Register;
