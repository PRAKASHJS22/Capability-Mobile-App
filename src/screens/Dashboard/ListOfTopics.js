import React, { useState,useEffect } from "react";
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  ScrollView,
  Image,


} from "react-native";

import { Card } from "react-native-elements";

import styles from "./Style";


 const ListOfTopics = ()=> {
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'MY-SQL',
      uri:`https://icapability.ibridge360.com/public/images/topics/sql.jpg`

  },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'JAVA',
      uri:`https://icapability.ibridge360.com/public/images/topics/java.jpg`   },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'REACT JS',
      uri:`https://icapability.ibridge360.com/public/images/topics/react.png`   },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'JAVASCRIPT',
      uri:`https://icapability.ibridge360.com/public/images/topics/js.png`
   },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'TABLEAU',
      uri:`https://icapability.ibridge360.com/public/images/topics/tab.png`   },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'UNIX/LINUX',
      uri:`https://icapability.ibridge360.com/public/images/topics/unix.png`   },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'PHP',
      uri:`https://icapability.ibridge360.com/public/images/topics/PHP.png`
   },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'MONGO DB',
      uri:`https://icapability.ibridge360.com/public/images/topics/mongo.png`   },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'PL/SQL',
      uri:`https://icapability.ibridge360.com/public/images/topics/plsql.png`   },
      {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'IOS',
        uri:`https://icapability.ibridge360.com/public/images/topics/ios.png`   },
  ];


// useEffect(async()=>{

//   const response= await axios.get(`https://picsum.photos/id/1`);
//     console.log(response.data)
// },[])

  return (
    <View style={styles.container}>
  
    <Text style={[styles.textStyle]}>List Of Topics</Text>

    <FlatList
            data={DATA}
            ListFooterComponent={()=> <View style={{marginBottom:80}}></View>}
            // ListHeaderComponent={()=> <View style={{marginTop:10}}></View>}
            renderItem={({item}) => (
              <TouchableOpacity onPress={({item})=> alert("U clicked" )}>
               <Card containerStyle={styles.Rigistercard}>
                  <View style={styles.tiles}>
                    <Image
                      style={styles.imageThumbnail}
                      
                      // source={{
                      //   uri: `https://picsum.photos/id/${47}/400/300`                     // }}
                      source={{uri:item.uri}}

                      />
                    <View style={styles.topicename}>
                      <Text style={styles.topicenametext}>{item.title}</Text>
                    </View>
                  </View>
              </Card>
          </TouchableOpacity>
            )}
            numColumns={2}
            keyExtractor={(item, index) => index}
            showsVerticalScrollIndicator={false}
             horizontal={false}
          />
    </View>
  );
}
 

export default ListOfTopics