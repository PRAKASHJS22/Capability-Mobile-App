import React,{useEffect,useState} from "react";
import { View, Text,TouchableOpacity,
     Image,Dimensions, TextInput,KeyboardAvoidingView,Keyboard,Modal } from "react-native";
import { Card } from "react-native-elements";
import CountDown from 'react-native-countdown-component';
import moment from 'moment';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import LinearGradient from 'react-native-linear-gradient';
import ImageViewer from 'react-native-image-zoom-viewer';


import styles from "./Style";
import { color } from "react-native-elements/dist/helpers";

export default QueryQuestions = ()=>{

    const images = [
        // {
    // Simplest usage.
    // /url: 'https://avatars2.githubusercontent.com/u/7970947?v=3&s=460',
 
    // width: number
    // height: number
    // Optional, if you know the image size, you can set the optimization performance
 
    // You can pass props to <Image />.
    // props: {
    //     // headers: ...
    // }
// }, 
{
    // url: '',
    props: {
        // Or you can set source directory.
        source: require('../../assests/sql_question.jpg'),
        
    
    }
}]

    return( 

<KeyboardAvoidingView behavior={"position"} >  
    <View  style={styles.container}>
    <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#080718', '#01759c', '#00d4ff']}>
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
            <Text style={styles.singlequestion}>Sql Query Questions</Text>
        </View>
        <Card containerStyle={{...styles.Rigistercard,height : Dimensions.get('window').height/2.5,}}>
            <View >
                   <Text style={styles.questionnumber}>Question 1:</Text>   
            </View>
            <View style={{flex:1}}> 
              
                {/* <Image  source={require('../../assests//sql_question.jpg')} style={{width:'100%',flex:.8}} resizeMode='cover'/> */}
               
                {/* <ImageZoom  */}
                        {/* // cropWidth={100}
                    //    cropHeight={100}
                    //   imageWidth={200}
                    //    imageHeight={200} */}
                       {/* > */}
                       {/* <Modal visible={true} transparent={true}> */}
                        <ImageViewer imageUrls={images} backgroundColor='#fff' style={{marginStart:-10}}/>
                        {/* </Modal> */}
            {/* </ImageZoom> */}
            <View >
                  <Text style={styles.questions}>Write a query to find a second highest salary ?</Text>
            </View>
            </View>
        </Card>   

      
         <Card containerStyle={{...styles.Rigistercard,height:Dimensions.get('window').height/3.5}}>

                <View style={{width:'100%',flex:1,justifyContent:'flex-start'}}>
                <TextInput  placeholder='Write your query here.'
                 autoCorrect={false} 
                 multiline numberOfLine={10}
                 autoCapitalize='none'
                returnKeyType={"next"}

                 ></TextInput>
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
        </KeyboardAvoidingView>
)

}