import { StyleSheet,Dimensions } from "react-native";

 const styles = StyleSheet.create({
    container: {
      height:'100%',
      backgroundColor: "#fff",
    //   alignItems: "center",
    },
    imageThumbnail: {
      // justifyContent: 'center',
      // alignItems: 'center',
      alignSelf:'center',
      // height:Dimensions.get('window').height/6,
      // width:Dimensions.get('window').width,
      resizeMode : 'contain',
      width:100,
      height:60

    },
    textStyle:{
        justifyContent:'center',
        alignItems:'center',
      fontSize:20,
      fontWeight:'400',
      textDecorationLine:'underline',
      textTransform:'uppercase'
    },
    tiles : {
      flex: 1,
      height : Dimensions.get('window').height/5,
    //   margin : 10,
      flexDirection: 'column',
      shadowColor: 'green',

    },
      topicename :{
        backgroundColor : '#17A2B8',
        // alignItems : 'center',
        borderRadius: 5,
        opacity : .5,
        height:Dimensions.get('window').height/15,
        // justifyContent:'flex-start',
         alignItems:'center',
         marginVertical:10,
         flexDirection:'row',
         color:'#fff',
         justifyContent:'center'
     
      }, 
       topicenametext : {
         color : '#000',
         fontWeight : 'bold',
         fontSize:20,
      },
      Rigistercard: {
        // flex : 1,
        marginHorizontal:5,
        marginVertical:8,
        backgroundColor: "#fff",
        // alignSelf: "center",
        height : Dimensions.get('window').height/8,
        // marginBottom: 10,
        width: Dimensions.get('window').width/5,
        borderRadius:15,
        shadowColor:'#000',
        shadowOffset: { width: 10, height: 10 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 10,     
    
      },
      dropdownstyle:{
          marginHorizontal:20,
          marginTop:10
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
   
  });



  export default styles;