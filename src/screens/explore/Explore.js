import { VISITOR_KEYS } from "@babel/types";
import React,{useState,useCallback} from "react";
import {Text,View,} from "react-native";
import DropDownPicker from 'react-native-dropdown-picker';
import { ScrollView } from "react-native-gesture-handler";
import { List } from "react-native-paper";
import * as Icon from 'react-native-vector-icons'

import styles from "./Style";


const expolore = ()=>{


    
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        {label: 'Software Services', value: 'Software Services',},
        {label: 'Manufacturing', value: 'Manufacturing'},
        {label: 'Infrastructure', value: 'Infrastructure'},
        {label: 'HealthCare', value: 'HealthCare'},
        {label: 'Education', value: 'Education'},
        {label: 'Retail', value: 'Retail'},
        {label: 'Media', value: 'Media'},
        {label: 'Insurance', value: 'Insurance'},
        {label: 'Banking', value: 'Banking'},
    ]);

    
  const onIndustryOpen = useCallback(() => {
       setOpen1(false)
       setOpen2(false)
  }, []);

  const onDegreeOpen = useCallback(() => {
    setOpen(false)
    setOpen2(false)
  }, []);
  const OnJobOpen = useCallback(() => {
    setOpen(false);
    setOpen1(false)
  }, []);

    const [open1, setOpen1] = useState(false);
    const [value1, setValue1] = useState(null);
    const [degree, setDegree] = useState([
        {label: 'Computer Science Engineering', value: 'Computer Science Engineering',},
        {label: 'Mechanical Engineering', value: 'Mechanical Engineering'},
        {label: 'Civil Engineering', value: 'Civil Engineering'},
        {label: 'Electrical Engineering', value: 'Electrical Engineering'},
        {label: 'Commerece Graduates(B.com,M.com)', value: 'Commerece Graduates(B.com,M.com)'},
        {label: 'Businees Administraion(BBA,MBA)', value: 'Businees Administraion(BBA,MBA)'},
        {label: 'Bachelor Of Arts(BA,MA)', value: 'Bachelor Of Arts(BA,MA)'},
        {label: 'Science Graduates(BCA,MCA)', value: 'Science Graduates(BCA,MCA)'},
        {label: 'Bachelor of Science(BSc,MSc)', value: 'Bachelor of Science(BSc,MSc)'},
    ]);

    const [open2, setOpen2] = useState(false);
    const [value2, setValue2] = useState(null);
    const [job, setJob] = useState([
        {label: 'Application Developer', value: 'Application Developer',},
        {label: 'Mobile Developer', value: 'Mobile Developer'},
        {label: 'Infrastructure Engineer', value: 'Infrastructure Engineer'},
        {label: 'Software Engineer', value: 'Software Engineer'},
        {label: 'Bussiness Analyst', value: 'Bussiness Analyst'},
        {label: 'Quality Analyst', value: 'Quality Analyst'},
        {label: 'Plant Engineer', value: 'Plant Engineer'},
        {label: 'Design Engineer', value: 'Design Engineer'},
        {label: 'Production Engineer', value: 'Production Engineer'},
        {label: 'Quality Engineer', value: 'Quality Engineer'},
        {label: 'Safety Engineer', value: 'Safety Engineer'},
        {label: 'Process Engineer', value: 'Process Engineer'},
        {label: 'Planning Engineer', value: 'Planning Engineer'},
        {label: 'ERP Developer', value: 'ERP Developer'},
        {label: 'IT Support', value: 'IT Support'},
        {label: 'Structural Engineer', value: 'Structural Engineer'},
        {label: 'Circuits  Engineer', value: 'Circuits  Engineer'},
        {label: 'Electrical Controls Engineer', value: 'Electrical Controls Engineer'},
        {label: 'Electrical Design Engineer', value: 'Electrical Design Engineer'},
        {label: 'Electrical Engineer', value: 'Electrical Engineer'},
        {label: 'Electrical Project Engineer', value: 'Electrical Project Engineer'},
        {label: 'Power Systems Engineer', value: 'Power Systems Engineer'},
        {label: 'Instrumentaion and Electrical Engineer', value: 'Instrumentaion and Electrical Engineer'},
        {label: 'Business Operations', value: 'Business Operations'},
        {label: 'Business Accounting', value: 'Business Accounting'},
        {label: 'Marketing  Associate', value: 'Marketing  Associate'},
        {label: 'Human Resource Executive', value: 'Human Resource Executive'},
        {label: 'Business Development', value: 'Business Development'},
        {label: 'Business Administraion', value: 'Business Administraion'},
        {label: 'Lecturer', value: 'Lecturer'},
        {label: 'Public Relations ', value: 'Public Relations'},
        {label: 'Content Creators', value: 'Content Creator'},
        {label: 'Customer Support', value: 'Customer Support'},
        {label: 'Cloud Engineer', value: 'Cloud Engineer'},
        {label: 'Business Management', value: 'Business Management'},
        {label: 'Accounting Executive', value: 'Accounting Executive'},
        {label: 'Finacial Analyst', value: 'Finacial Analyst'},
        {label: 'Program Coordinator', value: 'Program Coordinator'},
        {label: 'Event Manager', value: 'Event Manager'},
        {label: 'Event Operator', value: 'Event Operator'},
        {label: 'Under Writers', value: 'Under Writers'},
        {label: 'Compilance Officer', value: 'Compilance Officer'},
        {label: 'Dieteican', value: 'Dieteican'},
    ]);

    return(
        <View style={styles.container}>

            <View style={{marginTop:20,backgroundColor:'#008DD2',width:'80%',height:'10%',alignItems:'center',justifyContent:'center',alignSelf:'center'}}>
                <Text style={{color:'#fff'}}>EXPLORING JOBS TO FIND YOURS</Text>
            </View>

            {/* <View style={styles.dropdownstyle}>
              <View style={{marginHorizontal:4,flexWrap:'wrap'}}>
                <DropDownPicker
                            open={open}
                            placeholder='Industry'
                            placeholderStyle={{
                            justifyContent:'center',
                            alignItems:'center',
                            color: "grey",
                            fontWeight: "bold",
                            // fontSize:10,
                            // backgroundColor:'red'
                            }}
                            // searchable={true}
                            // closeAfterSelecting={true}
                            // itemSeparator={true}
                            

                            dropDownContainerStyle={{backgroundColor:'#fff'}}
                            selectedItemLabelStyle={{fontWeight: "bold",
                            // backgroundColor:'#5AAAFF'
                            }}
                            listItemLabelStyle={{color: "#000",fontSize:10}}
                            selectedItemContainerStyle={{backgroundColor: "powderblue"}}
                        
                            value={value}
                            items={items}
                            setOpen={setOpen}
                            setValue={setValue}
                            setItems={setItems}

                            onOpen={onIndustryOpen}

                            // onChangeValue={(value) => {alert(value)}}

                            labelProps={{ numberOfLines: 2 }}

                            // zIndex={3000}
                            // zIndexInverse={1000}
                    />
                    
                    </View>
                    <View style={{marginHorizontal:6}}>
                        <DropDownPicker
                                open={open1}
                                placeholder='Degree'
                                placeholderStyle={{
                                justifyContent:'center',
                                alignItems:'center',
                                color: "grey",
                                fontWeight: "bold",
                                }}
                                // searchable={true}
                                // closeAfterSelecting={true}
                                // itemSeparator={true}
                                dropDownContainerStyle={{backgroundColor:'#fff'}}
                                selectedItemLabelStyle={{fontWeight: "bold",
                                // backgroundColor:'#5AAAFF'
                                }}
                                listItemLabelStyle={{color: "#000",fontSize:10}}
                                selectedItemContainerStyle={{backgroundColor: "powderblue"}}
                            
                                value={value1}
                                items={degree}
                                setOpen={setOpen1}
                                setValue={setValue1}
                                setItems={setDegree}

                                onOpen={onDegreeOpen}

                                // onChangeValue={(value) => {alert(value)}}

                                
                                labelProps={{ numberOfLines: 5}}

                      
                        />
                    </View>
                    <View style={{marginHorizontal:6}}>
                        <DropDownPicker
                                open={open2}
                                placeholder='Job'
                                placeholderStyle={{
                                justifyContent:'center',
                                alignItems:'center',
                                color: "grey",
                                fontWeight: "bold",
                                }}
                                // searchable={true}
                                // closeAfterSelecting={true}
                                // itemSeparator={true}
                                dropDownContainerStyle={{backgroundColor:'#fff'}}
                                selectedItemLabelStyle={{fontWeight: "bold",
                                // backgroundColor:'#5AAAFF'
                                }}
                                listItemLabelStyle={{color: "#000",fontSize:10}}
                                selectedItemContainerStyle={{backgroundColor: "powderblue"}}
                            
                                value={value2}
                                items={job}
                                setOpen={setOpen2}
                                setValue={setValue2}
                                setItems={setJob}

                                onOpen={OnJobOpen}


                                // onChangeValue={(value) => {alert(value)}}

                                
                                 labelProps={{ numberOfLines: 2 }}

                        />


                    </View>

                  
            </View>
            { value && value1 && value2 ? 
              <View style={{flex:3}}>
                  <List.Item
                    title={`${value}`}
                    // description="Item description"
                    left={props => <List.Icon {...props} icon="account" />}
                  />
                  <List.Item
                    title={`${value1}`}
                    // description="Item description"
                    left={props =>  <List.Icon {...props} icon="school" />}
                  />
                  <List.Item
                    title={`${value2}`}
                    // description="Item description"
                    left={props => <List.Icon {...props} icon="briefcase" />}
                  />
              </View>
              : null
            } */}
            {/* <Text style={{flex:2,textAlign:'center',color:'blue'}}>{value}{"\n"}{value1}{"\n"}{value2}</Text> */}

<ScrollView>
            <View style={{marginVertical:30}}>
            <List.AccordionGroup>
                <List.Accordion title="Industry" id="1"  >
                     <List.Item title="Software Services"/>                              
                      <List.Item title="Manufacturing"/>
                      <List.Item title="Infrastructure"/>
                      <List.Item title="HealthCare"/>
                      <List.Item title="Education"/>
                      <List.Item title="Manufacturing"/>
                      <List.Item title="Infrastructure"/>
                      <List.Item title="HealthCare"/>
                      <List.Item title="Education"/>
                      <List.Item title="Retail"/>
                      <List.Item title="Insurance"/>
                      <List.Item title="Banking"/>           
                </List.Accordion>

                <List.Accordion title="Degree" id="2">
                    <List.Item title="Computer Science Engineering"/>                         
                    <List.Item title="Mechanical Engineering"/>
                    <List.Item title="Civil Engineering"/>
                    <List.Item title="Electrical Engineering"/>
                    <List.Item title="Commerece Graduates(B.com,M.com)"/>
                    <List.Item title="Businees Administraion(BBA,MBA)"/>
                    <List.Item title="Bachelor Of Arts(BA,MA)"/>
                    <List.Item title="Science Graduates(BCA,MCA)"/>
                    <List.Item title="Bachelor of Science(BSc,MSc)"/>
                </List.Accordion> 

                <List.Accordion title="Job" id="3">
                    <List.Item title="Application Developer"/>                         
                    <List.Item title="Mobile Developer"/>
                    <List.Item title="Infrastructure Engineer"/>
                    <List.Item title="Software Engineer"/>
                    <List.Item title="Bussiness Analyst"/>
                    <List.Item title="Quality Analyst"/>
                    <List.Item title="Bachelor Of Arts(BA,MA)"/>
                    <List.Item title="Plant Engineer"/>
                    <List.Item title="Design Engineer"/>
                </List.Accordion> 
            </List.AccordionGroup>
            </View>

</ScrollView>

        </View>
    )
}

export default expolore;