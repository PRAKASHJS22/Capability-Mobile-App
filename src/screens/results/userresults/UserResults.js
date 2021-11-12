import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert, ScrollView,KeyboardAvoidingView} from 'react-native';
import { Table, TableWrapper, Row, Cell } from 'react-native-table-component';
import { Searchbar } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import viewResults from '../viewresults/ViewResults';

 const userResults =()=> {
const [data,Setdata]=useState({
    tableHead: ['Test Id', 'Question Topic', 'Skill Level', 'Results','Date','Extra Time Taken'],
      tableData: [
        ['Java-Expert-1', 'JAVA', 'Expert','16/20','26/10/2021','No'],
        ['Java-Beginner', 'JAVA', 'Beginner','17/19','26/10/2021','No'],
        // ['Digital Resource Sql', 'Oracle SQL', 'Beginner','Digital Resource Sql','26/10/2021',''],
        // ['Digital Resource Sql', 'Oracle SQL', 'Beginner','Digital Resource Sql','26/10/2021',''],
        // ['Digital Resource Sql', 'Oracle SQL', 'Beginner','Digital Resource Sql','26/10/2021',''],
        // ['Digital Resource Sql', 'Oracle SQL', 'Beginner','Digital Resource Sql','26/10/2021',''],
        // ['Digital Resource Sql', 'Oracle SQL', 'Beginner','Digital Resource Sql','26/10/2021',''],
        // ['Digital Resource Sql', 'Oracle SQL', 'Beginner','Digital Resource Sql','26/10/2021',''],
        // ['Digital Resource Sql', 'Oracle SQL', 'Beginner','Digital Resource Sql','26/10/2021',''],
    
      ]

})

const [searchQuery, setSearchQuery] = useState(data.tableData[0]);

const onChangeSearch = query => setSearchQuery(query);
   

const alertIndex= index => Alert.alert(`This is row ${index + 1}`);
  
  
    
    // const element = (data, index) => (
    //   <TouchableOpacity onPress={() => alertIndex(index)}>
    //     <View style={styles.btn}>
    //       <Text style={styles.btnText}>Start Test</Text>
    //     </View>
    //   </TouchableOpacity>

    // );

    return (
        // <KeyboardAvoidingView behavior={"height"} >  
      <View style={styles.container}>
        <ScrollView>
            <View style={{marginVertical:10,padding:10}}> 
                <View style={{justifyContent:'center',alignItems:'center',marginBottom:5}}>
                    <Text style={styles.assignedText}>Results</Text>
                </View>
                <View >
                 <MaterialCommunityIcons name="filter-variant" size={25} color="blue"  
                    style={{position:'relative',
                    top:36,
                    right:20,
                    // zIndex:10,
                    alignSelf:'flex-end'

                    }}
                        onPress={()=>{alert('Checking')}}
                    />
                   
                    <Searchbar
                        placeholder="Search"
                        onChangeText={onChangeSearch}
                        value={data.tableData[0][0]}
                        //  {...(alert(data.tableData[0][0]))}
                        iconColor='blue'
                       style={{width:"85%"}}
                    />
                   
                    
                </View>
              
            </View>
        <ScrollView horizontal={true} >
     
        <Table borderStyle={{borderColor: 'transparent',borderWidth:2}}>
        
          <Row data={data.tableHead} style={styles.head} textStyle={styles.text} />
          {
            data.tableData.map((rowData, index) => (
            <TouchableOpacity key={index} onPress={()=>alert('Checking')}>
              <TableWrapper key={index} style={styles.row}>
                {
                  rowData.map((cellData, cellIndex) => (
                   
                        <Cell key={cellIndex} data={cellData} textStyle={styles.text}/>
               
                  ))
                }
              </TableWrapper>
            </TouchableOpacity>
              
            ))
          }
         
        </Table>
        </ScrollView>
        </ScrollView>
      
      </View>
    //   </KeyboardAvoidingView>
   
    )
  }

const styles = StyleSheet.create({
  container: { 
      flex: 1,
    //   padding: 16,
    //   paddingTop: 30,
      backgroundColor: '#fff' 
    },
    assignedText:{

        fontSize:20,
        fontWeight:'bold',
        color:'#1976D2'

    },
  head: { 
      height: 50,
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
      backgroundColor: '#FFF1C1',
      borderBottomWidth:1
     },
  btn: {
       width: 70,
       height: 25,
       backgroundColor: '#1976D2',
       borderRadius: 5 
        },
  btnText: { 
      textAlign: 'center',
      color: '#fff' }
});

export default userResults
