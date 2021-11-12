import React, {Component,} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Collapsible from 'react-native-collapsible';
import Accordion from 'react-native-collapsible/Accordion';
import { Avatar,TextInput} from 'react-native-paper';
import RazorpayCheckout from 'react-native-razorpay';
import { Formik } from 'formik';
import * as Yup from 'yup';


const CONTENT = [
  {
    title: 'CART SUMMARY',
    source:`../../../assests/ibridge/dataEngineering_cardImg.jpg`
  },
];

const CONTENT1 = [
  {
    title: 'LEARNER DETAILS',
  },
];

let Height = Dimensions.get("window").height
let Width = Dimensions.get("window").width

let openRazorPay=()=>{
    const options = {
       description: '',
       image: 'https://ibridge.s3.us-east-2.amazonaws.com/Programs/dataEngineering_cardImg.jpg',
       currency: 'INR',
       key: 'rzp_test_aoVyITw2TJWP9K', // Your api key
       amount: '2360000',
       name: `Data Engineering`,
       prefill: {
       email: 'prakashjs22@gmail.com',
       contact: '8553514688',
    //    name: 'Aroha Technologies',
       },
       theme: {color: '#528FF0'}
   }
      RazorpayCheckout.open(options).then((data) => {
       // handle success
       alert(`Success: ${data.razorpay_payment_id}`);
     }).catch((error) => {
       // handle failure
       alert(`Error: ${error.code} | ${error.description}`);
      });
  }

  const mobileregx = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
  const validationSchema =  Yup.object().shape({
    name: Yup.string().required().label('Name'),
    email: Yup.string().required().email().label('Email'),
    confirm_email: Yup.string().required().email().label('Confirm Email'),
    mobile: Yup.string().required().matches(mobileregx, 'Mobile number is not valid').min(10).max(10).label('Mobile'),
  });

class Payment extends Component {
  state = {
    activeSections: [],
    // collapsed: true,

    activeSections1:[],
    // collapsed1:true,

  };

//   toggleExpanded = () => {
//     this.setState({collapsed: !this.state.collapsed});
//   };

//   toggleExpanded = () => {
//     this.setState({collapsed1: !this.state.collapsed1});
//   };

//   setSections = sections => {
//     this.setState({
//       activeSections: sections.includes(undefined) ? [] : sections,
//     });
//   };
//   setSections1 = sections => {
//     this.setState({
//       activeSections1: sections.includes(undefined) ? [] : sections,
//     });
//   };

  _updateSections = (activeSections) => {
    this.setState({ activeSections });
  };

  _updateSections1 = (activeSections1) => {
    this.setState({ activeSections1 });
  };

  renderHeader = (section, _, isActive) => {
    return (
      <Animatable.View
        duration={400}
        style={[styles.header, isActive ? styles.active : styles.inactive]}
        transition="backgroundColor">
        <View style={{  
                        backgroundColor:'#008DD2',
                        width:Width/2,
                        height:Height/15,
                        alignSelf:'center',
                        justifyContent:'center',
                        borderRadius:20,
                        }}>

        <Text style={styles.headerText}>{section.title}</Text>
        </View>        
      </Animatable.View>
    );
  };

  renderHeader1 = (section, _, isActive) => {
    return (
      <Animatable.View
        duration={400}
        style={[styles.header, isActive ? styles.active : styles.inactive]}
        transition="backgroundColor">
        <View style={{  
                        backgroundColor:'#008DD2',
                        width:Width/2,
                        height:Height/15,
                        alignSelf:'center',
                        justifyContent:'center',
                        borderRadius:20,
                        }}>
        <Text style={styles.headerText}>{section.title}</Text>
        </View>
      </Animatable.View>
    );
  };

  renderContent(section, _, isActive) {
    return (
      <Animatable.View
        duration={400}
        style={[styles.content, isActive ? styles.active : styles.inactive]}
        transition="backgroundColor">

        <View  style={{
                marginHorizontal:5,
                flexDirection:'row',
                justifyContent:'space-between'
            }}>
       
            <Avatar.Image size={100} source={require('../../../assests/ibridge/dataEngineering_cardImg.jpg')} />
        
            <View>
                <Text style={{fontSize:20,fontWeight:'500'}}>Data Engineering</Text>
                <Text style={{color:'grey'}}>Training type: Online</Text>
                <Text style={{color:'grey'}}>Access Validity: 500 Hours</Text>
                <Text style={{color:'grey'}}>No. of learners: 1</Text>
            </View>    
        </View>

        <View style={{alignSelf:'flex-end'}}>

            <View style={{justifyContent:'space-between',flexDirection:'row'}}>
                <Text style={{color:'grey'}}>Total Price: </Text>
                <Text style={{color:'grey'}}>₹ 20000.00</Text>
            </View>

            <View style={{justifyContent:'space-between',flexDirection:'row'}}>
                <Text style={{color:'grey'}}>CGST+SGST(18.00%): </Text>
                <Text style={{color:'grey'}}>₹ 3600.00</Text>
            </View>

            <View style={{justifyContent:'space-between',flexDirection:'row'}}>
                <Text style={{color:'#000'}}>Grand Total: </Text>
                <Text style={{color:'#000',fontWeight:'900'}}>₹ 23600.00</Text>
            </View>

            
        </View>

            <TouchableOpacity style={styles.buttonStyle}>
                <Text style={{
                              textAlign:'center',
                              color:"#fff",
                              fontWeight:'800'
                              }}>PROCEED</Text>
            </TouchableOpacity>
   
      </Animatable.View>
    );
  }

  renderContent1(section, _, isActive) {
    return (
      <Animatable.View
        duration={400}
        style={[styles.content, isActive ? styles.active : styles.inactive]}
        transition="backgroundColor">

        <View style={{margin:10}}>
            {/* <TextInput
                label="Name *"
                placeholder="Prakash J"
                value="Prakash J"
                disabled
            />
            <TextInput
                label="Email *"
                placeholder="prakashjs22@gmail.com"
                value="prakashjs22@gmail.com"
                disabled
            />
            <TextInput
                label="Confirm Email *"
                placeholder="prakashjs22@gmail.com"
                value="prakashjs22@gmail.com"
                disabled
            />
            <TextInput
                label="Phone Number *"
                placeholder="Phone Number"
                // value="Prakash J"
                keyboardType='number-pad'              
            /> */}

            <Formik
              initialValues={{name:'',email: '', phonenumber: ''}}
              validationSchema={validationSchema}
              onSubmit
              onSubmit={values =>alert(JSON.stringify(values))}
            >
             {({values,
            errors,
            handleChange,
            handleBlur,
            handleSubmit,
            touched,
            isValid,
            isSubmitting,}) => (
             <>
       
             <View> 
             
            <View style={{width:'100%'}}>
        
            <TextInput

             label="Name *"
              placeholder="Prakash J"
              // value="Prakash J"
            // disabled
            value={values.name}
            // placeholder="Prakash J"
            // placeholderTextColor="#fff"
            // keyboardType="email-address"
            // autoFocus
            autoCorrect={false}
            onChangeText={handleChange("name")}
            onBlur={handleBlur('name')}
            // returnKeyType='done'
            />  
             
         </View>
      </View>
      {errors.name  && touched.name ?<Text style={styles.errorStyle}>{touched.name && errors.name}</Text>:null}
 
      <View >
        <View style={{width:'100%'}}>
          <TextInput
            label="Email *"
            placeholder="prakashjs22@gmail.com"
            // value="prakashjs22@gmail.com"
            // disabled
            value={values.email}
            placeholder="prakashjs22@gmail.com."
            // placeholderTextColor="#fff"
            // secureTextEntry={hidePass ? true : false }
            onChangeText={handleChange("email")}
            onBlur={handleBlur('email')}
            />
        </View>
        

      </View>
         {errors.email && touched.email ?<Text style={styles.errorStyle}>{touched.email && errors.email}</Text>:null}
 
      <View >
        <View style={{width:'100%'}}>
          <TextInput
            label="Confirm Email *"
            placeholder="prakashjs22@gmail.com"
            // value="prakashjs22@gmail.com"
            // disabled
            value={values.confirm_email}
            placeholder="prakashjs22@gmail.com."
            // placeholderTextColor="#fff"
            // secureTextEntry={hidePass ? true : false }
            onChangeText={handleChange("confirm_email")}
            onBlur={handleBlur('confirm_email')}
            />
        </View>
      </View>

         {errors.confirm_email && touched.confirm_email ?<Text style={styles.errorStyle}>{touched.confirm_email && errors.confirm_email}</Text>:null}

         <View> 
        <View style={{width:'100%'}}>
          <TextInput
            label="Phone Number *"
            placeholder="Phone Number"
            keyboardType='number-pad' 
            maxLength={10}
            onChangeText={handleChange("mobile")}
            onBlur={handleBlur('mobile')}
          /> 
         </View>
         </View>
         {errors.mobile  && touched.mobile ?<Text style={styles.errorStyle}>{touched.mobile && errors.mobile}</Text>:null}
      
             </>
             )}
         </Formik>
             
        </View>
         <TouchableOpacity style={[styles.buttonStyle]}
                          // disabled={!isValid}      
                          onPress={openRazorPay}
                          // onPress={this.handleSubmit}
                          >
                <Text style={{
                              textAlign:'center',
                              color:"#fff",
                              fontWeight:'800'
                              }}>PROCEED
                </Text>
         </TouchableOpacity>
   
      </Animatable.View>
    );
  }

render() {

const {activeSections,activeSections1} = this.state;

    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={{paddingTop: 10}}>
          <Text style={styles.title}>PAYMENT PROCESS</Text>

          <Accordion
            activeSections={activeSections}
            sections={CONTENT}
            touchableComponent={TouchableOpacity}
            renderHeader={this.renderHeader}
            renderContent={this.renderContent}
            duration={100}
            onChange={this._updateSections}
            renderAsFlatList={false}
          />
          <Accordion
            activeSections={activeSections1}
            sections={CONTENT1}
            touchableComponent={TouchableOpacity}
            renderHeader={this.renderHeader1}
            renderContent={this.renderContent1}
            duration={100}
            onChange={this._updateSections1}
            renderAsFlatList={false}
          />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  title: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '300',
    marginBottom: 20,
    color:'#008DD2'
  },
  header: {
    backgroundColor: '#F5FCFF',
    padding: 10,
  },
  headerText: {
    textAlign: 'center',
    fontSize: 16,
    // fontWeight: '500',
    color:"#fff",
    fontWeight:'800'
  },
  content: {
    padding: 20,
    backgroundColor: '#fff',
  },
  active: {
    backgroundColor: 'rgba(255,255,255,1)',
  },
  inactive: {
    backgroundColor: 'rgba(245,252,255,1)',
  },
  selectors: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  selector: {
    backgroundColor: '#F5FCFF',
    padding: 10,
  },
  activeSelector: {
    fontWeight: 'bold',
  },
  selectTitle: {
    fontSize: 14,
    fontWeight: '500',
    padding: 10,
  },
  multipleToggle: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 30,
    alignItems: 'center',
  },
  multipleToggle__title: {
    fontSize: 16,
    marginRight: 8,
  },
  buttonStyle:{
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'center',
    width:Width/2,
    height:Height/25,
    backgroundColor:"#FF8300",
    borderRadius:20,              
    marginVertical:5
  },
  errorStyle:{
    color:'red'
  }
});

export default Payment;
