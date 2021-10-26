// import React from 'react'
// import { View,Text,TouchableOpacity} from 'react-native'
// import { Card } from "react-native-elements";


// const Assigned_Tests=()=> {
//     return (
//       <View>
//          <Card >
//             <View style={{flexDirection:'row'}}>

//                     <Text>
//                         Assigned test
//                     </Text>
        
//             </View>

//             <View style={{flexDirection:'row',justifyContent:'space-around',marginVertical:10}}>

//                     <TouchableOpacity >
//                         <Text >Start Test</Text>
//                     </TouchableOpacity>
//                     <TouchableOpacity >
//                         <Text >Cancel Test</Text>
//                     </TouchableOpacity>
//             </View>
//          </Card>
//       </View>
//     )
// }


import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { Table, TableWrapper, Row, Cell } from 'react-native-table-component';
import { Searchbar } from 'react-native-paper';

 const Assigned_Tests =()=> {
const [data,Setdata]=useState({
    tableHead: ['Question Paper Name', 'Topic', 'Skill Level', 'Test Id','Assigned Date','Start Test'],
      tableData: [
        ['Digital Resource Sql', 'Oracle SQL', 'Beginner','Digital Resource Sql','26/10/2021',''],
        ['Digital Resource Sql', 'Oracle SQL', 'Beginner','Digital Resource Sql','26/10/2021',''],
        ['Digital Resource Sql', 'Oracle SQL', 'Beginner','Digital Resource Sql','26/10/2021',''],
        ['Digital Resource Sql', 'Oracle SQL', 'Beginner','Digital Resource Sql','26/10/2021',''],
        ['Digital Resource Sql', 'Oracle SQL', 'Beginner','Digital Resource Sql','26/10/2021',''],
        ['Digital Resource Sql', 'Oracle SQL', 'Beginner','Digital Resource Sql','26/10/2021',''],
        ['Digital Resource Sql', 'Oracle SQL', 'Beginner','Digital Resource Sql','26/10/2021',''],
        ['Digital Resource Sql', 'Oracle SQL', 'Beginner','Digital Resource Sql','26/10/2021',''],
        ['Digital Resource Sql', 'Oracle SQL', 'Beginner','Digital Resource Sql','26/10/2021',''],
        ['Digital Resource Sql', 'Oracle SQL', 'Beginner','Digital Resource Sql','26/10/2021',''],
        ['Digital Resource Sql', 'Oracle SQL', 'Beginner','Digital Resource Sql','26/10/2021',''],
        ['Digital Resource Sql', 'Oracle SQL', 'Beginner','Digital Resource Sql','26/10/2021',''],
        ['Digital Resource Sql', 'Oracle SQL', 'Beginner','Digital Resource Sql','26/10/2021',''],
        ['Digital Resource Sql', 'Oracle SQL', 'Beginner','Digital Resource Sql','26/10/2021',''],
        ['Digital Resource Sql', 'Oracle SQL', 'Beginner','Digital Resource Sql','26/10/2021',''],
        ['Digital Resource Sql', 'Oracle SQL', 'Beginner','Digital Resource Sql','26/10/2021',''],
        ['Digital Resource Sql', 'Oracle SQL', 'Beginner','Digital Resource Sql','26/10/2021',''],
        ['Digital Resource Sql', 'Oracle SQL', 'Beginner','Digital Resource Sql','26/10/2021',''],
    
      ]

})

const [searchQuery, setSearchQuery] = useState(data.tableData[0]);

const onChangeSearch = query => setSearchQuery(alert(query));
   

  const alertIndex=(index)=> {
    Alert.alert(`This is row ${index + 1}`);
  }

  
    // const data=
    const element = (data, index) => (
      <TouchableOpacity onPress={() => alertIndex(index)}>
        <View style={styles.btn}>
          <Text style={styles.btnText}>Start Test</Text>
        </View>
      </TouchableOpacity>
    );

    return (
      <View style={styles.container}>
        
        <ScrollView>
            <View style={{marginVertical:10,}}> 
                <Text>Assigned Tests</Text>
                <Searchbar
                    placeholder="Search"
                    onChangeText={onChangeSearch}
                    value={searchQuery}
                    iconColor='blue'
              />
              
            </View>
        <ScrollView horizontal={true} >
     
        <Table borderStyle={{borderColor: 'transparent',borderWidth:2}}>
        
          <Row data={data.tableHead} style={styles.head} textStyle={styles.text} />
          {
            data.tableData.map((rowData, index) => (
              <TableWrapper key={index} style={styles.row}>
                {
                  rowData.map((cellData, cellIndex) => (
                    <Cell key={cellIndex} data={cellIndex ===5? element(cellData, index) : cellData} textStyle={styles.text}/>
                  ))
                }
              </TableWrapper>
              
            ))
          }
         
        </Table>
        </ScrollView>
        </ScrollView>
      </View>
    )
  }

const styles = StyleSheet.create({
  container: { 
      flex: 1,
    //   padding: 16,
    //   paddingTop: 30,
      backgroundColor: '#fff' 
    },
  head: { 
      height: 80,
      backgroundColor: '#1976D2',
     
      
     },
  text:{ 
      margin:5,
      fontSize:14,
      paddingVertical:10,
      paddingHorizontal:4
     },
  row: { 
      
      flexDirection: 'row', 
      backgroundColor: '#FFF1C1'
     },
  btn: {
       width: 58,
       height: 18,
       backgroundColor: '#1976D2',
       borderRadius: 5 
        },
  btnText: { 
      textAlign: 'center',
      color: '#fff' }
});

export default Assigned_Tests
