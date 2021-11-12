import { StyleSheet,Dimensions } from "react-native";

 const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: "#fff",
      // alignItems:'center',
      // justifyContent:'flex-start'
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
     flex:1,
    width:Dimensions.get('window').width/3.9,

    top:30,
    flexDirection:'row',
    justifyContent:'space-between',
    // backgroundColor:'yellow'
   
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