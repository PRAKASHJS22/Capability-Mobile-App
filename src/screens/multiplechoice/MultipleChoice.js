import React,{useEffect,useState} from "react";
import { View, Text,TouchableOpacity} from "react-native";
import { Card } from "react-native-elements";
import CountDown from 'react-native-countdown-component';
import moment from 'moment';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import LinearGradient from 'react-native-linear-gradient';
// import { CheckBox } from 'react-native-elements'
// import { Checkbox } from 'react-native-paper';
import CheckBox from '../../components/CheckBox';

import styles from "./Style";
import { color } from "react-native-elements/dist/helpers";

export default MultipleChoice = ()=>{

    // const [totalDuration, setTotalDuration] = useState(0);

    const [checked, setChecked] = useState(false);

    //  const onPress = () => {setChecked(!checked);}}

    const checkbox = [{
        // color:'red',
        id: '1', // acts as primary key, should be unique and non-empty string
        label: 'props',
        value: 'props',
    }, 
    {
        // color:'red',
        id: '2',
        label: 'elements',
        value: 'elements'
    },
    {
        // color:'red',
        id: '3',
        label: 'component',
        value: 'components'
    },
    {
        // color:'red',
        id: '4',
        label: 'none of the options',
        value: 'none of the options'
    },]


    return( 
       
    <View style={styles.container}>

<LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#080718', '#01759c', '#00d4ff']} style={styles.linearGradient}>
        <View style={styles.headerstyle}>
            <Text style={styles.singlequestion}>1/20</Text>
            <MaterialCommunityIcons size={25} name="timer-outline" style={styles.icon} color='#000'/>
                <CountDown
                    size={14}
                    until={20* 60}
                    onFinish={() => alert('Test Finished')}
                    digitStyle={{backgroundColor: '#FFF'}}
                    digitTxtStyle={{color: 'red'}}
                    timeLabelStyle={{color: 'red', fontWeight: 'bold'}}
                    separatorStyle={{color: 'red'}}
                    timeToShow={['H','M', 'S']}
                    timeLabels={{m: null, s: null}}
                    showSeparator
                />
        </View>

        <View>
            <Text style={styles.singlequestion}>Mutiple Choice Questions</Text>
        </View>
        <Card containerStyle={styles.Rigistercard}>
            <View >
                   <Text style={styles.questionnumber}>Question 1:</Text>   
            </View>
            <View style={{flexWrap:'wrap'}}> 
                <Text style={styles.questions}>What is the smallest building block of ReactJS?</Text>
            </View>
        </Card>   

        <Card containerStyle={styles.Rigistercard}>
        <View style={styles.checkboxcontainer}>
            {/* <CheckBox
            
                checked={checked}
                // checkedColor="#0F0"
                // checkedTitle="Great!"
                // containerStyle={{ width: "75%" }}
                onIconPress={() => setChecked(checked)}
                size={30}
                textStyle={{}}
                title="a"
                titleProps={{}}
                // uncheckedColor="#F00"
        
            />
            <CheckBox
            
            checked={checked}
            // checkedColor="#0F0"
            // checkedTitle="Great!"
            containerStyle={{ width: "75%" }}
            onIconPress={() => setChecked(!checked)}
            size={30}
            textStyle={{}}
            title="b"
            titleProps={{}}
            // uncheckedColor="#F00"
    
        />
        <CheckBox
            
            checked={checked}
            // checkedColor="#0F0"
            // checkedTitle="Great!"
            containerStyle={{ width: "75%" }}
            onIconPress={() => setChecked(!checked)}
            size={30}
            textStyle={{}}
            title="c"
            titleProps={{}}
            // uncheckedColor="#F00"
    
        />
        <CheckBox
            
            checked={checked}
            // checkedColor="#0F0"
            // checkedTitle="Great!"
            containerStyle={{ width: "75%" }}
            onIconPress={() => setChecked(!checked)}
            size={30}
            textStyle={{}}
            title="d"
            titleProps={{}}
            // uncheckedColor="#F00"
    
        /> */}
        
         {/* <Checkbox.Item label="props" status="checked" position="leading"
                status={checked ? 'checked' : 'unchecked'}
                // color={checked?"green":"red"}
                uncheckedColor={'black'}
            onPress={() => {setChecked(!checked);}}
        />
        <Checkbox.Item label="elemets" status="checked" position="leading"
                status={checked ? 'checked' : 'unchecked'}
                // color={checked?"green":"red"}
                uncheckedColor={'black'}
            onPress={() => {setChecked(!checked);}}
        />
        <Checkbox.Item label="component" status="checked" position="leading"
                status={checked ? 'checked' : 'unchecked'}
                // color={checked?"green":"red"}
                uncheckedColor={'black'}
            onPress={() => {setChecked(!checked);}}
         />
        <Checkbox.Item label="none of the options" status="checked" position="leading"
                status={checked ? 'checked' : 'unchecked'}
                // color={checked?"green":"red"}
                uncheckedColor={'black'}
            onPress={() => {setChecked(!checked);}}
        /> */}

            {
                checkbox.map(item=>{
                    return(
                        <View key={item.id}>
                        <CheckBox label={item.label} position={"leading"} status={checked?'checked':'unchecked'}
                               onPress={() => {setChecked(!checked);}}
                                color={checked?"green":"red"}
                        />
                        </View>
                    )
                })
            }

         </View>
            </Card>
        
        <View style={styles.btncontainer}>

            <TouchableOpacity style={styles.loginBtn}>
                <Text style={styles.loginText}>Skip</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.loginBtn}>
                <Text style={styles.loginText}>Next</Text>
            </TouchableOpacity>
        </View>
        </LinearGradient>
    </View>
)

}