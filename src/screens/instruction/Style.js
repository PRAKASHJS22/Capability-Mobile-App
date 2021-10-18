import { StyleSheet,Dimensions } from "react-native";

 const styles = StyleSheet.create({
    container: {
      height:'100%',
      backgroundColor: "#fff",
    //   alignItems: "center",
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
    backgroundColor: '#fff',
    alignSelf: 'center',
    height: Dimensions.get('window').height / 2,
    marginBottom: 10,
 width: Dimensions.get('window').width / 1.1,
  },
      topicename :{
        backgroundColor : '#343A40',
        borderRadius: 5,
        opacity : .5,
        height:Dimensions.get('window').height/18,
        // justifyContent:'flex-start',
         alignItems:'center',
         marginVertical:10,
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
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
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
    lineHeight:25
   }
  });



  export default styles;