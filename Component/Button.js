import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Button} from 'react-native';

const ButtonCom = text => {
  console.log(text);
  return (
    <View>
      <TouchableOpacity
        style={{
          alignItems: 'center',
          backgroundColor: 'black',
          padding: 5,
          width: 200,
        }}>
        <Text
          style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}
          disabled={true}>
          Reset
        </Text>
      </TouchableOpacity>
    </View>
  );
};
export default ButtonCom;
