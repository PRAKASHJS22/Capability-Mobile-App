import React,{useState} from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";

import styles from "./Style";

import {Picker} from '@react-native-picker/picker';
import DropDownPicker from 'react-native-dropdown-picker';
import { Card } from "react-native-elements";

const LevelSelect = () =>{
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Select', value: 1, disabled: true},
    {label: 'Beginner', value: 'apple'},
    {label: 'Intermediate', value: 'banana'},
    {label: 'Expert', value: 'Expert'}
  ]);
  return (  
    <View style={styles.container}>

    <View style={{flexDirection:'column',justifyContent:'center'}}>
        <View style={styles.topicename}>    
            <Text style={styles.topicenametext}>SELECTED TOPIC</Text>
        </View>
        <View style={{flexDirection:'row',justifyContent:'center'}}>
                <View>
                    <Card containerStyle={styles.Rigistercard}>
                            <View style={styles.tiles}>
                                <Image
                                style={styles.imageThumbnail}
                                    source={require('../../assests/react.png')}
                                />
                            </View>       
                    </Card>
                </View>
            <View style={[styles.topicename,{backgroundColor:'#1976D2',width:'50%',height:'90%'}]}>
                    <Text style={[styles.topicenametext,]}>REACT NATIVE</Text>
            </View>
        </View>
    </View>      
        <View style={styles.topicename}>    
         <Text style={styles.topicenametext}>ASSIGNED SKILL LEVEL</Text>
        </View>
        <View  style={styles.dropdownstyle}>
            <DropDownPicker
            open={open}
            placeholder='Select'
            placeholderStyle={{
            color: "grey",
            fontWeight: "bold"
            }}
            // closeAfterSelecting={true}
            // itemSeparator={true}
            listItemContainer={{
            height: 40,
            }}
            selectedItemLabelStyle={{
            fontWeight: "bold",
            backgroundColor:'#5AAAFF'
            }}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            />
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-around',marginVertical:40}}>

            <TouchableOpacity style={styles.loginBtn}>
                <Text style={styles.loginText}>Continue</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.loginBtn,{backgroundColor:'#DC3545'}]}>
                <Text style={styles.loginText}>Cancel</Text>
            </TouchableOpacity>
        </View>

    </View>
  );
}

export default LevelSelect;