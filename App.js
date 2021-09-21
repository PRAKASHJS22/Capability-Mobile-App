import React from 'react';
import {
  View,
} from 'react-native';

import Register from './src/screens/register/Register';
import Login from './src/screens/login/Login';
import ListOfTopics from './src/screens/Dashboard/ListOfTopics';

const App = () => { 
  return (
    <View>
        {/* <Login/> */}
        {/* <Register/> */}
        <ListOfTopics/>
    </View>
  );
};

export default App;
