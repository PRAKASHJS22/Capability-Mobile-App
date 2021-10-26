import React,{useState} from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import moment from 'moment'
import { Card } from "react-native-elements";
import styles from "./Style";
const Instruction = ()=>{

    // const date = new Date().getDate();
    // const month = new Date().getMonth() + 1; //Current Month
    // const year = new Date().getFullYear(); //Current Year
    const date= moment().format("YYYY-MM-D" )

    return(
        <View style={styles.container}>

            <View style={{justifyContent:'flex-start',marginHorizontal:10,marginVertical:10}}>
                <Text style={styles.text}>Name :Prakash</Text>
                <Text style={styles.text}>Test ID :ReactJS-Beginner-4</Text>
                <Text style={styles.text}>Topic Name :ReactJS</Text>
                <Text style={styles.text}>Skill Level :Beginner</Text>
                {/* <Text style={styles.text}>Date :{date}{month}{year}</Text> */}
                <Text style={styles.text}>Date :{date} </Text>
            </View>
        <View style={styles.topicename}>    
            <Text style={[styles.topicenametext]}>Test Rules</Text>
        </View>

        <Card containerStyle={styles.Rigistercard}>
            <View style={{
                flexDirection:'column',
                }}>
                <Text style={styles.rules}>1) Test will contain upto 20 questions.</Text>
                <Text style={styles.rules}>2) Questions will be combination of single choice
                and multiple choice.</Text>
                <Text style={styles.rules}>3) You can skip questions, which will be considered 
                as not attempted.</Text>
                <Text style={styles.rules}>4) You can not go back once moved 
                to another question.</Text>
                <Text style={styles.rules}>5) Results will apear instantly once the test
                is completed.</Text>
        
            </View>

            <View style={{flexDirection:'row',justifyContent:'space-around',marginVertical:10}}>

                    <TouchableOpacity style={styles.loginBtn}>
                        <Text style={styles.loginText}>Start Test</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.loginBtn,{backgroundColor:'#DC3545'}]}>
                        <Text style={styles.loginText}>Cancel Test</Text>
                    </TouchableOpacity>
            </View>
         </Card>
      
       
    </View>
    )
}

export default Instruction;