import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import ButtonCom from './Component/Button';

const App = () => {
  const [counter, setCounter] = useState(0);
  return (
    <View>
      <Text
        style={{
          backgroundColor: 'black',
          color: 'white',
          padding: 20,
          justifyContent: 'center',
          textAlign: 'center',
          fontWeight: 'bold',
          width: 350,
          marginHorizontal: 20,
          fontSize: 30,
          marginTop: 130,
        }}>
        Counter Application
      </Text>

      <View>
        <Text
          style={{
            fontSize: 100,
            textAlign: 'center',
          }}>
          {counter}
        </Text>
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginVertical: 5,
          padding: 5,
        }}>
        <TouchableOpacity
          onPress={() => setCounter(counter + 1)}
          style={{
            alignItems: 'center',
            backgroundColor: 'black',
            padding: 5,
            width: 200,
          }}>
          <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>
            Increment
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginVertical: 5,
          padding: 5,
        }}>
        <TouchableOpacity
          onPress={() =>
            counter > 0 ? setCounter(counter - 1) : setCounter(0)
          }
          style={{
            alignItems: 'center',
            backgroundColor: 'black',
            padding: 5,
            width: 200,
          }}>
          <Text
            style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}
            disabled={true}>
            Decrement
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginVertical: 5,
          padding: 5,
        }}>
        <TouchableOpacity
          onPress={() => setCounter(0)}
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
      {/* <ButtonCom text={'Reset'} /> */}
    </View>
  );
};
export default App;
