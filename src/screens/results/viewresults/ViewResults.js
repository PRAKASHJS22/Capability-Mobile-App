import React,{useState} from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import moment from 'moment'
import { Card } from "react-native-elements";
import DropDownPicker from 'react-native-dropdown-picker';
import { List } from 'react-native-paper';
import styles from "./Style";
import { ScrollView } from "react-native-gesture-handler";
import { VirtualizedList } from "react-native";



const viewResults = ()=>{

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        {label: 'All results', value: 1,},
        {label: 'Correct', value: 'Correct'},
        {label: 'Wrong', value: 'Wrong'},
    ]);

    // const date = new Date().getDate();
    // const month = new Date().getMonth() + 1; //Current Month
    // const year = new Date().getFullYear(); //Current Year
    const date= moment().format("YYYY-MM-D" )

    const[error,setError]=useState(true)

    const DATA=[
        {
            id:1,
            question:'Which of these methods is used to add elements in vector at specific location?',
            options:[ {1:'add()'},
                      {2:'set()'},
                      {3:'AddElement()'},
                      {4:'addElement'}
                    ],
            correct:'Correct',
            Wrong:'Wrong'

        },
        {
            id:2,
            question:'Which of these are legacy classes?',
            options:[ {1:'Stack'},
                      {2:'Hashtable'},
                      {3:'Vector'},
                      {4:'All of the aboove'}
                    ],
            correct:'Correct',
            Wrong:'Wrong'

        },
        {
            id:3,
            question:'What is the name of a data member of class Vector which is used to store a number of elements in the vector?',
            options:[ {1:'length'},
                      {2:'elements'},
                      {3:'elementCount'},
                      {4:'capacity'}
                    ],
            correct:'Correct',
            Wrong:'Wrong'

        }

]

    return(
        
        <View style={styles.container}>

        {/* <ScrollView> */}
            <Card containerStyle={{shadowOffset:4,shadowOpacity:1,shadowColor:'#000',elevation:10}}>
                <View style={{justifyContent:'flex-start',marginHorizontal:5,marginVertical:1}}>
                    <Text style={styles.text}>Name :Prakash</Text>
                    <Text style={styles.text}>Email :prakashjs22@gmail.com</Text>
                    <Text style={styles.text}>Phone Number :8553514688</Text>
                    <Text style={styles.text}>Results:10/13</Text>
                    {/* <Text style={styles.text}>Date :{date}{month}{year}</Text> */}
                    <Text style={styles.text}>Date :{date} </Text>
                    <Text style={styles.text}>Test ID :ReactJS-Beginner-4</Text>
                </View>
            </Card>

            <View style={{flexDirection:'row', justifyContent:'space-evenly',marginVertical:10}}>
                <View>
                     <Text style={{fontWeight:'700',fontSize:14}}>Filter by Answer result :</Text>
                </View>

                <TouchableOpacity style={styles.pdfStyle}>
                     <Text style={{color:'#fff',fontWeight:'700'}}>Save this reporst as Pdf</Text>
                </TouchableOpacity>

                <View  style={{...styles.dropdownstyle,position:'absolute'}}>

                    <DropDownPicker
                        open={open}
                        placeholder='All Results'
                        placeholderStyle={{
                        justifyContent:'center',
                        alignItems:'center',
                        color: "grey",
                        fontWeight: "bold",
                        }}
                        // searchable={true}
                        // closeAfterSelecting={true}
                        // itemSeparator={true}
                        dropDownContainerStyle={{backgroundColor:'#007BFF'}}
                        selectedItemLabelStyle={{fontWeight: "bold",
                        // backgroundColor:'#5AAAFF'
                        }}
                        listItemLabelStyle={{color: "#fff",}}
                        selectedItemContainerStyle={{backgroundColor: "powderblue"}}
                     
                        value={value}
                        items={items}
                        setOpen={setOpen}
                        setValue={setValue}
                        setItems={setItems}
                     />
                </View>
           
            </View>

            <View style={{flex:1}}>
                <FlatList 
                    data={DATA}
                    keyExtractor={(item,index)=>{index.toString()}}
                    ListFooterComponent={()=> <View style={{marginBottom:50}}></View>}
                    renderItem={({item})=>

                         <Card containerStyle={styles.Rigistercard}> 
                                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={styles.rules}>{item.id +"."}</Text>
                                        <Text style={styles.rules}>{item.question}</Text>
                                    </View>      
                                </View> 

                                <View style={{justifyContent:'flex-end',alignItems:'flex-end'}}>
                                    <Text style={{color:!error ?'red':'green',fontWeight:'700'}}>{item.correct}</Text>
                                </View>

                                <View style={{marginLeft:10,}}>
                                        <View style={{flexDirection:"row"}}>
                                            <Text>{Object.keys(item.options[0])}{"."}</Text>
                                            <Text>{item.options[0][1]}</Text>
                                        </View>
                                        <View style={{flexDirection:"row"}}>
                                            <Text>{Object.keys(item.options[1])}{"."}</Text>
                                            <Text>{item.options[1][2]}</Text>
                                        </View>
                                        <View style={{flexDirection:"row"}}>
                                            <Text>{Object.keys(item.options[2])}{"."}</Text>
                                            <Text>{item.options[2][3]}</Text>
                                        </View>
                                        <View style={{flexDirection:"row"}}>
                                            <Text>{Object.keys(item.options[3])}{"."}</Text>
                                            <Text>{item.options[3][4]}</Text>
                                        </View>
                                         {console.log(item.options[1][1])}
                                </View>

                                <View style={{margin:5}}>
                                    <Text style={{fontWeight:'700'}}>Actual Answer:</Text>
                                    <Text style={{marginLeft:15,color:'green',fontWeight:'700'}}>{item.options[3][4]}</Text>
                                </View>

                                <View style={{margin:5}}>
                                    <Text style={{fontWeight:'700'}}>User Answer:</Text>
                                    <Text style={{marginLeft:15,color:'green',fontWeight:'700'}}>{item.options[3][4]}</Text>
                                </View>
                                    

                        </Card> 

                    }

                />
            </View>

        
            
      
      {/* </ScrollView>     */}
    </View>
   
    )
}

export default viewResults;