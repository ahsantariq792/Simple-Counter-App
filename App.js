import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  const [counter, setCounter] = useState(0)
  return (
    <View style={styles.container}>
      <View style={styles.containerbox}>
        <Text style={styles.textStyle}>{counter}</Text>

        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => { setCounter(counter + 10) }}
        >
          <Text style={styles.buttonText}>+10</Text>

        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.buttonStyle,styles.blue]}
          onPress={() => { setCounter(0) }}
        >
          <Text style={styles.buttonText}>Reset</Text>


        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.buttonStyle, styles.red]}
          onPress={() => { setCounter(counter - 10) }}

        >
          <Text style={styles.buttonText}>-10</Text>

        </TouchableOpacity>


      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerbox: {
    borderWidth: 5,
    borderColor: "#fff",
    alignItems: 'center',
    justifyContent: 'center',
    padding: 80,
    borderRadius: 10,
  },
  container: {
    flex: 1,  
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#7099c2'
  },
  buttonStyle: {
    backgroundColor: 'green',
    width: 140,
    height: 44,
    margin: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,

  },
  textStyle: {
    color: '#fff',
    fontSize: 40,
    margin: 20,
  },
  red:{
    backgroundColor: "red"
  },
  blue: {
    backgroundColor: "#000080"
  },
  
});
