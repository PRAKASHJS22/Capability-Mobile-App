import { StyleSheet,Dimensions } from "react-native"
import { color } from "react-native-elements/dist/helpers";

 
const styles = StyleSheet.create({
    container: {
      // height:'100%',
      // width:"100%",
      flex:1,
      backgroundColor: "#fff",
      // margin:10
    //   alignItems: "center",
    //   justifyContent: "center",
    },
   
headerstyle:{
  flexDirection:'row',
  justifyContent:'space-between',
  alignItems:'center',
  margin:5,

},
singlequestion:{
  textAlign:'center',
  marginVertical:5,
  fontSize:16,
  // color:'#17A2B8',
  color:'#fff',
  fontWeight:'bold'

},
Rigistercard: {
  // flex:1,
  flexDirection:'row',
  // marginHorizontal:5,
  marginVertical:8,
  backgroundColor: "#fff",
  alignSelf: "center",
  height : Dimensions.get('window').height/3.1,
  // marginBottom: 10,
  // width: Dimensions.get('window').width/1.1,
  borderRadius:15,
  shadowColor:'#000',
  shadowOffset: { width: 10, height:10 },
  shadowOpacity: 0.1,
  shadowRadius: 5,
  elevation: 20,     
},
questionnumber : {
  fontWeight:'800',
  // height : Dimensions.get('window').height/5,
},
questions:{
  marginVertical:3,
  fontWeight:'bold',
  width:Dimensions.get('window').width/1.2,
  height : Dimensions.get('window').height/1,
  flexWrap:'wrap',
},

radiocontainer:{
  // flex:1,
  width:Dimensions.get("window").width/1.2,
  // height : Dimensions.get('window').height/1.2,
  marginLeft:-5,
  alignItems:'flex-start',
},
linearGradient:{
  display: 'flex',
  shadowColor: '#000',
  shadowOffset: {width: 5, height: 5},
  shadowOpacity: 0.5,
  elevation: 3,
},
textStyle:{
  marginTop:-30,
  marginBottom:40,
  fontSize:30,
  fontWeight:'600',
  textDecorationLine:'underline',
  textTransform:'uppercase'
},
   icon:{
    marginLeft:50
   },
    inputView: {
      backgroundColor: "#0E4B5C",
      borderRadius: 30,
      width: "90%",
      height: 45,
      marginBottom: 20,
      flexDirection:'row'
    },
   
    TextInput: {
      height: 50,
      flex: 1,
      padding: 10,
      paddingLeft:40,
      fontSize:16,
      color:'#fff'
       
      
    },
    btncontainer:{
      flexDirection:'row',
      justifyContent:'space-around',
      // marginVertical:10,
      marginBottom:50,
    },
    loginBtn: {
      width: Dimensions.get('window').width/3,
      borderRadius: 25,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 10,
      // backgroundColor: "#833ab4",
      borderWidth:1,
      borderColor:'#fff'
      
    },
    loginText:{
      fontSize:16,
      color:'#fff'
    },
    errorText:{
      fontSize:14,
      marginLeft:40,
      marginBottom:10,
      marginVertical:-10,
      color:'red',
      textAlign:'left',
      alignSelf:'flex-start'
    },
   
  });
  

  export default styles;
  