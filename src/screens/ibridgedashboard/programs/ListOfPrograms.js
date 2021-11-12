import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ImageBackground,
  ScrollView,
  StyleSheet,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Card, Title, Button, Paragraph, List, BottomNavigation} from 'react-native-paper';

import styles from './Style';


export const Programs = ({navigation}) => {
  const [category, setCategory] = useState([
    {
      name: 'Data Engineering',
      id: '1',
      source: require('../../../assests/ibridge/dataEngineering_cardImg.jpg'),
    },

    {
      name: 'Microsoft Business Intelligence',
      id: '2',
      source: require('../../../assests/ibridge/crpd.jpeg'),
    },
    {
      name: 'Quality Assurance',
      id: '3',
      source: require('../../../assests/ibridge/Quality_Assurance.jpeg'),
    },
    {
      name: 'Business Analyst',
      id: '4',
      source: require('../../../assests/ibridge/Business_Ana.jpg'),
    },
  ]);
  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.container1}>
        <View style={{width: '40%'}}>
          <ImageBackground
            source={require('../../../assests/ibridge/logo.png')}
            style={{height: 90}}></ImageBackground>
        </View>

        <TouchableOpacity>
          <View style={styles.container4}>
            <Text style={styles.text}>Sign In</Text>
            <Ionicons
              name="ios-log-in-outline"
              size={20}
              color="grey"
              style={{fontSize: 30}}
            />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.container2}>
        <Text style={styles.text1}>CURRENT PROGRAM OFFERINGS</Text>
      </View>

      <FlatList
        horizontal
        keyExtractor={item => item.id}
        data={category}
        showsVerticalScrollIndicator={true}
        renderItem={({item}) => (
          <View style={styles.container3}>
            <Card style={styles.cardContainer}>
              <Card.Cover style={{}} source={item.source} />

              <Title style={{textAlign: 'center'}}>{item.name}</Title>

              <Card.Actions>
                <View style={{flexDirection: 'column'}}>
                  <Text style={styles.text2}>500 Hours |Online</Text>
                  <TouchableOpacity style={styles.button}>
                    <Text style={styles.text3}>Program Details</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Payment')} >
                    <Text style={styles.text3}>Enroll To This Program</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.button}>
                    <Text style={styles.text3}>Explore ILearn Courses</Text>
                  </TouchableOpacity>
                  <View
                    style={{
                      width: 270,
                      marginHorizontal: 10,
                      borderBottomWidth: 1.5,
                      borderBottomColor: 'grey',
                      marginTop: 25,
                      marginBottom: 20,
                    }}
                  />
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <Text style={styles.text4}>ESTIMATED TIME</Text>
                    <Text style={styles.text4}>STARTS ON</Text>
                  </View>
                  <View
                    style={{
                      marginTop: 10,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <Text style={{fontSize: 15}}>3 Months</Text>
                    <Text style={{fontSize: 15}}>Nov 8,2021 to Jan 8,2022</Text>
                  </View>
                  <View
                    style={{
                      marginTop: 10,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <Text style={{fontSize: 15, color: 'grey'}}>
                      At 8 hrs/day
                    </Text>
                    <Text style={styles.text5}>
                      Get access to classroom immediately on enrollment
                    </Text>
                  </View>
                </View>
              </Card.Actions>
            </Card>
          </View>
        )}
      />
   
    </View>
    </ScrollView>
  );
};
export default Programs;