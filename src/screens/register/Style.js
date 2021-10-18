import { StyleSheet } from "react-native"

 
const styles = StyleSheet.create({
    container: {
      height:'100%',
      backgroundColor: "#FEE0D5",
      alignItems: "center",
      justifyContent: "center",
    },
   
    image: {
      marginTop:-30,
      marginBottom: 40,
      height: '20%',
      width: '35%',
      resizeMode: 'contain',
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
      position:'absolute',
      marginHorizontal:10,
      marginVertical:10,
      paddingVertical:3

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
    loginBtn: {
      width: "50%",
      borderRadius: 25,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 10,
      backgroundColor: "tomato",
      
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
  