import { StyleSheet,Dimensions } from "react-native";

const styles = StyleSheet.create({
   container: {
     flex:1,
     backgroundColor: "#fff",
     justifyContent: "flex-start",
     alignContent:'center',
    //  alignItems:'center'
    //  marginTop:10
   },
   header:{
    justifyContent:'center',
    alignItems:'center',
    fontWeight:'bold',
    color:'#EB9752',
    fontSize:30,
   },
   text1:{
    color:'#EB9752',
    fontWeight:'700'
   },
   text:{
     fontSize:16,
     fontWeight:'600'
   },
   textStyle:{
     justifyContent:'center',
     alignItems:'center',
     fontSize:20,
     fontWeight:'400',
     textDecorationLine:'underline',
     textTransform:'uppercase'
   },
   Rigistercard: {
   // backgroundColor: 'powderblue',
   alignSelf: 'center',
   flex:1,
   // height: Dimensions.get('window').height / 2.2,
   marginBottom: 10,
   width: Dimensions.get('window').width / 1.1,
   elevation:15,
  
 },
     topicename :{
       backgroundColor : '#343A40',
       borderRadius: 5,
       opacity : .5,
       height:Dimensions.get('window').height/20,
       // justifyContent:'flex-start',
        alignItems:'center',
       //  marginVertical:5,
        flexDirection:'row',
        justifyContent:'center'
    
     }, 
      topicenametext : {
        color : '#F8F9E8',
        fontWeight : 'bold',
        fontSize:20,
     },
     loginBtn: {
       width: "40%",
       borderRadius: 25,
       height: 30,
       alignItems: "center",
       justifyContent: "center",
       // marginTop: 10,
       backgroundColor: "#5AAAFF",
     },
     loginText:{
       fontSize:16,
       color:'#fff'
     },
   rules:{
   fontSize:15,
   fontWeight:'500',
   // numberOfLines:2
   // lineHeight:25
  },
  dropdownstyle:{
   // marginHorizontal:20,
   // marginTop:10
   width:Dimensions.get('window').width/2.9,
   // right:20,
   top:30
},
pdfStyle:{
   justifyContent:'center',
   alignItems:'center',
   height:'35%',
   width:"45%",
   // marginHorizontal:20,
   backgroundColor:'#5CB85C',
   borderRadius:10
}
 });



 export default styles;