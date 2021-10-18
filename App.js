import React from 'react';
import {
  Button,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

// import { Provider } from 'react-redux';
// import { store } from './src/redux/reducers/Reducers';
// import { decrement, increment } from './src/redux/actions/Actions';
// import { useDispatch } from 'react-redux';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import Register from './src/screens/register/Register';
// import Login from './src/screens/login/Login';
// import ListOfTopics from './src/screens/dashboard/ListOfTopics';
// import LevelSelect from './src/screens/selectTest/TestSelect'
// import Instruction from './src/screens/instruction/Instruction';
// import SingleChoice from './src/screens/singlechoice/SingleChoice';
// import MultipleChoice from './src/screens/multiplechoice/MultipleChoice';
// import VideoRecord from './src/screens/CameraModule/VideoRecord';
// import QueryQuestions from './src/screens/query/QueryQuestions';
// import MyTabs from './src/navigation/BottomTab';
// import AuthStack from './src/navigation/AuthStack';
// import DrawerStack from './src/navigation/Drawer';

import MainStack from './src/navigation/MainStack';

const App = () => { 

  return (
    <View style={{flex:1}}>
        {/* <Login/> */}
        {/* <Register/> */}
        {/* <ListOfTopics/> */}
        {/* <LevelSelect/> */}
        {/* <Instruction/> */}
        {/* <SingleChoice/> */}
        {/* <MultipleChoice/> */}
        {/* <QueryQuestions/> */}
        {/* <VideoRecord/> */}
        {/* <Record/> */}
      
        {/* <MyTabs/> */}
       <MainStack/>
       {/* <AuthStack/> */}
       {/* <DrawerStack/> */}

       {/* <Provider store={store}>
       <View>
      
         <Button onPress={()=> increment() }>Increment</Button>
         <Button onPress={()=> decrement()}>Decrement</Button>
       </View>

       </Provider> */}
      
    </View>
  );
};

export default App;
