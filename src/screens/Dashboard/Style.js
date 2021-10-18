import { StyleSheet,Dimensions } from "react-native";

 const styles = StyleSheet.create({
    container: {
      height:'100%',
      backgroundColor: "#FEE0D5",
      alignItems: "center",
    },
    imageThumbnail: {
      // justifyContent: 'center',
      // alignItems: 'center',
      alignSelf:'center',
      // height:Dimensions.get('window').height/6,
      // width:Dimensions.get('window').width,
      resizeMode : 'contain',
      width:100,
      height:90

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
      margin : 10,
      flexDirection: 'column',
     
  
    },
      topicename :{
        backgroundColor : '#ccc',
        alignItems : 'center',
        borderRadius: 5,
        opacity : .5,
        height:Dimensions.get('window').height/22,
        justifyContent:'center',
         alignItems:'center',
     
      }, 
       topicenametext : {
         color : '#000',
         fontWeight : 'bold',
      },
      Rigistercard: {
        flex : 1,
        marginHorizontal:5,
        marginVertical:8,
        backgroundColor: "#fff",
        alignSelf: "center",
        height : Dimensions.get('window').height/4.2,
        // marginBottom: 10,
        width: Dimensions.get('window').width/2.3,
        borderRadius:25,
        
      },
   
  });



  export default styles;