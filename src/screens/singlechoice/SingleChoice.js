import React,{useEffect,useState} from "react";
import { View, Text,TouchableOpacity} from "react-native";
import { Card } from "react-native-elements";
import CountDown from 'react-native-countdown-component';
import moment from 'moment';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { RadioButton} from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';

import RadioGroup from 'react-native-radio-buttons-group';

import styles from "./Style";
import { color } from "react-native-elements/dist/helpers";

export default SingleChoice = ()=>{

    // const [totalDuration, setTotalDuration] = useState(0);

    const [value, setValue] = useState(null);


    const radioButtonsData = [{
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

    const [radioButtons, setRadioButtons] = useState(radioButtonsData)

    function onPressRadioButton(radioButtonsArray) {
        setRadioButtons(radioButtonsArray);
        // alert(JSON.stringify(radioButtonsArray))
    }

    // useEffect(() => {
    //   // Coundown timer for a given expiry date-time
    //   let date = 
    //     moment()
    //       .utcOffset('+05:30')
    //       .format('YYYY-MM-DD hh:mm:ss');
      
    //   // Getting the current date-time
    //   // You can set your own date-time
    //   let expirydate = '2021-09-25 11:35:00';
      
    //   let diffr = 
    //     moment
    //       .duration(moment(expirydate)
    //       .diff(moment(date)));
    //   // Difference of the expiry date-time
    //   var hours = parseInt(diffr.asHours());
    //   var minutes = parseInt(diffr.minutes());
    //   var seconds = parseInt(diffr.seconds());
  
    //   // Converting in seconds
    //   var d = minutes * 60 + seconds;
  
    //   // Settign up the duration of countdown
    //   setTotalDuration(d);
    // }, []);


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
            <Text style={styles.singlequestion}>Single Choice Questions</Text>
        </View>
        <Card containerStyle={styles.Rigistercard}>
            <View >
                   <Text style={styles.questionnumber}>Question 1:</Text>   
            </View>
            <View style={{flexWrap:'wrap'}}> 
                <Text style={styles.questions}>What is the smallest building block of ReactJS?</Text>
            </View>
        </Card>   

        {/* <View style={{justifyContent:'spac-around',alignContent:'space-between'}}> 

            <RadioButton.Group onValueChange={newValue => {setValue(newValue)}} value={value}>

                        <RadioButton value="none of the options" />
                    
                        <RadioButton value="props" />
                        <RadioButton value="elements" />
                        <RadioButton value="components" />

            </RadioButton.Group>
        </View> */}
        
        <Card containerStyle={styles.Rigistercard}>
                <View style={styles.radiocontainer}> 
                    <RadioGroup 
                        radioButtons={radioButtons}
                        onPress={onPressRadioButton} 
                        containerStyle={styles.radiocontainer}
                        layout={"column"}
                    />
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