
import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

export default function App() {

  let [name, setName] = useState( 'Mario' )
  let [age, setAge] = useState( 33 )

  return (
    <View style={styles.container}>
      <Text>Enter name: </Text>
      <TextInput
        multiline
        style={ styles.input }
        placeholder='mario'
        onChangeText={ ( val ) => setName( val ) } />

      <TextInput
        
        style={ styles.input }
        placeholder='age'
        onChangeText={ ( val ) => setAge( val ) } />

      <Text>name: { name }, age: { age }</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200,
  }
});
