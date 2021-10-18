'use strict';
import React, { useRef } from 'react';
import { StyleSheet, View,Text, Pressable } from 'react-native';
import { RNCamera } from 'react-native-camera';

const Record =()=>{
const camera = useRef(null);

const Submit=async()=>{
  if(camera){
    const { uri, codec = "mp4" } = await camera.current.recordAsync();
    console.info(uri);
  }
}
const Stop=()=>{
  camera.current.stopRecording();
}

const RenderCam=()=>{
  return <RNCamera
  ref={camera}
 style={styles.preview}
 defaultVideoQuality={RNCamera.Constants.VideoQuality["480p"]}
 type={RNCamera.Constants.Type.front}
 flashMode={RNCamera.Constants.FlashMode.on}
 androidCameraPermissionOptions={{
   title: 'Permission to use camera',
   message: 'We need your permission to use your camera',
   buttonPositive: 'Ok',
   buttonNegative: 'Cancel',
 }}
 androidRecordAudioPermissionOptions={{
   title: 'Permission to use audio recording',
   message: 'We need your permission to use your audio',
   buttonPositive: 'Ok',
   buttonNegative: 'Cancel',
 }}
/>
}
    return (
      <View style={styles.container}>
        <View style={{flexDirection:'row',height:100}}>
        <View style={{width:'30%'}}>
             {RenderCam()}
        </View>
        <View style={{width:'70%',backgroundColor:'white',alignItems:'center',justifyContent:'center'}}>
              <Text style={{fontWeight:'bold',fontSize:16}}>Timer Here </Text>
              <Text style={{fontWeight:'bold',fontSize:18}}>Totel Question </Text>
        </View>
        </View>
 
        
        <View style={{flex:1,backgroundColor:'white',margin: 10}}>
            <Text style={{textAlign:'center',margin:5,fontWeight:'bold',fontSize:20}}>Ulive Test Title</Text>
            <View>
               <View>
                    <Text style={{margin: 20}}>Q.1) Most cameras have a Auto Focus feature. It adjusts your camera lens position automatically depending on the pixels seen by your camera.</Text>
                </View>
              <View>
              {[1,2,3,4].map(data=>{
                 return <Text key={data} style={{margin: 15,borderBottomColor:'gray',borderBottomWidth:1}}>option is {data}</Text>
              })
              }
              </View>
            </View>
        </View>
        <View style={{flexDirection:'row'}}>
          <Pressable onPress={Submit} 
           style={{height: 50,backgroundColor:'#000',width:'100%',alignItems:'center',justifyContent:'center'}}>
             <Text style={{color:'white',fontWeight:'bold',fontSize:20}}>Submit</Text>
          </Pressable>
          {/* <Pressable onPress={Stop} 
           style={{height: 50,backgroundColor:'black',width:'50%',alignItems:'center',justifyContent:'center'}}>
            <Text style={{color:'white',fontWeight:'bold',fontSize:20}}>Stop Rec</Text>
          </Pressable> */}
        </View>
      
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  preview: {
     width:'100%',
     height:55
  }
});

export default Record;