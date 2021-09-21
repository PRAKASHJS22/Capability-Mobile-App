import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


 const MyIcon = ({name,size,color}) => {
     return(
            <FontAwesome name={name} size={size} color={color} />
     );
} 

export default MyIcon;