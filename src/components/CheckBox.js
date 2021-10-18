import React, { useState } from 'react'
import { View } from 'react-native'
import { Checkbox } from 'react-native-paper';



const CheckBox = (props)=> {
    const{label,position,onPress,status,color}=props
    const[checked,setChecked]=useState('')
    // onPress = () => {setChecked(!checked)}
    return (
        <View>
              <Checkbox.Item label={label} status={status} position={position}
                // status={status}
                color={color}
                // uncheckedColor={'black'}
            onPress={onPress}
        />
        </View>
    )
}

export default CheckBox;
